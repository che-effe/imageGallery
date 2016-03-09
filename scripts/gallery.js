// Set up our variables for our DOM objects that our JS will need reference to.

// our main selected image containers
var mainWindow = document.getElementById('mainWindow');

// our thumbnail container
var thumbContainer = document.getElementById('thumbContainer');

// a value for time since last detected mousemovement.
var idletime = 0;

/*Add an event listener for mouse movement that will reset idleTime
which should trigger the thumbnail gallery to hide away*/
window.addEventListener('mousemove', function() {
  idleTime = 0;
});

function pollMouseMove() {
  var delay = 10;

  // check the value of  idleTime to see if it's above or equal to 2 seconds
  if (this.idleTime >= 2) {
    // if it's greater than 2, remove the shown class and hide the gallery
    this.thumbContainer.classList.remove('shown');
  } else {
    // if it's less than 2, add the shown class to the gallery items and
    // display them
    this.thumbContainer.classList.add('shown');
  }

  //increase the value of idletime by 1 every second.
  if (this.idleTime < 2) {
    delay = 1000;
    this.idleTime = this.idleTime + 1;
  }

  // have poleMouseMove call its self again.
  setTimeout(function() {
     pollMouseMove();
   }, delay);
}

// gets called when we click on a gallery item and passes the clicked element
// into the function as `sender`
function updateSelectedMedia(sender) {
  // `sender` is now a reference to the item that was clicked (the image)

  // let's make a string variable from the contents of the
  // src attribute of the image that was clicked and replace
  // the word `thumbnail` with `fullsize`.
  // ie (`images/thumbnails/camels/sunset.jpg` becomes `images/fullsize/camels/sunset.jpg`)
  var str = sender.src.replace('thumbnails', 'fullsize');

  // we add a class to the main window that makes it fade out.
  mainWindow.classList.add('transitioning');

  // this block of code in the setTimeout will execute a bit later than the
  // code above.
  setTimeout(function() {

    // add a src attribute to the mainWindow image with a value of the srt variable
    // that we creted above.
    mainWindow.src = str;

    // we remove the class that fades the main window out now that it has
    // an image source.
    mainWindow.classList.remove('transitioning');
  }, 500);
}

// initiate the mouse move polling function.
pollMouseMove();
