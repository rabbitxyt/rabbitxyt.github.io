---
layout: post
title: HTML 基础训练（上）
date: 2017-11-14 18:00:00 -0400
description: HTML course
img: web.jpg
tags: [公开课]
---



## Introducing HTML

HTML 文档是通过 HTML 标签进行标记的。HTML 标签可以拥有属性，属性提供了有关 HTML 元素的更多的信息。

资源：

- [Webplatform](https://webplatform.github.io)

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

## Basic Page Structure

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

## Formatting Page Content

- `<h1>` ... `<h6>` 定义 HTML 标题

- ```<p>``` 定义段落

- `<pre>` 定义预格式化的文本

- ```<br>``` 被用来插入一个换行符

- `<b>` 与`<i>` 定义粗体和斜体文本

- `<strong>` 与 `<em>` 意味着你要呈现的文本是重要的

- 要正确地显示预留字符，我们需要使用字符实体，如不间断空格 `&nbsp;`

- `<img>` 定义图像，有两个必需的属性：`src` 和 `alt`

## Structuring Content


<img src="{{ site.url }}{{ site.baseurl }}/assets/img/content/sectioning.png" alt="sectioning" width="305">

### Sectioning Elements

- `<nav>` 定义导航链接的部分

- `<article>` 定义独立的内容

- `<section>` 定义了文档的某个区域

- `<aside>` 定义其所处内容之外的内容


### Semantic Elements

- `<header>` 定义文档或者文档的一部分区域的页眉

- `<main>` 定义文档的主要内容

- `<footer>` 定义文档或节的页脚