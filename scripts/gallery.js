  var mainWindow = document.getElementById('mainWindow');
  var thumbContainer = document.getElementById('thumbContainer');
  var idletime = 0;

  window.addEventListener('mousemove', function() {
    idleTime = 0;
  });

  function pollMouseMove() {
    var delay = 10;
    if (this.idleTime >= 2) {
      this.thumbContainer.classList.remove('shown');
    } else {
      this.thumbContainer.classList.add('shown');
    }
    if (this.idleTime < 2) {
      delay = 1000;
      this.idleTime = this.idleTime + 1;
    }

    setTimeout(function() {
       pollMouseMove();
     }, delay);
  }
  function updateSelectedMedia(sender){
    var str = sender.src.replace('thumbnails', 'fullsize');
    str = str.replace('png', 'jpg');
    mainWindow.classList.add('transitioning');

    setTimeout( function() {
      mainWindow.src = str;
      mainWindow.classList.remove('transitioning');
    }, 800);
  }

  pollMouseMove();
