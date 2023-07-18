function getreqfullscreen() {
  var root = document.documentElement
  return (
    root.requestFullscreen ||
    root.webkitRequestFullscreen ||
    root.mozRequestFullScreen ||
    root.msRequestFullscreen
  )
}

function getexitfullscreen() {
  return (
    document.exitFullscreen ||
    document.webkitExitFullscreen ||
    document.mozCancelFullScreen ||
    document.msExitFullscreen
  )
}

function getfullscreenelement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  )
}

var globalreqfullscreen = getreqfullscreen()
var globalexitfullscreen = getexitfullscreen()

document.addEventListener(
  'click',
  function (e) {
    var target = e.target
    if (target.tagName == 'IMG' && target.classList.contains('canfullscreen')) {
      if (getfullscreenelement() == null) {
        globalreqfullscreen.call(target)
      } else {
        globalexitfullscreen.call(document)
      }
    }
  },
  false
)
