---
layout: post
title: HTML 基础训练（下）
date: 2017-11-15 16:00:00 -0400
description: HTML course note part two
img: web.jpg
tags: [笔记]
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

- 使用 `font-family` 定义文本的字体

    通用字体： 
    <span style="font-family: Serif">Serif</span>, 
    <span style="font-family: Sans-serif">Sans-serif</span>, 
    <span style="font-family: Monospace">Monospace</span>, 
    <span style="font-family: Cursive">Cursive</span>, 
    <span style="font-family: Fantasy">Fantasy</span>

- 使用 `font-size` 设置文本的大小

    可以使用 px, em 或结合使用百分比和 em（为 body 以百分比设置默认值）
  

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
   
