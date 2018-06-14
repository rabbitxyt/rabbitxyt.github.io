---
layout: post
title: Bootstrap4 教程
date: 2018-06-08 19:00:00 -0400
description: coursera course note
img: bootstrap.jpg
tags: [教程]
---
    

### Git

<details> 

<summary>下载和安装</summary>

<ul><li style="list-style-type: none">前往 <a href="https://git-scm.com/downloads" target="_blank">https://git-scm.com/downloads</a> 下载安装包，根据提示安装</li></ul>

</details>


<details> 

<summary>全局配置</summary>

<ul><li style="list-style-type: none"><code>git --version</code> 检查是否成功安装</li>
    <li style="list-style-type: none"><code>git config --global user.name "Your Name"</code> 配置用户名</li>
    <li style="list-style-type: none"><code>git config --global user.email (your email address)</code> 配置邮箱</li>
    <li style="list-style-type: none"><code>git config --list</code> 查看默认全局配置</li></ul>

</details>

<details> 

<summary>基本命令</summary>

<ul><li style="list-style-type: none"><code>git init</code> 初始化</li>
<li style="list-style-type: none"><code>git status</code> 检查状态</li>
<li style="list-style-type: none"><code>git add .</code> 将代码添加到暂存区</li>
<li style="list-style-type: none"><code>git commit -m "first commit"</code> 提交代码</li>
<li style="list-style-type: none"><code>git log --oneline</code> 查看提交历史</li>
<li style="list-style-type: none"><code>git checkout (second commit's number) index.html</code> 撤销修改</li>
<li style="list-style-type: none"><code>git reset HEAD index.html</code></li> 
<li style="list-style-type: none"><code>git checkout -- index.html</code> 回退到当前</li></ul>

</details>

<details> 
    
<summary>远程仓库</summary>

<ul><li style="list-style-type: none">注册 <a href="https://bitbucket.org" target="_blank">Bitbucket</a> 或 <a href="https://github.com" target="_blank">GitHub</a> 账户</li>
<li style="list-style-type: none">设置一个新的 Git 远程仓库，记录 URL</li>
<li style="list-style-type: none"><code>git remote add origin (repository URL)</code> 关联本地仓库与远程仓库</li>
<li style="list-style-type: none"><code>git push -u origin master</code> 上传本地当前分支代码到 master 分支</li>
<li style="list-style-type: none"><code>git clone (repository URL)</code> 拷贝到本地</li></ul>

</details>



### Node.js 和 NPM

<details> 

<summary>下载</summary>

<ul><li style="list-style-type: none">从 <a href=" https://nodejs.org" target="_blank"> https://nodejs.org</a> 下载安装包</li>
<li style="list-style-type: none">使用 <code>node -v</code> 和 <code>npm -v</code> 检查是否成功安装</li></ul>

</details> 


<details> 

<summary>使用</summary>

<ul><li style="list-style-type: none">生成 <code>package.json</code>: <code>npm init</code>, entry point 设置成 <code>index.html</code></li>
<li style="list-style-type: none">安装 lite-server: <code>npm install lite-server --save-dev</code></li>
<li style="list-style-type: none">在 <code>package.jason</code> 的 <code>&lt;script&gt;</code> 中添加两行</li>
<ul>
    <li style="list-style-type: none"><code>"start": "npm run lite"</code></li>
    <li style="list-style-type: none"><code>"lite": "lite-server"</code></li>    
</ul>
<li style="list-style-type: none">启动 lite-server: npm start</code></li>
<li style="list-style-type: none">生成 <code>.gitignore</code></li></ul>

</details> 


### Bootstrap

<details> 

<summary>安装</summary>

<ul>
<li style="list-style-type: none"><code>npm install bootstrap@4.0.0 --save</code></li>
<li style="list-style-type: none"><code>npm install jquery@3.3.1 popper.js@1.12.9 --save</code></li>
</ul>

</details>


<details> 

<summary>使用</summary>

<br>

<li style="list-style-type: none"><code>&lt;head&gt;</code>内：</li>
    
<ul>
    <li style="list-style-type: none"><code>&lt;meta charset="utf-8"&gt;</code></li>
    <li style="list-style-type: none"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;</code></li>
    <li style="list-style-type: none"><code>&lt;meta http-equiv="x-ua-compatible" content="ie=edge"&gt;</code></li>
    <li style="list-style-type: none"><code>&lt;link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"&gt;</code></li>

</ul>

<li style="list-style-type: none"><code>&lt;body&gt;</code>结束前：</li>

<ul>
    <li style="list-style-type: none"><code>&lt;script src="node_modules/jquery/dist/jquery.slim.min.js"&gt;&lt;/script&gt;</code></li>
    <li style="list-style-type: none"><code>&lt;script src="node_modules/popper.js/dist/umd/popper.min.js"&gt;&lt;/script&gt;</code></li>
    <li style="list-style-type: none"><code>&lt;script src="node_modules/bootstrap/dist/js/bootstrap.min.js">&lt;/script&gt;</code></li>
</ul>

</details>


### 响应式设计

📜 <a href="{{ site.url }}{{ site.baseurl }}/exercise/index.html" target="_blank">Raw Page</a>


📜 <a href="{{ site.url }}{{ site.baseurl }}/exercise/Bootstrap-Grid-Part-One.html" target="_blank">Bootstrap Grid Part One</a>

<details> 

<summary>步骤</summary>

<ul>

<li>Using a Container class</li>
<li>Dividing the content into rows</li>
<li>Creating a Jumbotron</li>
<li>Creating a footer</li>
<li>Applying column classes within each row</li>
<li>Using Order and Offset with column layout classes</li>

</ul>

</details>



📜 <a href="{{ site.url }}{{ site.baseurl }}/exercise/Bootstrap-Grid-Part-Two.html" target="_blank">Bootstrap Grid Part Two</a>

<details> 

<summary>步骤</summary>

<ul>

<li>List styles: <code>list-unstyled</code></li>
<li>Using Custom CSS classes</li>
<li>Vertically Centering the Content: <code>align-self-center</code></li>
<li>Horizontally Centering the Content: <code>justify-content-center</code></li>

</ul>

</details>




### 导航和导航栏


📜 <a href="{{ site.url }}{{ site.baseurl }}/exercise/Navbar-and-Breadcrumbs.html" target="_blank">Navbar and Breadcrumbs</a>

<details> 

<summary>步骤</summary>

<ul>

<li>Create a basic navigation bar: <code>.navbar</code></li>
<li>Creating a responsive navigation bar: <code>.navbar-toggler</code></li>
<li>Modifications to the CSS styles</li>
<li>Adding Breadcrumbs</li>

</ul>

</details>


📜 <a href="{{ site.url }}{{ site.baseurl }}/exercise/Icon-Fonts.html" target="_blank">Icon Fonts</a>


<details> 

<summary>步骤</summary>

<ul>

<li>Using Icon Fonts and Other CSS classes</li>
<ul>
    <li>npm install font-awesome@4.7.0 --save</li>
    <li>npm install bootstrap-social@5.1.1 --save</li>
</ul>

</ul>

</details>


<!--### 用户输入：按钮和表单-->