# HTML/CSS/JS Fundamentals
### Core concepts to make you more gooder at understanding the underlying principles and best practices of HTML/CSS/JS.

---
---

### inb4: *"This is long, look at the scroll bar, holy crap why should I read this"*
Because this will include important concepts that will be necessary to know and be intimately familiar with to properly develop any application that has a user interface and that communicates with a backend.

It is by no means exhaustive (or even necessarily a in-depth explanation of anything), but it's mostly meant to at least introduce some of the terms and briefly describe their importance. Most everything in this little guide...thing merits a deeper dive with a Google search or two.

If you had to focus on ANYTHING mentiond in this document, I would focus the most on:
- DOM/DOM Manipulation
- CSS Flexbox/Grid
- CSS naming/BEM
- JavaScript quirks
- AJAX

If you already know these concepts, then yeeeeeeeee, lemme know that you do.

If I got anything wrong, also lemme know so I can fix it.

Sorry that this is short on examples, but I tried to get this out quickly since I won't be able to hold a peer session this week. (11 Nov 2018).

Great general resources include:
- CSS and all things front end
    - Smashing Magazine (has free books, these guys are THE standard)
    - CSS Tricks (very easy-to-get-around reference, user-friendly)
    - Mozilla Developer Network (MDN) (well-written documentation
- JavaScript
    - Marijn Haverbeke's "Eloquent JavaScript" (Link under Resources/JavaScript in the Drive folder)
    - Again, Mozilla Developer Network
- HTML
    - Look no further than: W3Schools.
    
Again, the main purpose of this whole document is just to get you familiar with some of the terms and practices so that you can "know what you don't know", so to speak. It's up to you to learn what you need to (or want to) in depth.

## HTML(5)

_*(In case you haven't already visited [W3Schools](https://w3schools.org), do so! It's a great resource for HTML overall, and CSS basics. However, it lacks some CSS best practices on a project-scale and has an outdated guide for JS.)*_

##### Brief Introduction to how HTML5 came to be
HTML (HyperText Markup Language) is a subset of XML (eXtensible Markup Language). XML is a broadly general way of organizing data.

```xml
<cargoship>
  <crate>
    <id>582930</id>
    <shipper>
      <id>15837583848</id>
      <name>Hanjin</name>
    </shipper>
    <contents>  
      <dog />
      <cat />
      <banana />
    </contents>
  </crate>
  <crate>
    <id>120839</id>
  etc...
</cargoship>
```

HTML is a less strict way of organizing data. In the case of HTML, it is a way of organizing the contents of a webpage, where each element of a webpage is a piece of data.

```html
<body>
  <h1>This is a header</h1>
  <p>This is a paragraph</p>
  <ul>
    <li>This is a list item 1</li>
    <li>This is a list item 2</li>
  </ul>
</body>
```

One of the main differences between HTML and XML is that HTML is less strict. Browsers can generally self-error-correct things like unclosed tags (i.e. ```<p>Woops```). But, close your goddamn tags.

HTML5 brings a bunch of new tags aimed at helping improve the semantic organization of HTML documents, such as 

```html
<header>
<nav>
<section>
<footer>
<!-- and more -->
```

[Click here to see all new HTML5 Elements](https://www.w3schools.com/html/html5_new_elements.asp)

Before these, documents were organized mainly by the `<div>` tag. The problem with this is that it is difficult for accessibility tools such as screenreaders to know what sort of content is contained within the `<div>`. Also, organizing content semantically with HTML5 elements helps improve SEO (Search Engine Optimization), which can be the difference between a site having thousands of views a day, to zero. (Think of how many times you scroll past the first couple of results on a Google search).

Anyways, with respect to making a full-stack, front-to-back application, the importance of HTML is related to mostly front-end things, most particularly DOM manipulation.

#### The DOM (Document Object Model)
Now that you know how an HTML document models data, it is important to know what this means in terms of coding. Seeing as a webpage is essentially a model of data in the form of HTML, it is necessary to know how this data is structured. Looking at the form of HTML, it shows "parent" nodes and "children" nodes.

```xml
<parent>
  <child1>
    <child1a />
    <child1b />
  </child1>
  <child2>
    <child2a />
    <child2b />
    <child2c />
  </child2>
</parent>
```

Drawing out the parent-child relationships, we end up with a tree data structure.

![you actually checked the alt text?](https://i.imgur.com/fJSBS6L.png)

This is *VERY* important, because it is the basis of all interactions in JavaScript with the HTML webpage itself. I'll cover this more in the JavaScript section under DOM Manipulation.

---

## CSS
I won't go over the basics of CSS here since I think going somewhere like [W3Schools](https://www.w3schools.com/css/) is sufficient for the VERY basics. **A better, more exhaustive guide is [Mozilla's CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS).** They include everything up to Responsive Web Design.

However, I'll briefly cover some best practices and do's/dont's, and more importantly, some guidelines for naming and formatting the document as a whole, so that future developers don't hate your guts. :+1:

#### Topics you should look over/know
- syntax
- selectors
- selector specificity
- Box Model (tl;dr: everything is a box)
- *IMPORTANT* Pleasepleaseplease look up "margin collapsing CSS" on Google. This is a weirdweird quirk with CSS and WILL cause you headaches because the behavior is stupid and makes no sense.

#### Overview
I'm going to try to cover:
- Choosing a selector
- Basic Responsive Web Design (RWD)/Mobile First Design
    - Flexbox
    - Grid
- Naming classes (and why you should avoid 'id')
- CSS Style guide (how to write CSS more pretty-fully)
- Organizing the entire CSS document

##### Choosing a Selector
Generally speaking, always choose the *least* specific selector that accurately selects what you're trying to...well, select.

```html
<!-- HTML -->
<section>
  <h1>Header</h1>
  <p class="paragraph-red" name="my-par">My paragraph</p>
</section>
```

```css
/* CSS */
p {
  color: red;
}

section > p {
  color: red;
}

h1 ~ p {
  color: red;
}

p[name="my-par"] {
  color: red;
}

p .paragraph-red {
  color: red;
}
```

In the code above, if all `<p>` tags are going to be red by default, then choose the first selector. The others are unnecessarily specific and will only lead to confusion when reading the code. 

As a guideline, good naming conventions can reduce (if not entirely get rid of) difficult-to-understand selectors. For example, `.paragraph-red { color: red; }` is more readable than `p1 > h1 ~p { color: red; }`, even though they select the same element in the HTML as written above.

**TL;DR** Choose the least specific selector possible. Choosing the right CSS class name to begin with will make this *infinitely* easier.

##### Basic Responsive Web Design/Mobile First Design

(A good resource for RWD/MFD)[https://developers.google.com/web/fundamentals/design-and-ux/responsive/]

The principles of Mobile First Design are a good guide for designing a well-made webpage. In general, MFD means designing for the mobile interface first. Since a mobile phone screen is much smaller than a computer screen, it emphasizes designing for only the most important elements that can fit on such a small screen. 

Designing for mobile first allows you to then scale up your design, only adding in elements as needed.

**Breakpoints**
---
Breakpoints are sizes at which the interface design "breaks" i.e. looks like s#!t. The most commonly used breakpoints are:
- 480px (phones)
- 736px (tablets)
- 980px (...big tablets. and laptops)
- 1280px (MASSIVE tablets. But mostly computers)
- 1690px (Ok, not tablets anymore. Just computers).

***NOTE*** These are only *guidelines*. You should only make breakpoints at the points where your UI starts to look terrible. Plop a breakpoint there, make fixes, then resize the window larger until it breaks again. Repeat until ~1700ish pixels (or go larger to support ultra-widescreen displays).

So, the basic method is:
1. Design for small interface ~480px.
2. Resize until it looks terrible (~700ish pixels most likely). Fix the UI.
3. Resize...fix.
4. Resize...fix. etc.

*For the purposes of Kalooh*, we want to particularly pay attention to the small phone interfaces (480px) all the way to the large tablets (~980px), since these are the main devices that will use Kalooh. 

**Relative Units vs. Fixed Units**
Use relative units. Mostly.

Fixed width units refers to making things a fixed size:
```css
img .fixed-img {
  width: 980px;
}
```

In the CSS above, the image will be 980px no matter how the user scales the viewport. This means that even on mobile phones, the image will be 980px which means the user will have to scroll to view the entire image.

Instead, using relative units, we can set the size of the picture relative to the size of the webpage itself.

```css
img .fixed-img {
  width: 100%;
}
```

It's important to note that this sets the image to 100% of the width of its ***parent*** container, not necessarily the width of the entire webpage. Make sure you understand this by looking online for resources.

**Not everything works best with percentages!**
In general, layout elements (div, section, article, body) work best with percentages since it's relative to the layout of its parent).

Other things, like font, padding, and borders respond better to different methods:
**Font**
*Warning: Math* Font is a bit of a weird one because ideally, we want our fonts to scale with the viewport without any weird, choppy resizing. The simplest method is to use "em" or "rem". Em units are a px-value relative to the parent element. Rem units are a px-value relative to the root (aka the "html") element. essentially though, these are just pixel values, but it makes it easier to write, since if we change the font-size of the parent, the children will change automatically since its just relative to the parent.

*NOTE*: Favor "em" over "rem" (Sorry Rem)

The better, albeit more complicated solution is to use a math equation to fluidly resize our text. In this equation, we set the boundaries of how large and small we want the text to be. Then, we define the screen width boundaries using something called "viewport units" (vw and vh).

*vw* and *vh* are a measure of the view-height (i.e. height of the visible part of the webpage in the browser) and the view-width (i.e. the width of the visible part of the webpage in the browser). These are *extremely* convenient because the values will adjust automatically however the user resizes the browser window.

```css
body {
  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
}
```

**Padding**
Padding, despite possibly seeming more layout related, is actually more closely related to the content to which it surrounds. Seeing as this content is usually text, it makes sense to use text-based units to determine the padding. 

Based on the Font-blurb above, we have two options: we can use either em/rem, or vw/vh. I personally favor vw/vh, but you can make both work.

**Borders**
Use pixels. Honestly, borders usually aren't as critical as other parts, since they're both content and layout independent, so you can use whatever floats your goat. But, unless you need a border that responsively resizes based on the size of the browser, then pixels work.

##### Flexbox/Grid
The future of CSS, here now. If I see you using "float" in our project, I will come to your house and...tell you why floats are bad. Seriously though, don't use floated layouts.

(A bit of context on *float*: Float is made to be used on newspaper type layouts, back from the days when the internet was young and people tried to put newspapers online as a new way of reading the newspaper. It's made to push an image to the right or left, and have the text flow around the image. The reason it's bad in modern design is because it takes the floated element out of the natural flow of a document, and browsers can sometimes do very weird, unique things with floated elements, leading to unpredictability. Plus, it was never supposed to be used as a layout tool anyways. So don't do it.)

In a nutshell, Flexbox and CSS Grid are both ways to make responsive layouts very easily, without having to worry as much about responsive units and whatnot.

In lieu of writing how to use Flexbox/CSS Grid, I'll provide two links:

[Flexbox Froggy](https://flexboxfroggy.com/)
[Grid Garden](http://cssgridgarden.com/)

##### Naming Classes
Think of naming CSS classes as naming variables in regular code. A good name goes a long way to helping collaborators understand what the actual heck you're trying to do. It also helps when you revisit your code 3 months later and try to understand what the actual heck you were trying to do.

CSS class names generally work best when they describe what sort of style is being added, rather than what the element actually is.

```html
<!-- HTML -->
<p class="important-paragraph">THIS IS IMPORTANT</p>
```
```css
/* CSS */
.important-paragraph {
  color: red;
}
```

Does the class name "important-paragraph" actually tell you how the content is supposed to look? It certainly doesn't tell you that the paragraph is going to be colored red. It might even lead on that the paragraph might have a large font, which the style does not add.

```html
<!-- HTML -->
<p class="color-red">THIS IS IMPORTANT</p>
```
```css
/* CSS */
.color-red {
  color: red;
}
```

In this example, the class name tells you *exactly* what style the class is going to add. However, what if we want to add more than one style? Are we simply gonna have to list each different style as a separate class name? (Spoiler: No.)

###### Along Came BEM 

[Good resource that explains BEM in a few paragraphs](https://cssguidelin.es/#bem-like-naming)
Also, note that different resources give different interpretations of BEM, so it's always a good idea to look at the source of the madness: [BEM](https://getbem.com)

BEM (Block, Element, Modifier) is a naming convention for CSS that helps organize styles, while also providing a naming framework for writing descriptive class names.

BEM involves three parts:
1. Block: any DOM node that can use the "class" attribute
2. Element: Any child node within a block
3. Modifier: extra descriptor (i.e. class name) added to either a block or element.

Example:

```html
<!-- HTML -->
<form class="form form--theme-material">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```
```css
/* CSS */
/* Just making stuff up here */
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form--theme-material {
  background-color: #0000ff;
  color: #eee;
}

.form__input {
  font-size: 1.66666em;
}

.form__input:focused {
  border: 2px solid #529f1h;
}

.form__submit {
  padding: 0.02vw;
  text-align: center;
} 

.form__submit--disabled {
  color: #ccc;
}
```

**IMPORTANT** Note in the example above:
The styles in the CSS document only modified styles that were related to class name. That is, layout elements like the HTML form with class name "form" only modified layout styles, such as `display: flex`. 

On the other hand, content-filled components only dealt with content-related styles, such as `color: #eee` or `font-size: 1.66666em`.

This is an important consideration, and an example of ***separation of concerns***. _Separation of concerns also applies to CSS!_

##### Organizing the whole CSS shebang
Style guides and more. Style guides for entire CSS documents are very up-to-your-own preferences, but I'll post a list of some good style guides (I read through these myself, and I personally liked the CSS Wizardry, Smashing Magazine style guide, and AirBNB style guides).

(CSS Style Guides)[https://css-tricks.com/css-style-guides/]
(AirBNB CSS Style Guide) [https://github.com/airbnb/css] (Short and sweet)
(Google HTML/CSS Style Guide)[https://google.github.io/styleguide/htmlcssguide.html] (It's Google. And they added some good HTML style points)

---
---

### JavaScripthttps://github.com/airbnb/css] (Short and sweet)
(Google HTML/CSS Style Guide)[https://google.github.io/styleguide/htmlcssguide.html] (It's Google. And they added some good HTML style points)

---
---

### JavaScripthttps://github.com/airbnb/css] (Short and sweet)
(Google HTML/CSS Style Guide)[https://google.github.io/styleguide/htmlcssguide.html] (It's Google. And they added some good HTML style points)

---
---

### JavaScripthttps://github.com/airbnb/css] (Short and sweet)
(Google HTML/CSS Style Guide)[https://google.github.io/styleguide/htmlcssguide.html] (It's Google. And they added some good HTML style points)

---
---

## JavaScript
![True](https://pics.me.me/welcome-to-javascript-where-the-objects-are-made-up-and-13411868.png)
You made it to JavaScript! This section won't cover any syntax or loops, or any of that basic stuff that you can find online in like 2 seconds. Instead, I'll try to quickly cover some core concepts about the language itself and how it works, as well as some of the quirks that arise because of this.

**NOTE** A PHENOMENAL resource is Marijn Haverbeke's [Eloquent Javascript](https://drive.google.com/open?id=1lvKEC8b4hzdyuLLCgwVUe5n1oXhRccX8). While you might not have the time to read the entire thing, look particularly at the Binding And Scopes section of the Functions chapter, the Asynchronous Programming chapter, the Document Object Model chapter, and the Handling Events chapter. It will help understand the major parts of JavaScript (and reduce headaches later).

**TL;DR** 
- Use ES6 syntax exclusively (`let`, `const` over `var`) (arrow functions over...normal functions.)
- Integers are weird. `0.1 + 0.2 === 0.3 // false...` <- Due to floating point precision.
- Use `===` not `==` for type safety.
- Variables/Functions are hoisted to the top of their scope.
- `this` is not what you think it is. It works differently than other languages.

You will almost guaranteed run into a number of these while developing, even when using frameworks and the like. As such, being familiar with these hiccups will help you debug some of the trickier parts.

### Why is JavaScript?
JavaScript is quirky, messy, whattheheckwhydidmycodedothat language that is also the most used language in the world and is involved in every webpage that you have and ever will visit. If you think that that doesn't sound like a "shining critique" of JavaScript, that's because it's not. 

There are numerous cases in which JavaScript will take what you type in it and interpret it as something entirely different. This is by design (not good design, but hey), since JavaScript was originally marketed as being "beginner-friendly" and thus allowed for loose interpretation of syntax.

JavaScript was originally started by NetScape (a browser company before the days of Internet Explorer) and was made to be a scripting language to tie together HTML and images/other media. It wasn't super popular at first since it kinda...sucked.

However, due to its ability to handle asynchronous code via AJAX (will cover in a sec), JavaScript saw widespread adoption.

### Quirks First, Good Stuff Later
![The "good" parts](https://pbs.twimg.com/media/CLWv31DWgAAvvsj.jpg)
#### this
`this` is not the `this` you know and love(?) from other languages. When you invoke `this` in JavaScript, it invokes it from the context in which it was called. That might sound all fine and dandy from a code-only standpoint, but remember, many of your functions are called from the *browser*, not the JavaScript file itself. Hence, your `this` might actually refer to the *browser* object, not the JavaScript.

[Check out MDN's explanation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

An important (and modern!) way to avoid this complication is to use ES6 arrow functions. This functions bind `this` more similarly to how it is in other languages.

#### Hoisting/Variable Scope
Every declared variable, including functions will automatically get "hoisted" to the top of their available scope, leaving behind any assignments placed later. In other words:

```javascript
var a = 5;
var b;

b = 10;

adder(a, b);

var adder = function(arg1, arg2) {
  return (arg1 + arg2);
}
```

This actually works. Hmm. Note that `b` wasn't defined until the last line, and we called our function `adder` before it was even declared. This is because when the JavaScript is run, it hoists all variable and function declarations to the top, without their assignments.

```javascript
var a;
var b;
var adder;

a = 5;
b = 10;

adder = function(arg1, arg2) {
  return (arg1 + arg2);
};

adder(a, b);
```

This is important to consider since your variables will ALWAYS be declared WITHOUT a default value at the top of any JavaScript file, followed by function declarations. As a good practice, all variables should always be declared at the top of their respective scopes. No variables should be declared in the middle of a scope (not just in JavaScript, but in any language really.)

**Side Note** Any variable that is declared WITHOUT `var`, `const`, or `let` (i.e. is naked :scream:) is AUTOMATICALLY placed in the global scope. DON'T do this!

```javascript
function plsNo() {
  x = 5; // x is now in the global scope
}

console.log(x); // 5

function plsYes() {
  let y = 7;
}

console.log(y); // undefined
```

### JavaScript and Asynchronicity
Asynchronicity is very similar to multithreaded-ness, but instead of having multiple threads, is a single threaded event-based loop. In other words, it's a single thread, but events can add things into the loop, trigger things in the loop, etc. to give the feel of multithreaded-ness without having to manage threads.

This is a rather low-level concept, but is critical to how JavaScript and Node.js work. 

Instead of trying to rehash it here, I'll just point to a single resource (feel free to look up additional resources, it'll help): [MDN: JavaScript Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

##### Ajax
AJAX (Asynchronous JavaScript And XML) utilizes the asynchronous nature of the JavaScript event loop to make non-blocking HTTP requests to a specified URL. 

Normally, doing a synchronous request would involve having to block the rest of the code in order for the request to complete before continuing. On a web browser, this is pretty bad from the point of view of the user. Being able to dynamically, and asynchronously load resources is a great way to make an unimpeded web experience.

[MDN Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### DOM Manipulation
Manipulating the DOM (Document Object Model, the "HTML is a tree structure" thing from earlier) is the meat and potatoes of JavaScript. Manipulating the DOM means adding/removing nodes from the HTML markup, enabling dynamic webpages.

You can read up more about DOM manipulation through a Google search, but the main thing to understand here is that all HTML webpages are structured as a tree. Inserting/deleting nodes can be done through JavaScript, allowing you to dynamically edit a webpage via a function call.

---
---

Anyways, I mostly just wanted to give you an idea of what's out there as far as the important, *absolutely important* bare fundamentals that will be helpful in developing an application, even if it's not directly a web application. The fundamentals here apply to any application, since it involves front end concepts such as the DOM, to back end concept such as asynchronous, non-blocking communication. 

I encourage you to look up whatever you need to, and ask questions on any other concepts that I didn't/forgot to include here!
