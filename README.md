# Hackschool Learn Session 2: Grids & JavaScript

**Location:** Covel 227

**Time:** 6:15 - 8:15 PM

**Teachers**
* [Yvonne Chen](https://www.facebook.com/events/123499401688253/permalink/126046088100251/)
* [Nathan Smith](https://www.facebook.com/events/123499401688253/permalink/126046434766883/)

# Resources

**Slides**:
* [Session 1 - HTML and CSS](http://tinyurl.com/hackschool17-session1-slides)
* [Session 2 - Grids and JavaScript](http://tinyurl.com/hackschool17-session2-slides)

**Cheatsheets**
* [HTML and CSS Review](http://tinyurl.com/hackschool-html-css-step)
* [HTML and CSS (Comprehensive)](http://tinyurl.com/hackschool-html-css-review)

**Mentor voting form**: [fill this in]

**Attendance code**: will be available during session


# What we'll be learning today

* Bootstrap
  * Linking to external resource
* Grid Layouts
  * Using bootstrap classes
* Javascript
  * Functions
  * DOM Manipulation
  * Events and handlers
  * jQuery


# What we'll be building today: An Interactive Photogallery

### Step 1: Download starter code

Option 1 - Via Download
* Click on the green button at the top right corner of this page
* Click "Download ZIP"
* Open the starter folder in your preferred editor

Option 2 - Via Git
* Run the following in your terminal:
```
$ git clone git@github.com:acm-hackschool-f17/session-2-learn.git
$ cd session-2-learn/starter
```

### Step 2: Familiarize yourself with the starter code


#### In `index.html`:

This is the bare bones outline of the main page content. It uses [bootstrap classes](http://bootstrapdocs.com/v3.0.3/docs/css/) such as `container` and `row` to specify grid layouts.

Things marked with `TODO` are what you will be filling in.

```
<div class="container">
  <!-- omitted -->
  <div class="row">
    <!-- TODO -->
  </div>
  <div class="row">
    <!-- TODO -->
  </div>
  <!-- omitted -->
</div>
```

#### In `style.css`:

This file contains some pre-done custom styling so that you don't have to spend too much time on it this session.

If you're curious, some interesting snippets of CSS code you might want to look into (that weren't discussed in previous sessions) are:

Selectors:
* `[class^=col-]` - [read more](https://www.w3schools.com/cssref/sel_attr_begin.asp)

CSS Properties:
* `box-sizing: border-box;` - [read more](https://css-tricks.com/box-sizing/)
* `background-size: cover;` - [read more](https://docs.brainstormforce.com/background-image-sizes-explained/)
* `transition: all 0.2s ease;` - [read more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

#### In `script.js`:

These contain the `TODO`s we'll be working on. Don't worry, we'll dive deeper into what these functions do and how to modify it in later steps!

```
function attachEventHandlers() {
	// TODO
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	// TODO

}
```

### Step 3: Get started with a single image in our grid

#### In `index.html`:

Let's head back to the `TODO`s marked here:
```
<div class="row photo-row">
  <!-- TODO -->
</div>
<div class="row photo-row">
  <!-- TODO -->
</div>
```

So we want to create 2 rows of 6 images each. Using bootstrap classes, we can specify `div` elements of width 2, so that 6 of them will fill up the 12 unit width.

```
<div class="col-2">
</div>
```

We also want each box to hold an image. In the `resources` folder, you can look inside and see 12 `.jpg` images, numbered from 1 to 12. We can use these in our image gallery. To reference the first one, we use the relative path `resources/1.jpg` below:

```
<div class="col-2">
  <div class="image" style="background-image: url('resources/1.jpg')"></div>
</div>
```

Save `index.html`, refresh your page, and you should see a single box on the left, taking about 1/6 of the page width, with a picture of a cat inside!


### Step 4: Build out the entire grid

Now that we have a single image, we can create a lot more. Let's add in 5 more in this row, and 6 more in the row below.

#### In `index.html`:

```
<div class="row photo-row">
  <div class="col-md-2 col-sm-4">
    <div class="image" style="background-image: url('resources/1.jpg')"></div>
  </div>
  <div class="col-md-2 col-sm-4">
    <div class="image" style="background-image: url('resources/2.jpg')"></div>
  </div>
  <!-- continued... -->
</div>

<div class="row photo-row">
  <div class="col-md-2 col-sm-4">
    <div class="image" style="background-image: url('resources/7.jpg')"></div>
  </div>
  <div class="col-md-2 col-sm-4">
    <div class="image" style="background-image: url('resources/8.jpg')"></div>
  </div>
  <!-- continued... -->
</div>
```

These use the 12 photos so that photos 1-6 are in row 1, and photos 7-12 are in row 2. Save `index.html`, refresh the page, and you'll see the 2 rows of kittens appear.

### Step 5: Start adding some interactivity

Let's finally get started with adding some JavaScript! In case you missed it, here's a quick [refresher](https://www.tutorialspoint.com/javascript/javascript_syntax.htm ) on basic JavaScript syntax.

#### In `script.js`:

The first thing we want to do is make our image boxes clickable by adding event handlers to them. We can see in our "main" function (which is executed when the document has loaded) calls a function `attachEventHandlers`:

```
$('document').ready(function() {
	attachEventHandlers();
});
```

Hence, this is the function we'll be working in:

```
function attachEventHandlers() {
	// TODO
}
```
The first thing we need to do is select the images that we want to be able to click on. Looking back at the html code, we can see that all the images have the class of `image`:

```
<div class="image" style="background-image: url('resources/7.jpg')"></div>
```

Therefore, we can select them with the jQuery selector by writing `$('.image')`. We can then add event listeners onto them, passing in the `handleImageClick` function:

```
$('.image').on('click', handleImageClick);
```

Translating this line of code into English is basically: when an html element with a class of 'image' is clicked, execute the function `handleImageClick`.

Just to make sure this is working, let's add a `console.log` statement inside the function:

```
function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	// TODO
	console.log('hello world!');
}
```

Now, try clicking on any image element, and check your console to see if the string 'hello world' is logged out!

### Step 6: Continue fleshing out interactivity
