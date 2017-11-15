---
layout: post
title: HTML 基础训练（下）
date: 2017-11-15 16:00:00 -0400
description: HTML course note part two
img: web.jpg
tags: [公开课]
---



## 5. Creating Links

`<a>` 表示 HTML 超链接

- `href` 设置被链接资源的 URL

  外部链接：需要写完整，包括 http 协议
    
  内部链接：使用 id 创建书签，使用 # 访问
  
- `title` 规定关于元素的额外信息

- `target` 设置在何处打开链接，如 _blank

- `download` 指定当用户点击超链接时将下载目标

- `rel` 设置或返回当前文档与目标 URL 之间的关系


<br>
## 6. Creating Lists

`<ul>` 表示无序列表

`<li>` 表示列表项目


`<ol>` 表示有序列表

- `start` 规定有序列表的起始值

- `reversed` 规定列表顺序为降序

- `type` 规定在列表中使用的标记类型


`<dl>` 表示定义列表

`<dt>` 表示 term

`<dd>` 表示 description


<br>
## 7. Controlling Style

CSS 规则由选择器以及一条或多条声明构成。每条声明由一个属性和一个值组成。

### 创建

1. Inline: 在相关的标签内使用 `style` 属性

2. Internal: 使用 `<style>` 标签在文档头部定义

3. External: 每个页面使用 `<link>` 链接到样式表


### 排版

1. 使用 `font-family` 属性定义文本的字体

    通用字体： 
    <span style="font-family: Serif">Serif</span>, 
    <span style="font-family: Sans-serif">Sans-serif</span>, 
    <span style="font-family: Monospace">Monospace</span>, 
    <span style="font-family: Cursive">Cursive</span>, 
    <span style="font-family: Fantasy">Fantasy</span>

2. 使用 `font-size` 属性设置文本的大小

    可以使用 px, em 或结合使用百分比和 em（为 body 以百分比设置默认值）
  

