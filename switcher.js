$(document).ready(function() {

	$("#blueButton").on("click", switchBlue);
	$("#redButton").on("click", switchRed);
	$("#yellowButton").on("click", switchYellow);
	$("#greyButton").on("click", switchGrey);

	function switchGrey() {
		setClass('body', 'greyBackground');
	}

	function switchBlue() {
		setClass('body', 'blueBackground');
	}

	function switchRed() {
		setClass('body', 'redBackground');
	}

	function switchYellow() {
		setClass('body', 'yellowBackground');
	}

	function setClass(tagName, className) {
		$(tagName)[0].className = className;
	}

});