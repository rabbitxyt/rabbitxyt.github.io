---
layout: post
title: CSS 基础训练 1
date: 2017-11-16 09:00:00 -0400
description: CSS Essential Training 1 course note
img: css.jpg
tags: [笔记]
---


课程视频链接: <a href="https://www.linkedin.com/learning/css-essential-training-1" target="_blank">CSS Essential Training 1 @ LinkedIn Learning</a>

<span class="emphasis">因为文章涉及很多的外部链接，所以强烈建议在电脑上看哟！ </span>


<br>
## 1. Getting Started


- ### <span class="class-subtitle">Project overview and setup exercise</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-1/index.html" target="_blank"> 个人简历（一）起始 HTML</a>


  图像占位符： <a class="resource" href="https://picsum.photos/" target="_blank">Lorem Picsum</a> 
  
  文字占位符： <a class="resource" href="http://meettheipsums.com/" target="_blank">Meet the Ipsums</a>



- ### <span class="class-subtitle">Inline, internal, and external CSS</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-2/index.html" target="_blank"> 个人简历（二）链接到外部样式表</a>



<br>
## 2. CSS Core


- ### <span class="class-subtitle">Syntax, terminology, and naming conventions</span>
  
  CSS Reference：<a class="resource" href="https://tympanus.net/codrops/css_reference/" target="_blank">Codrops</a>



- ### <span class="class-subtitle">Type, class, and id selectors</span>

  元素选择器（h1），类选择器（.example），ID 选择器（#example）

  
- ### <span class="class-subtitle">Pseudo-class selectors</span>

  <a class="jsfiddle" href="https://goo.gl/GzYEVK" target="_blank">JSFiddle: Pseudo-classes</a>



- ### <span class="class-subtitle">RGB, hex, and keyword color values</span>

  Color Resource 1：<a class="resource" href="http://colours.neilorangepeel.com/" target="_blank">Colours</a>
  
  Color Resource 2：<a class="resource" href="https://coolors.co/" target="_blank">Coolors.co</a>

  Color Resource 3：<a class="resource" href="https://randoma11y.com/" target="_blank">random a11y</a>



- ### <span class="class-subtitle">Practicing with selectors and colors</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-3/index.html" target="_blank"> 个人简历（三）修改背景颜色</a>



- ### <span class="class-subtitle">Cascading, inheritance, and specificity</span>

  Specificity Reference 1：<a class="resource" href="http://cssspecificity.com/" target="_blank">CSS Specificity</a>
  
  Specificity Reference 2：<a class="resource" href="http://specificity.keegan.st/" target="_blank">Specificity Calculator</a>



<br>
## 3. Typography


- ### <span class="class-subtitle">Web-safe fonts and the font-family property</span>

    <span style="font-family: Serif">Serif</span>, 
    <span style="font-family: Sans-serif">Sans-serif</span>, 
    <span style="font-family: Monospace">Monospace</span>, 
    <span style="font-family: Cursive">Cursive</span>, 
    <span style="font-family: Fantasy">Fantasy</span>

  Font Resource 1：<a class="resource" href="https://www.cssfontstack.com/" target="_blank">Web-safe fonts</a>



- ### <span class="class-subtitle">Web fonts and Google fonts</span>

  Font Resource 2：<a class="resource" href="https://css-tricks.com/snippets/css/using-font-face/" target="_blank">Using font face</a>
  
  Font Resource 3：<a class="resource" href="https://www.fontsquirrel.com/" target="_blank">Free font generator</a>
  
  
  Font Resource 4：<a class="resource" href="https://fonts.google.com/" target="_blank">Google Fonts</a>



- ### <span class="class-subtitle">The font-size property</span>

  `font-size` 设置文本的大小，值有 px, em, rem
  
  

- ### <span class="class-subtitle">Practicing with web fonts and font-size</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-4/index.html" target="_blank"> 个人简历（四）修改字体</a>



- ### <span class="class-subtitle">The font-style and font-weight properties</span>

   `font-weight` 设置文本的粗细，值有 
    <span style="font-weight:normal">normal</span>, 
    <span style="font-weight:bold">bold</span>, 
    <span style="font-weight:lighter">lighter</span>, 
    <span style="font-weight:bolder">bolder</span>

  `font-style` 指定文本的字体样式，值有 
   <span style="font-style:normal">normal</span>, 
   <span style="font-style:italic">italic</span>

- ### <span class="class-subtitle">The color, line-height, and text properties</span>

  `color` 规定文本的颜色，值有 keyword, hex code, rgb

  `line-height` 设置行间的距离，值有 px, %, ems, rems, unitless

  `text-decoration` 规定添加到文本的修饰，值有
   <span style="text-decoration:none">none</span>, 
   <span style="text-decoration:underline">underline</span>, 
   <span style="text-decoration:overline">overline</span>, 
   <span style="text-decoration:line-through">line-through</span> 
   
  `text-transform` 控制文本的大小写，值有
   <span style="text-transform:none">none</span>, 
   <span style="text-transform:capitalize">capitalize</span>, 
   <span style="text-transform:uppercase">uppercase</span>, 
   <span style="text-transform:lowercase">lowercase</span>  

  `text-align` 规定元素中的文本的水平对齐方式，值有 left, right, center, justify
   
   
   
<br>   
## 4. Layout


- ### <span class="class-subtitle">Block vs. inline display</span>
    
  在布局中，`display` 是最重要的 CSS 属性之一。常见的值有 none, block, inline 以及 inline-block
  
  
  
- ### <span class="class-subtitle">The Box Model</span>

  CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容
  


- ### <span class="class-subtitle">Margin and page layouts</span>

  <a class="jsfiddle" href="https://goo.gl/Mqn7ap" target="_blank">JSFiddle: Use margin to center paragraph</a>   

  
- ### <span class="class-subtitle">Practicing layouts</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-5/index.html" target="_blank"> 个人简历（五）修改布局</a>



- ### <span class="class-subtitle">Practicing with padding and spacing</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-6/index.html" target="_blank"> 个人简历（六）修改边距</a>



- ### <span class="class-subtitle">Floats</span>

  `float` 会使元素向左或向右移动，其周围的元素也会重新排列。使用 `clear` 清除浮动 
  
  <a class="jsfiddle" href="https://goo.gl/dsF7Nm" target="_blank">JSFiddle: float</a>   

  Self-Clearing Floats:

  1）使用 `overflow` auto 或 hidden    

  2）使用 `clearfix` 清除浮动
  
  Reference：<a class="resource" href="https://css-tricks.com/snippets/css/clear-fix" target="_blank">clearfix</a>



- ### <span class="class-subtitle">Practicing with floats</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-7/index.html" target="_blank"> 个人简历（七）添加浮动</a>


  图像处理：<a class="resource" href="https://pixlr.com/editor/" target="_blank">Pixlr</a>



- ### <span class="class-subtitle">The box model fix</span>
  
  Reference：<a class="resource" href="https://goo.gl/huQz3L" target="_blank">Box Model Fix</a>


- ### <span class="class-subtitle">Practicing with columns</span>

  <a class="project" href="{{ site.url }}{{ site.baseurl }}/css-project/step-8/index.html" target="_blank"> 个人简历（八）排列文本</a>
