CREATE TABLE IF NOT EXISTS visitor_days (
    day TEXT NOT NULL,
    visitor_hash TEXT NOT NULL,
    created_at TEXT NOT NULL,
    PRIMARY KEY (day, visitor_hash)
);

CREATE TABLE IF NOT EXISTS locations (
    location_key TEXT PRIMARY KEY,
    country_code TEXT,
    region TEXT,
    city TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    visits INTEGER NOT NULL DEFAULT 0,
    first_seen TEXT NOT NULL,
    last_seen TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS daily_locations (
    day TEXT NOT NULL,
    location_key TEXT NOT NULL,
    visits INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (day, location_key)
);

CREATE INDEX IF NOT EXISTS idx_locations_visits ON locations (visits DESC);
CREATE INDEX IF NOT EXISTS idx_daily_locations_day ON daily_locations (day);
CREATE INDEX IF NOT EXISTS idx_visitor_days_created_at ON visitor_days (created_at);
