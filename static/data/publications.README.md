# Publications data

主页的出版物由 `publications.json` 提供，页面会自动渲染标题、作者、发表信息、链接按钮、绿色亮点、Note 和封面。

新增论文时，只需在 `publications` 数组中增加一个对象。`tags` 决定论文出现在哪些分类筛选页中；可以同时填写多个标签，例如：

```json
"tags": ["representative", "generative-ai", "sign-language"]
```

`primaryCategory` 决定论文在 “All” 页面中的唯一归属，例如：

```json
"primaryCategory": "representative"
```

当前可用标签来自文件顶部的 `tabs`：

- `representative`：Representative Works
- `generative-ai`：Generative AI
- `sign-language`：Sign Language

主要字段：

- `id`：论文的唯一标识，不要与其他论文重复。
- `tags`：可包含多个分类，决定各个分类筛选页是否显示该论文。
- `primaryCategory`：只能填写一个分类，决定该论文在 “All” 中出现在哪个分组。
- `date`：用于排序的日期，格式为 `YYYY-MM-DD`；每个分类都会自动按日期从新到旧显示。
- `title`：标题。
- `authors`：作者列表；`self: true` 会加粗，`marker` 可填 `*` 或 `†`。
- `publication`：会议、期刊、年份和地点，可使用少量 HTML 设置强调颜色。
- `links`：按钮列表；每项包含 `label` 和 `url`。
- `highlight`：绿色描述；`icon` 可选，`text` 支持 Markdown。
- `note`：可选的 Note 内容，支持 Markdown。
- `cover`：封面；`height` 可用 `default`、`fixed` 或 `auto`，`overlayText` 可选。

“All” 根据 `primaryCategory` 展示论文，因此多标签论文只会出现在其唯一归属分组中。
