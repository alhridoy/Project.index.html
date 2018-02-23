window.onload = function(){

	var constraints = {
		audio:true,
		video:true
	};

	//callgetMediaUser

	navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){

   var video = document.querySelector('video');
   video.srcObject = mediaStream;
   video.play();
	}).catch(function(err){
		console.log('yes Error' +err.message);
	})


	//controls

  var video = document.getElementById('video'),
    controls = document.getElementsByClassName('controls')[0],
    playPause = document.getElementsByClassName('playpause')[0],
    progress = document.getElementsByClassName('progress')[0],
    volume = document.getElementsByClassName('volume-input')[0],
    fullscreen = document.getElementsByClassName('fullscreen')[0],
    updateProgress;

playPause.addEventListener('click', function() {
  if (playPause.className == 'playpause pause fa fa-play') {
    playPause.className = 'playpause play fa fa-pause';
    video.play();
  } else {
    playPause.className = 'playpause pause fa fa-play';
    video.pause();
  }
});

//FullScreen


video.addEventListener("click", function() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    controls.className = 'controls';
    fullscreen.className = 'fullscreen fa fa-expand';
  } else {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
    controls.className = 'controls extended';
    fullscreen.className = 'fullscreen fa fa-compress';
  }
});
fullscreen.addEventListener("click", function() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    controls.className = 'controls';
    fullscreen.className = 'fullscreen fa fa-expand';
  } else {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
    controls.className = 'controls extended';
    fullscreen.className = 'fullscreen fa fa-compress';
  }
});

video.addEventListener('play', function() {
  progress.max = Math.round(video.duration*10);
  updateProgress = setInterval(function() {
    progress.value = video.currentTime*10;
  }, 100);
});

volume.addEventListener('input', function() {
  video.volume = volume.value/100;
});

progress.addEventListener('input', function() {
  updateProgress = null;
  video.currentTime = progress.value/10
});

	
//   function toggleFullScreen(elem) {
//   if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
//     if (elem.requestFullScreen) {
//       elem.requestFullScreen();
//     } else if (elem.mozRequestFullScreen) {
//       elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullScreen) {
//       elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
//     } else if (elem.msRequestFullscreen) {
//       elem.msRequestFullscreen();
//     }
//   } else {
//     if (document.cancelFullScreen) {
//       document.cancelFullScreen();
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.webkitCancelFullScreen) {
//       document.webkitCancelFullScreen();
//     } else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//     }
//   }
// }


}