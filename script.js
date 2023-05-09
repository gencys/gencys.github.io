var $window = $(window);
const $centeredContent = $(".centeredContent");
const $faceDiv = $(".faceDiv");
const $myFace = $(".myFace");
const $jean = $("#jean");
var thresholdArray = [];
var step = 0.02;

for (let i = 0; i <=  1.00; i = i + step) {
  thresholdArray.push(i);
}

$(document).ready(function() {
  $jean.mouseover(function() {
    $faceDiv.show();
    $myFace.attr("src", "bin/ppCropped.jpg");
  });

  $jean.mouseleave(function() {
    $faceDiv.hide();
    $myFace.attr("src", null);
  });
});

$(document).mousemove(function(e) {
  $faceDiv.offset({
    left: e.pageX + 20,
    top: e.pageY
  });
});

function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el, options)
  })
}

function addObserver(el, options = {}) {
  $(el).css('opacity', 0);
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      let elem = $(entry.target);
      if(entry.isIntersecting) {
        x = entry.intersectionRatio;
        elem.css('opacity', x);
      } else {
        elem.css('opacity', 0);
      }
    })
  }, options)
  observer.observe(el)
}

scrollTrigger('.mainText', {
  rootMargin: '-30% 0 -30% 0',
  threshold: thresholdArray
})