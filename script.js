var $window = $(window);
const $centeredContent = $(".centeredContent");
const $faceDiv = $(".faceDiv");
const $myFace = $(".myFace");
const $jean = $("#jean");

let contentPositions = [];
for (let x =0; x<$centeredContent.length; x++) {
  contentPositions.push($($centeredContent[x]).position().top);
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

if ($(window).scrollTop() <= 0) {
  $("#firstContent").css("opacity", 1);
}

});

function setGaussianOpacity(object) {
  var opacity = Math.exp(- Math.pow($window.scrollTop() - $(object).position().top, 2) / 4000);
  if ($window.scrollTop() > 0) {
    $(object).css("opacity",opacity);
  }
}

$window.scroll(function() {
  setGaussianOpacity("#firstContent");
  setGaussianOpacity("#secondContent");
  //console.log($("body").children().eq(0).position().top);
});
