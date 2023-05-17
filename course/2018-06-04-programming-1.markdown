---
layout: post
title: 涵俊教编程（一）递归
date: 2018-06-04 15:00:00 -0400
description: programming tutorial
img: recursion.jpg
tags: [学习]
---

<details> 

<summary>讨论：什么是递归？</summary>

<br>

<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part1.mp3" type="audio/mp3" />
</audio>

</details>

<br>

<details>

<summary>引出两个重要的概念：</summary>

<br>

<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part2.mp3" type="audio/mp3" />
</audio>

</details>

- Boundary Case 结束条件

- Recursion Equation 递归式


<br>

<details> 
    
<summary>应用（一）n!</summary>
    
<br>

<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part3.mp3" type="audio/mp3" />
</audio>


<pre><code>f(n) = n * f(n-1)</code></pre>
<pre><code>n = 0, f(n) = 1</code></pre>

</details>



<details> 

<summary>应用（二）C(n,k)</summary>

<br>

<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part4.mp3" type="audio/mp3" />
</audio>

<pre><code>C(n,k) = C(n-1,k) + C(n-1,k-1)</code></pre>
<pre><code>n = 0, C(n,k) = 1</code></pre>
<pre><code>k = 0, C(n,k) = 1</code></pre>
<pre><code>k = 1, C(n,k) = n</code></pre>
<pre><code>k = n, C(n,k) = 1</code></pre>

</details>



<details> 

<summary>应用（三）斐波那契数列</summary>

<pre><code>f(n) = f(n-1) + f(n-2)</code></pre>
<pre><code>n = 0, f(n) = 1</code></pre>
<pre><code>n = 1, f(n) = 1</code></pre>


</details>


<br>

时间复杂度


<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part5.mp3" type="audio/mp3" />
</audio>

<br>

<details> 

<summary>答案</summary>

<br>


<li>n!</li>

<ul><pre><code>O(n) = 1 + O(n-1)</code></pre></ul>

<li>斐波那契数列</li>

<ul><pre><code>O(n) = O(n-1) + O(n-2) + 1</code></pre></ul>

<ul>规模（数值）上大于斐波那契数列本身</ul>

</details>


<br>

练习：写出递推法求斐波那契数列第 n 项的 Python 函数

```python

def f(n):
    if n == 0 or n == 1:
        return 1
    else:
        return f(n-1) + f(n-2)

```

<br>

思考：有没有更优的方法？

```python

L = [1,1]

for i in range(0, n-2):
    L.append(L[i]+L[i+1])

print(L[n-1])

```

<br>

总结

<audio controls="controls">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/audio/lecture1/part6.mp3" type="audio/mp3" />
</audio>



<li>递归</li>
<li>递推</li>
<li>记忆化</li>


<br>

作业

用上述三种方法完成 C(n,k) 和斐波那契数列第 n 项的计算

