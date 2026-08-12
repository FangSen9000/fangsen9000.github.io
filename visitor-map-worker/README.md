# Self-hosted visitor map backend

This Worker records privacy-preserving, approximate visitor locations for the
static GitHub Pages site. It stores no raw IP addresses. A random browser ID is
hashed with a private Worker secret and rotated daily, so one browser is counted
at most once per day. Coordinates are rounded to the nearest 0.5 degree before
storage.

## Retention policy

Visitor history is cumulative from the day the Worker is deployed:

- `locations` stores lifetime totals by approximate location and is never
  automatically deleted.
- `daily_locations` stores daily totals by approximate location and is never
  automatically deleted. This is the long-term historical record.
- `visitor_days` only prevents one anonymous browser from being counted more
  than once per day. These anonymous hashes contain no location or visit count
  and are removed after eight days. Removing them does not remove or change any
  visitor history.

There is no retention limit in the application code for either aggregate table.
Ten or more years of daily aggregates are expected to remain small. The only
ways to lose them are deleting/replacing the database, an unrecovered provider
failure, or exceeding a provider limit. Independent exports are therefore part
of the design, not an optional convenience.

## One-time deployment

1. Create or sign in to a Cloudflare account.
2. In this directory, install Wrangler and sign in:

   ```powershell
   npm.cmd install
   npx.cmd wrangler login
   ```

3. Create the D1 database:

   ```powershell
   npx.cmd wrangler d1 create visitor-map
   ```

4. Copy the returned `database_id` into `wrangler.toml`.
5. Create two secrets with long random values:

   ```powershell
   npx.cmd wrangler secret put HASH_SALT
   npx.cmd wrangler secret put EXPORT_TOKEN
   ```

6. Create the tables and deploy:

   ```powershell
   npx.cmd wrangler d1 migrations apply visitor-map --remote
   npm.cmd run deploy
   ```

7. Copy the deployed Worker URL into the `data-endpoint` attribute of the
   visitor map in `01_home.md`. Do not include a trailing slash.

## Backups you control

Export the complete SQLite schema and data regularly:

```powershell
npx.cmd wrangler d1 export visitor-map --remote --output visitor-map-backup.sql
```

Keep dated copies outside this public repository, ideally in encrypted cloud
storage and on an offline drive. D1 also provides Time Travel recovery, but
independent SQL exports make the data portable to another provider.

For long-term preservation, retain at least:

- one monthly SQL export in private storage;
- one annual SQL export on a second provider or offline drive; and
- the most recent JSON aggregate export for easy migration to a different map
  backend.

For a JSON export containing aggregate map history, without anonymous
deduplication hashes, call:

```text
GET https://YOUR_WORKER/api/export
Authorization: Bearer YOUR_EXPORT_TOKEN
```

## Local preview

Apply the migration locally and start the Worker:

```powershell
npm.cmd run db:migrate:local
npm.cmd run dev
```

Cloudflare geolocation fields are only populated in the deployed Workers
runtime, so local requests appear at latitude/longitude `0, 0`.
