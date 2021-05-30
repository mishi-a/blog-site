---
title: Static Vs Dynamic Site
date: 2021-05-31
description: # Add post description (optional)
img: ./../../assets/how-to-start.jpg # Add image post (optional)
tags: [WebSite]
---

This post will try to explain in the most simplest way, the difference between static vs dynamic Website. Before going further lets quickly understand how you get an webpage when you hit the url.
Basically once you hit the URL, after dns resolve it to IP it hits the server, server based on the request serve you with the html (index.html),css, and js. Once the browser receives these file it start building the complete dom, applies the CSS and then JS.

We will see the difference between two different way in which browser can render a page i.e. static and dynamic.

## Static Site:
Site which are static, will send the same response of asset [HTML/CSS/JS] files for each and every request. However this doesnt mean you can't interact with page the page can render DOM, make an API call but api call should return data not content like HTML, CSS or Js. For eg: This **blog** hosted on github pages, build using gatsby.

## Dynamic Site:
These basically generates the asset file on the server, by stitching multiple piece together or building new one entirely on the fly using server side scripting language like PHP, Javascript etc. 
You will need this in complex and big site like amazon, facebook etc.

## Example to explain the difference:
Suppose you have simple webpage with button on it. And you need to display the time in table format. 
You have two option: Either have that table hidden, and display it with browser time on client itself once button clicked or once button is clicked hit the server to get the table element HTML with server time. Former is what will happen in Static site while Later is a dynamic site.

## Comparing Static Vs Dynaic:

|Static Site   | Dynamic Site|
|--------------|-------------|
|Content is static | Content is generated on the fly by server|
|As Static content can be cached in CDN, better loading time| No Scope of caching |
|More suitable for SEO, as easily crawable making ranking higher| Less suitable for SEO|
|Less powerful | More powerful |


