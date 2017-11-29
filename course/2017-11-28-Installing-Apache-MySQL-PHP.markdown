---
layout: post
title: 安装 Apache, MySQL 和 PHP
date: 2017-11-28 09:00:00 -0400
description:  Installing Apache, MySQL, and PHP course note
img: lamp.jpg
tags: [笔记]
---

课程视频链接: <a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-2/" target="_blank">Installing Apache, MySQL, and PHP @ LinkedIn Learning</a>

<br>

## Start and stop Apache on macOS

1. 启动：sudo apachectl start

2. 停止：sudo apachectl stop

3. 重启：sudo apachectl restart

4. 版本：httpd -v

5. 检查：在浏览器输入 localhost

   Terminal 输入 sudo apachectl configtest

6. 使用 sudo nano 修改配置文件

   使用 `ctrl + w` 搜索， `ctrl + x` 保存退出

7. 文件路径：/Library/WebServer/Documents/



<br>

## Configure personal site folders

1. 新建 Sites 文件夹

   1）使用 `cmd + shift + g` 和 `~/` 到主目录

   2）新建 Sites 文件夹

2. 修改配置文件

   1）sudo nano /etc/apache2/httpd.conf
   
      搜索 userdir，取消 2 行注释
   
   2）sudo nano /etc/apache2/extra/httpd-userdir.conf

      搜索 Include，取消 1 行注释

   3）sudo nano /etc/apache2/users/XYT.conf

      最后两行改成 Require all granted


<br>
## Activate PHP on macOS

1. sudo nano /etc/apache2/httpd.conf

   1）搜索 AddHandler，增加一行 AddHandler php5-script php
   
   2）搜索 php，取消 1 行注释
   
2. 新建 PHP 配置文件

   1）路径：cd /private/etc

   2）列出以 php 起始文件：ls php*
   
   3）sudo cp php.ini.default php.ini 

   4）sudo nano php.ini
   
      - 搜索 display_errors，将 Off 改为 On
   

<br>
##  Install MySQL on macOS


1. 官网下载 MySQL Community Server 和 MySQL Workbench
