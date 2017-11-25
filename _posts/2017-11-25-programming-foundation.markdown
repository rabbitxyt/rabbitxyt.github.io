---
layout: post
title: 编程基础
date: 2017-11-25 09:00:00 -0400
description: Programming Foundation course note
img: intro.jpg
tags: [笔记]
---

课程视频链接: <a href="https://www.linkedin.com/learning/programming-foundations-fundamentals" target="_blank">Programming Foundations: Fundamentals</a>


## 1. 编程基础

-  编程是能够将头脑中的想法分解成若干小的部分，并且知道如何运用编程语言将它们用正确的语法，按正确的顺序写下来
  
-  计算机语言包括机器语言、汇编语言、高级语言。
  高级语言是面向用户的语言。计算机并不能直接地接受和执行用高级语言编写的源程序，源程序在输入计算机时，通过翻译成机器语言才能识别和执行

- 源代码是指未编译的按照一定的程序设计语言规范书写的文本文件 

- 将高级语言翻译成机器语言有两种方式
  
  1）编译：程序在执行之前已编译成机器语言的文件，运行时不需要重新翻译

  2）解释：程序在运行时才翻译成机器语言
  
  
<br>
## 2. Javascript 入门

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch02/First/container.html" target="_blank">练习 1：弹出对话框显示 Hello world</a>


- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch02/Input/container.html" target="_blank">练习 2：输入姓名，弹出对话框显示姓名</a>
  


<br>
## 3. 变量和数据类型

- 变量是存储信息的容器，使用 var 关键词来声明。变量声明之后，该变量是空的，如需向变量赋值，请使用等号。也可以在声明变量时对其赋值。

- 字符串是用于存储和处理文本。可以使用单引号或双引号。
  

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Numbers/script.js" target="_blank">练习 3：数字</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Numbers/container.html" target="_blank"> -> HTML</a>


- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Whitespace/script.js" target="_blank">练习 4：空格</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Whitespace/container.html" target="_blank"> -> HTML</a>


- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Comments/script.js" target="_blank">练习 5：注释</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch03/Comments/container.html" target="_blank"> -> HTML</a>



<br>
## 4. 条件语句

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/if-statement/script.js" target="_blank">练习 6：if 条件语句</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/if-statement/container.html" target="_blank"> -> HTML</a>

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/complex-conditions/script.js" target="_blank">练习 7：if 语句嵌套</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/complex-conditions/container.html" target="_blank"> -> HTML</a>

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/comparison-operators/script.js" target="_blank">练习 8：比较运算符</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/comparison-operators/container.html" target="_blank"> -> HTML</a>

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/switch-statement/script.js" target="_blank">练习 9：switch 语句</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch04/switch-statement/container.html" target="_blank"> -> HTML</a>



<br>
## 5. 函数

- 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch05/creating-functions/script.js" target="_blank">练习 10：函数</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch05/creating-functions/container.html" target="_blank"> -> HTML</a>


- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch05/parameters/script.js" target="_blank">练习 11：参数</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch05/parameters/container.html" target="_blank"> -> HTML</a>



<br>
## 6. 循环语句

- JavaScript 循环共有 3 种：（1）while（2）for（3）do……while

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch06/while-loop/script.js" target="_blank">练习 12：while 语句</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch06/while-loop/container.html" target="_blank"> -> HTML</a>



<br>
## 7. 字符串


- <a href="http://www.runoob.com/jsref/jsref-obj-string.html" target="_blank">String 对象方法</a>

  toUpperCase()，toLowerCase()，indexOf()，lastIndexOf()，slice()

- <a href="http://www.runoob.com/js/js-regexp.html" target="_blank">正则表达式</a>

  <a href="http://www.runoob.com/regexp/regexp-syntax.html" target="_blank">语法</a>

  test() 方法用于检测一个字符串是否含有匹配的文本



<br>
## 8. 数组

- <a href="http://www.runoob.com/jsref/jsref-obj-array.html" target="_blank">Array 对象属性</a>

  reverse(), sort(), join(), pop(), push()

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch08/array-iteration/script.js" target="_blank">练习 13：遍历数组元素</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch08/array-iteration/container.html" target="_blank"> -> HTML</a>



<br>
## 9. 编程风格


- 变量，函数和方法采用 CamelCase 且首字母小写

- 表示区块起首的大括号，不要另起一行

- 所有函数都在使用之前定义

- 不要省略句末的分号

- 声明变量时总是使用 var



<br>
## 10. 输入和输出

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch10/DOM-example/script.js" target="_blank">练习 14：DOM</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch10/DOM-example/container.html" target="_blank"> -> HTML</a>

- <a href="http://www.runoob.com/jsref/dom-obj-event.html" target="_blank">DOM 事件</a>


- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch10/event-example/script.js" target="_blank">练习 15：事件（点击更新标题）</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch10/event-example/container.html" target="_blank"> -> HTML</a>



<br>
## 11. 调试

你的代码可能包含语法错误，逻辑错误。通常，如果 JavaScript 出现错误，不会有提示信息

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/tracing-example/script.js" target="_blank">练习 16：手动设置断点</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/tracing-example/container.html" target="_blank"> -> HTML</a>

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/error-message-example/script.js" target="_blank">练习 17：使用浏览器 Console</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/error-message-example/container.html" target="_blank"> -> HTML</a>

- <a class="project" href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/debugger-example/script.js" target="_blank">练习 18：使用浏览器 Sources</a><a href="{{ site.url }}{{ site.baseurl }}/course/Ex_Files_FoP_Fun/ch11/debugger-example/container.html" target="_blank"> -> HTML</a>



<br>
## 12. 面向对象简介

- 类是定义对象的特征。它是对象的属性和方法的模板定义

- 对象是类的一个实例。对象拥有属性和方法。


- JavaScript 提供多个内建对象，比如 Array、 RegExp、Date、Math 等等

  创建 Date 对象： new Date()
  
  
  
<br>
## 13. 高级主题

- 内存管理

- 算法

- 多线程



<br>
## 14. 探索其他语言


- C，Java，C# and VB.NET，Ruby，Python，Objective-C

- Libraries and frameworks

  i.e. [The Python Standard Library](https://docs.python.org/3/library/index.html)