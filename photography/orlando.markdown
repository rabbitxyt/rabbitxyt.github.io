---
layout: gallery
title: 奥兰多
date: 2016-03-22
no_menu_item: true # required only for this example website because of menu construction
previous: yellowstone
next: napa
support: [jquery, gallery]
---


<h3>迪士尼乐园</h3>

{% include gallery-layout.html gallery=site.data.galleries.orlando-disney-parks id_number=1 %}

<h3>环球影城</h3>

{% include gallery-layout.html gallery=site.data.galleries.orlando-universal-studio id_number=2 %}