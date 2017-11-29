---
layout: post
title: HTML 基础训练
date: 2017-11-14 18:00:00 -0400
description: HTML Essential Training course note
img: web.jpg
tags: [笔记]
---

课程视频链接: <a href="https://www.linkedin.com/learning/html-essential-training" target="_blank">HTML Essential Training @ LinkedIn Learning</a>


## 1. Introducing HTML

HTML 文档是通过 HTML 标签进行标记的。HTML 标签可以拥有属性，属性提供了有关 HTML 元素的更多的信息。


<br>
## 2. Basic Page Structure

```html
<!doctype html>
<html>
  <head></head>
  <body></body>
</html>
```

<br>
## 3. Formatting Page Content

- `<h1>` ... `<h6>` 定义 HTML 标题

- ```<p>``` 定义段落

- `<pre>` 定义预格式化的文本

- ```<br>``` 被用来插入一个换行符

- `<b>` 与`<i>` 定义粗体和斜体文本

- `<strong>` 与 `<em>` 意味着你要呈现的文本是重要的

- 要正确地显示预留字符，我们需要使用字符实体，如不间断空格 `&nbsp;`

- `<img>` 定义图像，有两个必需的属性：`src` 和 `alt`


<br>
## 4. Structuring Content

### Sectioning Elements

- `<nav>` 定义导航链接的部分

- `<article>` 定义独立的内容

- `<section>` 定义了文档的某个区域

- `<aside>` 定义其所处内容之外的内容


### Semantic Elements

- `<header>` 定义文档或者文档的一部分区域的页眉

- `<main>` 定义文档的主要内容

- `<footer>` 定义文档或节的页脚


<br>
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
## 8. Basic Scripting

JavaScript 是属于网络的脚本语言。HTML 中的脚本必须位于 `<script></script>` 之间。

变量是用于存储信息的“容器”，我们使用 `var` 来声明变量

函数就是包裹在花括号中的代码块，前面使用了关键词 `function`


HTML DOM 对象

1. Document 对象


   `getElementById()` 方法可返回对拥有指定 ID 的第一个对象的引用

   DOM 定义了多种查找元素的方法，还有 `getElementsByName()` 和 `getElementsByTagName()`

2. 元素对象

   `classList` 属性返回元素的类名，该属性用于在元素中添加，移除及切换 CSS 类

3. 事件对象

   `onclick` 事件会在元素被点击时发生

   `onload` 事件会在页面或图像加载完成后立即发生
   
