---
layout: post
title: Javascript 基础训练
date: 2017-11-26 09:00:00 -0400
description: Javascript Essential Training course note
img: web.jpg
tags: [笔记]
---

课程视频链接: <a href="https://www.linkedin.com/learning/javascript-essential-training-3" target="_blank">Javascript Essential Training @ LinkedIn Learning</a>

<br>





### 5. JavaScript and the DOM, Part 1: Changing DOM Elements

- DOM 以树结构表达 HTML 文档

  DOM 属性是您能够获取或设置的值

  DOM 方法是您能够执行的动作

  HTML DOM 定义了多种查找元素的方法，如 `getElementById()` ，`querySelector()` 

- 修改 HTML 元素

  `innerHTML` 属性设置或返回表格行的开始和结束标签之间的 HTML

- 修改 HTML 元素的类

  `classList` 属性返回元素的类名。classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它

- 修改 HTML 元素的属性

  如果存在指定属性，则 `hasAttribute()` 方法返回 true，否则返回 false。

  `getAttribute()` 方法通过名称获取属性的值。

  `setAttribute()` 方法添加指定的属性，并为其赋指定的值。如果这个指定的属性已存在，则仅设置/更改值。

  `removeAttribute()` 方法删除指定的属性

- 增加 DOM 元素

  `createElement()` 方法通过指定名称创建一个元素

  `createTextNode()` 可创建文本节点

  `appendChild()` 方法向节点添加最后一个子节点

- 对元素应用內联样式

  `HTMLElement.style` 属性返回一个 CSSStyleDeclaration 对象，表示元素的内联 style 属性

  `cssText` 属性设置或返回作为字符串的样式声明的内容


<br>
### 7. JavaScript and the DOM, Part 2: Events


- <a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank">事件一览表</a>

- <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Event_handlers" target="_blank">DOM 事件回调</a>

  **事件处理器（event handler）**是指通过 `on...`  属性注册的函数

  **事件侦听器（event listener）**是指通过 `EventTarget.addEventListener()` 注册的函数或对象



<br>
### 8. Project: Typing Speed Tester


- <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval" target="_blank">WindowTimers.clearInterval()</a>




