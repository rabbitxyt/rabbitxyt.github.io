---
layout: post
title: 前端编程入门
date: 2017-11-14 19:00:00 -0400
description: front-end-summary and coursera course note
img: front-end.jpg
tags: [学习]
---


<br>
以下内容摘自 Github<a href="https://github.com/qiu-deqing/FE-learning" target="_blank"> 《结合个人经历总结的前端入门方法》</a>
<hr>


### 书籍推荐

1. HTML 先看《HTML & CSS: Design and Build Websites》1-9章，然后《HTML5: The Missing Manual》1-4章

2. CSS 先看《CSS: The Missing Manual》，然后《CSS: The Definitive Guide》

3. Javascript 先看《Javascript高级程序设计》，然后《Javascript: The Definitive Guide》

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/content/book-list.png" >

### 资料推荐

4. <a href="https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese" target="_blank">前端工作面试问题</a>

5. <a href="http://bonsaiden.github.io/JavaScript-Garden/zh/" target="_blank">JavaScript 秘密花园</a>

6. <a href="http://weizhifeng.net/javascript-the-core.html" target="_blank">JavaScript 核心</a>



<style>
    .image{
      position: relative;
    }
    .image a{
      display: block;      
      position: absolute;
    }
</style>


<br>

## LinkedIn 课程笔记


#### Become a Web Developer

1. <a href="{{ site.url }}{{ site.baseurl }}/course/2017-11-14-HTML-Essential-Training" target="_blank"> HTML Essential Training</a>

2. <a href="{{ site.url }}{{ site.baseurl }}/course/2017-11-16-CSS-Essential-Training-1" target="_blank"> CSS Essential Training 1 </a>


3. <a href="{{ site.url }}{{ site.baseurl }}/course/2017-11-25-programming-foundation" target="_blank"> Programming Foundations: Fundamentals</a>


4. <a href="{{ site.url }}{{ site.baseurl }}/course/2017-11-26-Javascript-Essential-Training" target="_blank"> Javascript Essential Training</a>


#### Become a Full-Stack Web Developer

5. <a href="{{ site.url }}{{ site.baseurl }}/course/2017-11-28-Installing-Apache-MySQL-PHP" target="_blank">Installing Apache, MySQL, and PHP</a>



<br>
<br>

## Bootstrap4 应用

<a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">Grid System</a> 
⇢ <a href="https://getbootstrap.com/docs/4.0/components/navbar/" target="_blank">Navbar</a> 
⇢ <a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" target="_blank">Breadcrumb</a> 

<div class="image">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/content/exercise/1.jpg" >
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/0-template/index.html" target="_blank" style="top: 0%; left: 0%; width: 65%; height: 100%;"></a>
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/1-grid-and-nav/index.html" target="_blank" style="top: 0%; left: 66%; width: 34%; height: 100%;"></a>
</div>

<i>(Click on pictures to see each web page)</i>

<details>
    <summary>小贴士</summary>
    <ul>
        <li>Remember to include <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank">Bootstrap4 CSS and Javascript</a>, <a href="https://cdnjs.com/libraries/font-awesome" target="_blank">Font Awesome CSS</a> and <a href="https://cdnjs.com/libraries/bootstrap-social" target="_blank">Bootstrap Social CSS</a></li>
        <li>The navbar background is <strong>#512DA8</strong>, header background is <strong>#9575CD</strong>, footer background is <strong>#D1C4E9</strong></li>
        <li>Master <code>align-items-center</code>, <code>align-self-center</code>, <code>justify-content-center</code></li>
        <li>Use <code>d-none</code> and <code>d-sm-block</code> to hide content on extra small screen</li>
    </ul>
</details>


<br>


⇢ <a href="https://getbootstrap.com/docs/4.1/components/button-group/" target="_blank">Button group</a> 
⇢ <a href="https://getbootstrap.com/docs/4.0/components/forms/" target="_blank">Forms</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/content/tables/" target="_blank">Tables</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Cards</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/layout/media-object/" target="_blank">Media object</a>
⇢ <a href="https://getbootstrap.com/docs/4.1/content/images/" target="_blank">Images</a>
⇢ <a href="https://getbootstrap.com/docs/4.1/components/badge/" target="_blank">Badges</a>


<div class="image">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/content/exercise/2.jpg">
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/2-other/index.html" target="_blank" style="top: 0%; left: 0%; width: 32%; height: 100%;"></a>
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/2-other/aboutus.html" target="_blank" style="top: 0%; left: 34%; width: 28%; height: 100%;"></a>
    <a href="{{ site.url }}{{ site.baseurl }}/exercise/2-other/contactus.html" target="_blank" style="top: 0%; left: 64%; width: 37%; height: 100%;"></a>
</div>

<i>(Click on pictures to see each web page)</i>


<br>

⇢ <a href="https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior" target="_blank">Tabs</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example" target="_blank">Accordion</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/components/modal/" target="_blank">Modal</a>
⇢ <a href="https://getbootstrap.com/docs/4.0/components/carousel/" target="_blank">Carousel</a>


<div class="image">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/content/exercise/3.jpg">
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/3-modal/aboutus-tabs.html" target="_blank" style="top: 0%; left: 0%; width: 43%; height: 41%;"></a>
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/3-modal/aboutus.html" target="_blank" style="top: 43%; left: 0%; width: 43%; height: 57%;"></a>
  <a href="{{ site.url }}{{ site.baseurl }}/exercise/3-modal/index.html" target="_blank" style="top: 0%; left: 44%; width: 56%; height: 100%;"></a>
</div>

<i>(Click on pictures to see each web page)</i>



<br>

## Bonus

<a href="{{ site.url }}{{ site.baseurl }}/course/2018-06-04-programming-1" target="_blank">  涵俊教编程（一）递归 </a>
