---
layout: post
title: CSS 基础训练（上）
date: 2017-11-16 09:00:00 -0400
description: CSS Essential Training 1 course note
img: css.png
tags: [笔记]
---



课程视频链接: [CSS Essential Training 1 @ LinkedIn Learning](https://www.linkedin.com/learning/css-essential-training-1)


## 2. CSS Selector <a href="http://www.runoob.com/cssref/css-selectors.html" target="_blank">📚</a>

- 元素选择器，类选择器，ID 选择器

- 后代选择器（descendant selector）

- 伪类（Pseudo-classes）

<br>
## 3. Typography

- `font-family` 定义文本的字体

    <span style="font-family: Serif">Serif</span>, 
    <span style="font-family: Sans-serif">Sans-serif</span>, 
    <span style="font-family: Monospace">Monospace</span>, 
    <span style="font-family: Cursive">Cursive</span>, 
    <span style="font-family: Fantasy">Fantasy</span>

- `font-size` 设置文本的大小

    px, em, rem
 
 - `font-weight` 设置文本的粗细
 
    <span style="font-weight:normal">normal</span>, 
    <span style="font-weight:bold">bold</span>, 
    <span style="font-weight:lighter">lighter</span>, 
    <span style="font-weight:bolder">bolder</span>

- `font-style` 指定文本的字体样式

   <span style="font-style:normal">normal</span>, 
   <span style="font-style:italic">italic</span>

- `color` 规定文本的颜色 <a href="http://colours.neilorangepeel.com/" target="_blank">🌈 </a>

   keyword, hex code, rgb

- `line-height` 设置行间的距离

   px, %, ems, rems, or unitless
   
- `text-decoration` 规定添加到文本的修饰

   <span style="text-decoration:none">none</span>, 
   <span style="text-decoration:underline">underline</span>, 
   <span style="text-decoration:overline">overline</span>, 
   <span style="text-decoration:line-through">line-through</span> 
   

- `text-transform` 控制文本的大小写

   <span style="text-transform:none">none</span>, 
   <span style="text-transform:capitalize">capitalize</span>, 
   <span style="text-transform:uppercase">uppercase</span>, 
   <span style="text-transform:lowercase">lowercase</span>  
- `text-align` 规定元素中的文本的水平对齐方式

   left, right, center, justify
   
   
<br>   
## 4. Layout

- `display` 规定元素应该生成的框的类型

   none, block, inline, inline-block
   
- The Box Model

  width, height, padding, margin, border
  
- `float` 会使元素向左或向右移动，其周围的元素也会重新排列

   使用 `clear` 清除浮动 
   
- `overflow` 规定当内容溢出元素框时发生的事情

   visible, hidden, scroll, auto
   
