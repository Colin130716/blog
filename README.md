# 高级感博客模板

一个基于 `Vite + React + TypeScript` 的多页面博客，整体视觉参考 `VitePress`，强调留白、层次、卡片化和沉浸式阅读体验。

## 页面结构

- `/`：首页，包含主标题和最近三篇文章卡片
- `/posts`：全部文章列表
- `/posts/:slug`：文章详情页
- `/friends`：友链页面
- `/about`：关于页面

除首页外，其余页面组件均放在 `src/pages` 中。

## Markdown 文章来源

所有文章都放在根目录下的 `blogs` 文件夹中，每篇文章格式如下：

```md
---
title: 标题
time: YYYY/MM/DD
---

正文
```

系统会自动：

- 读取每篇 Markdown
- 解析 frontmatter 中的 `title` 和 `time`
- 提取正文摘要作为卡片预览
- 渲染文章详情页 HTML

## 运行项目

### 使用 npm

```bash
npm install
npm run dev
```

### 使用 yarn

```bash
yarn install
yarn run dev
```

## 构建项目

### 使用 npm

```bash
npm run build
```

### 使用 yarn

```bash
yarn run build
```

构建成功后，输出文件位于 `dist` 目录，可部署到 Cloudflare Pages。

## 关键实现

- `src/content.ts`：统一加载并解析 `blogs/*.md`
- `src/pages/HomePage.tsx`：首页
- `src/pages/PostsPage.tsx`：文章列表页
- `src/pages/PostDetailPage.tsx`：文章详情页
- `src/pages/FriendsPage.tsx`：友链页
- `src/pages/AboutPage.tsx`：关于页
- `src/components/PostCard.tsx`：文章卡片组件

如果要新增文章，只需在 `blogs` 目录中继续添加 Markdown 文件即可。
