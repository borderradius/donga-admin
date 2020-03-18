import Vue from 'vue'

const draggable = function(el) {
  el.style.position = 'absolute'
  let startX, startY, initialMouseX, initialMouseY

  function mousemove(e) {
    const dx = e.clientX - initialMouseX
    const dy = e.clientY - initialMouseY
    el.style.top = startY + dy + 'px'
    el.style.left = startX + dx + 'px'
    return false
  }

  function mouseup() {
    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('mouseup', mouseup)
  }

  el.addEventListener('mousedown', function(e) {
    startX = el.offsetLeft
    startY = el.offsetTop
    initialMouseX = e.clientX
    initialMouseY = e.clientY
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
    return false
  })
}

Vue.directive('draggable', {
  bind: draggable
})
