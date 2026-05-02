---
title: Cloudflare Pages 大战 Vercel
time: 2026/5/2
---

今天我突发奇想，想把部署在 Vercel 的博客迁移到 Cloudflare Pages 上，为了让 本博客 和 [Yay+ 官网](https://yayplus.qzz.io) 保持统一，结果不出意外地出意外了。

1. 第一次尝试部署

> 不出意外地出意外了，我发现 CFPages 貌似不支持指定构建完成后部署的目录，导致这个 Pages 被 Fallback 到了一个 ``Hello World`` 页面。

2. 第二次尝试部署

> 又出意外了，CFPages 服务器上的 ``yarn`` 版本过高（输出中可以看到是 ``Yarn 4.5.0``）导致依赖无法正常安装，于是我在本地 ``yarn set version 4.5.0`` 后重新执行 ``yarn install --refresh-lockfile`` 更新了 ``yarn.lock``。

3. 第三次尝试部署

> 依赖解决了，但是还是没有办法部署，遂放弃，回退到 Vercel 上。

总之，Cloudflare Pages 和 Vercel 各有优劣，得看情况使用。