var numberOfContainStep = 3;
var numberOfChoiceInStep = 3;

var listOfSteps = [];
var listOfMinToSteps = [];

var max = null;

var widthDiv = ($("#container").width() / numberOfContainStep) - 10;
var widthP = (widthDiv / numberOfChoiceInStep) - 12;

function init() {

	for (var i = 0; i < numberOfContainStep; i++) {

		$("#tableaux").append("<div id='init" + i + "' class='tableauxInit'></div>");

		var array = [];

		for (var j = 0; j < numberOfChoiceInStep; j++) {
			var aleat = Math.floor((Math.random() * 100) + 1);

			array.push(aleat);

			$("#init" + i).append("<p id = '" + aleat + "'>" + aleat + "</p>");
		}

		listOfSteps.push(array);
	}
}

function getMin() {

	for (var i = 0; i < listOfSteps.length; i++) {

		$("#min").append("<div id='min" + i + "' class='minDiv'></div>");

		var min = null;

		for (var j = 0; j < listOfSteps[i].length; j++) {
			if (listOfSteps[i][j] <= min || min == null) {
				min = listOfSteps[i][j];
			}
		}

		$("#min" + i).append("<p id='" + min + "' class='minP'>" + min + "</p>");

		$("#init" + i + " #" + min).css("background", "green");

		listOfMinToSteps.push(min);
	}
}

function getMax() {

	for (var i = 0; i < listOfMinToSteps.length; i++) {
		if (listOfMinToSteps[i] >= max || max == null) {
			max = listOfMinToSteps[i];
		}
	}

	$("#max").append("<p>" + max + "</p>");
}

function resize() {
	widthDiv = ($("#container").width() / numberOfContainStep) - 10;
	widthP = (widthDiv / numberOfChoiceInStep) - 12;

	$(".tableauxInit").width(widthDiv);
	$(".tableauxInit p").width(widthP);
	$(".tableauxInit p").height(widthP);
	$(".tableauxInit p").css("line-height", widthP + "px");

	$(".minDiv").width(widthDiv);
	$(".minP").width(widthP);
	$(".minP").height(widthP);
	$(".minP").css("line-height", widthP + "px");
	$(".minP").css("margin-left", (widthDiv / 2) - (widthP / 2) - 1 + "px");

	$("#min #" + max).css("background", "green");

	$("#max p").width(widthP);
	$("#max p").height(widthP);
	$("#max p").css("line-height", widthP + "px");
	$("#max p").css("margin-left", ($("#container").width() / 2) - (widthP / 2) - 1 + "px");
}

function play(_numberOfContainStep, _numberOfChoiceInStep) {
	$("#max").empty();
	$("#min").empty();
	$("#tableaux").empty();

	numberOfContainStep = _numberOfContainStep;
	numberOfChoiceInStep = _numberOfChoiceInStep;


	listOfSteps = [];
	listOfMinToSteps = [];

	max = null;

	init();
	getMin();
	getMax();

	resize();
}

$(document).ready(function() {
	play(3,3);

	$("#charger").click(function() {
		play($("#numberOfArray").val(), $("#numberOfContainsInArray").val());
	})
})

$(window).resize(function() {
	resize();
})