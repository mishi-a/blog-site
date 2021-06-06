---
title: "Learning CSS 1: Selectors, Combinators and Specificity"
description: # Add post description (optional)
img: ./../../assets/Css.png # Add image post (optional)
tags: [CSS]
date: 2021-06-07
---

This is the first in the series of Learning CSS. In this we will basically look at building block of CSS
i.e. Selectors and Combinators. We will also talk about specifity. As we all are aware CSS (Cascading Style sheet), helps in beautifying the plain html page by putting in some style.

## Prerequisites
1. Basic of HTML
2. Understanding of Dom Model

## Selectors:
Selectors are basically used to pick an element from dom or HTML(Tag) and apply appropriate style on them.

**Basic HTML**

    <!doctype html>
    <html>
    <head>
        <title>This is the title of the webpage!</title>
    </head>
    <body>
        <p id="paragraph">This is an example paragraph. Anything in the <strong>body</strong> tag will appear on the page, just like this <strong>p</strong> tag and its contents.</p>
        <div>
         <h1 class="h1-class" style="color:blue">Hello From H1</h1>
        </div>
    </body>
    </html>

Above we show basic html we will use above example to understand selector.

* **Element Selector:**

You can select element directly as well to style. 

    body {
        
    }

* **Universal Selector:**

This will select all the element from HTML.
    
    * {
        
    }

* **id Selector:**
One can assign an **id** to an element in html. Here id can be paragraph, and it will select <p> tag to style. To select use *#* in css.
   
    #id {
        
    }

* **Class Selector:**
With id it is recomended that id can be only applied to one element, where as class is just like a group of element. we can select *h1-class* from above to style. one need to use *.* to select.
    
    .class {
        
    }

* **Attribut Selector:**
One can also use attribute to perform selection of element to style. one need to use [] to select.
    
    [style] {
        
    }


## Combinators:
We have seen as far selectors, which basically select an element using various technique like class, id attribute etc. however we can also use them in combination to perform selection.

* **Descendent Selector:**

It will find all *p* element which is a descendent of *div* and apply the style. We need to have space. 
    
    div p {

    }

* **Child Selector:**

It will select all *p* which is direct descendent of *div* element.
    
    div > p {

    }    

* **Adjacent Sibling selector:**

It will select all *p* which immediately follows *div* and share same parent.
    div + p {

    }

* **General Sibling Selector:**

Same as Adjacent selector, with only immediately follows condition waived off.
    
    div ~ p {
        
    }

## Specificity:
This concept is used to resolve conflict in case of multiple selector targetting, the same element.
For eg:
    
    #paragraph {
        color: blue
    }

    p {
        color: red
    }

In this case as both the selector are targetting same <p> element, however finally blue color will be applied and this is because of specificity of **id selector** being higher than **element selector**.

*Specifity Order*:
1. Inline Style
2. Id Selector
3. Class selector/Attribute selector
4. Element Selector/Pseudo element selectors

In case of conflict still there then order of declaration in CSS matters and later rules are applied finally.


