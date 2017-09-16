var areaNyc = document.getElementById("area-nyc");
var areaJakarta = document.getElementById("area-jakarta");

var nycFigure = document.getElementsByClassName('nyc');
var jakartaFigure = document.getElementsByClassName('jakarta');

areaNyc.addEventListener("mouseenter", function () {		
	nycFigure[0].style.visibility = "visible";
});

areaNyc.addEventListener("mouseleave", function () {		
	nycFigure[0].style.visibility = "hidden";
});

areaJakarta.addEventListener("mouseenter", function () {
	jakartaFigure[0].style.visibility = "visible";
});

areaJakarta.addEventListener("mouseleave", function () {
	jakartaFigure[0].style.visibility = "hidden";
});