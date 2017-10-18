# Hackschool Learn Session 2: Grids & JavaScript

**Location:** Covel 227

**Time:** 6:15 - 8:15 PM

**Teachers**
* [Yvonne Chen](https://www.facebook.com/events/123499401688253/permalink/126046088100251/)
* [Nathan Smith](https://www.facebook.com/events/123499401688253/permalink/126046434766883/)

# Resources

**Mentor voting form**:
* [Vote here before the end of this session!](https://goo.gl/forms/2l8dwaYgPHsXGnhT2)

**Slides**:
* [Session 1 - HTML and CSS](http://tinyurl.com/hackschool17-session1-slides)
* [Session 2 - Grids and JavaScript](http://tinyurl.com/hackschool17-session2-slides)

**Cheatsheets**
* [HTML and CSS Review](http://tinyurl.com/hackschool-html-css-step)
* [HTML and CSS (Comprehensive)](http://tinyurl.com/hackschool17-html-css-review)

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

### Step 6: Add interactivity to selected image

Once we click on an image box, we want the CSS to update in some way to reflect this. In the CSS file, we see that when a class of `selected` is added to an element of class `image`, a border is shown:

```
.image.selected {
	border: 2px solid white;
}
```

So, in the `script.js` file, we want to trigger this class on the `target` element on click.


```

function handleImageClick(event) {

  /*omitted portion*/

	target.addClass('selected');

}

```
Let's save our `script.js` file and refresh the page. Now, when we click on an image box, the white border appears on it. If we want to be able to de-select an image, we can actually use `toggleClass()` to add and remove a class automatically. However, let's separate this out manually using the `hasClass` method to really see what's happening:

```

function handleImageClick(event) {

	/*omitted portion*/

	if (target.hasClass('selected')) {
		target.removeClass('selected');
	}
	else {
		target.addClass('selected');
	}

}

```

Save our `script.js` file, and now when we click on a box that is already selected, the white border goes away.

What if we click on a separate box though? Something undesired happens, another selection is created. We want to actually de-select all the past images if we click on a new one. So let's actually use the `images` variable to do this:

```

function handleImageClick(event) {

	/*omitted portion*/

	if (target.hasClass('selected')) {
		target.removeClass('selected');
	}
	else {
    images.removeClass('selected');
		target.addClass('selected');
	}

}

```

Great!

### Step 6: Add interactivity to images that are NOT selected

If we take a look at the final page we're making, we can see that images that are NOT selecting become greyed out. Let's look at the CSS to see how to do this:

```
.image.not-selected {
	opacity: 0.5;
}
```

Alright, so there's separate class `not-selected` that can dim the opacity of an image box. Let's add and remove these within our `if/else` block:

```

function handleImageClick(event) {

	/*omitted portion*/

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');
		target.addClass('selected');
	}

}

```

This is good - the `not-selected` class is added and removed when we toggle. However, we don't want it to be applied to the `target` image box that we just clicked. So we fix this by immediately removing the class from `target` after adding it to all the elements with class `image`.

```

function handleImageClick(event) {

	/*omitted portion*/

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');
		target.addClass('selected');
		// add this in
		target.removeClass('not-selected');
	}

}

```

### Step 7: Showing the info pane

We're on our final step! Now, we want to be able to have our info pane show and hide when we select an image box, and have it display an enlarged version of the image we selected.

The info box is the variable `info`, and we can call jQuery's `fadeIn()` and `fadeOut()` methods on it in our `if/else` block (the number inside is how many milliseconds it transitions for):

```

function handleImageClick(event) {

	/*omitted portion*/

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');

		// add this
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');
		target.addClass('selected')
		target.removeClass('not-selected');

		// add this
		info.fadeIn(200);
	}

}

```

Our final step is the update the preview image with the one we selected! We can do this by examining the `target` variable's css style property `background-image`:

```
console.log(target.css('background-image'));
```

This gives us a string with `url('resource/num.jpg')`

We want to then update the preview image with this css style property, so we add it to the `preview` variable:

```
preview.css('background-image', target.css('background-image'));
```

Placing this in the `else` block after `info.fadeIn(200);` is our final step.

Great! Save everything, refresh your page, and you should now have a working demo of the photo gallery!
