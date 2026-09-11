# Personal Blog (GitHub Pages + Jekyll)

基于 Jekyll 的个人博客，部署在 GitHub Pages 上。

## 目录结构

```
├── _config.yml          # 站点配置（站名、baseurl 等）
├── _layouts/            # 页面模板
│   ├── default.html     # 公共框架：导航栏 + 页脚 + 主题切换
│   ├── post.html        # 文章模板
│   └── page.html        # 普通页面模板
├── _posts/              # ★ 所有博客文章都放这里
├── assets/
│   ├── css/style.css    # 全站样式
│   ├── js/main.js       # 主题切换 / 标签筛选 / 搜索
│   └── img/             # 图片（头像、文章配图等）
├── index.html           # 首页：About Me / Recent Posts / Projects / Publications
├── blog.html            # 全部文章：按年份分组 + 按标签分组 + 标签筛选 + 搜索
└── projects.html        # 项目展示页
```

## 如何写新文章

在 `_posts/` 下新建 Markdown 文件，**文件名格式必须是 `YYYY-MM-DD-标题.md`**：

```markdown
---
layout: post
title: "文章标题"
date: 2026-09-11
tags: [标签1, 标签2]
---

正文（Markdown）……
```

保存后 commit 并 push，GitHub Pages 会自动重新构建发布。

## 如何部署到 GitHub Pages

1. 把本仓库推送到 GitHub（假设仓库叫 `blog`）。
2. 仓库页面 → **Settings** → **Pages**。
3. Source 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 等约 1 分钟，访问 `https://<用户名>.github.io/blog/` 即可。

> 如果仓库名是 `<用户名>.github.io`（用户主页仓库），请把 `_config.yml` 里的
> `baseurl: "/blog"` 改为 `baseurl: ""`，网址则是 `https://<用户名>.github.io/`。

## 本地预览（可选）

需要安装 Ruby + Jekyll，然后：

```bash
bundle exec jekyll serve
# 或
jekyll serve
```

访问 http://127.0.0.1:4000/blog/ 预览。不装 Jekyll 也可以——直接 push 到 GitHub 看线上效果。

## 需要改成你自己内容的地方

- `_config.yml`：站名 `title` 和描述 `description`
- `index.html`：自我介绍、联系方式、Projects、Publications（各区块都有注释标记）
- `projects.html`：项目卡片
- `assets/img/avatar.jpg`：放头像后取消 `index.html` 中对应的注释
- 删除 `_posts/` 下的三篇示例文章
