var $window = $(window);
const $centeredContent = $(".centeredContent");
const $arrow = $(".arrow-down");
const $faceDiv = $(".faceDiv");
const $jean = $("#jean");
const $qwitchLink = $("#qwitchLink");
const $qwitchCard = $(".qwitchCard");
const $MBLink = $("#MBLink");
const $MBCard = $(".MBCard");
var thresholdArray = [];
var step = 0.02;

for (let i = 0; i <= 1.00; i = i + step) {
	thresholdArray.push(i);
}

function mouseOverHandler(triggerEl, showedEl){
	triggerEl.mouseover(function () {
		showedEl.show();
		//$myFace.attr("src", "bin/ppCropped.jpg");
		$(document).mousemove(function (e) {
			showedEl.offset({
				left: e.pageX + 20,
				top: e.pageY
			});
		});
	});

	triggerEl.mouseleave(function () {
		showedEl.hide();
		//$myFace.attr("src", null);
		$(document).off("mousemove");
	});
}

$(document).ready(function () {
	mouseOverHandler($jean, $faceDiv);
	mouseOverHandler($qwitchLink, $qwitchCard);
	mouseOverHandler($MBLink, $MBCard);
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
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			let elem = $(entry.target);
			if (entry.isIntersecting) {
				x = entry.intersectionRatio;
				elem.css('opacity', x);
			} else {
				elem.css('opacity', 0);
				if (options.forget) {
					observer.unobserve(el);
				}
			}
		})
	}, options)
	observer.observe(el)
}

scrollTrigger('.mainText', {
	rootMargin: '-30% 0 -30% 0',
	threshold: thresholdArray,
	forget: false
});

var marginTop = - $window.height() + 160;
scrollTrigger('.arrow-wrapper', {
	rootMargin: marginTop.toString() + 'px 0 0 0',
	threshold: thresholdArray,
	forget: true
});