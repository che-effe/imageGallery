  var mainWindow = document.getElementById('mainWindow');

  function updateSelectedMedia(sender){
    var str = sender.src.replace('thumbnails', 'fullsize');
    str = str.replace('png', 'jpg');
    mainWindow.classList.add('transitioning');

    setTimeout( function() {
      mainWindow.src = str;
      mainWindow.classList.remove('transitioning');
    }, 800);
  }
