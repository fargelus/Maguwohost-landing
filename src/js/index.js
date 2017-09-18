var areaNyc = document.getElementById("area-nyc");
var areaJakarta = document.getElementById("area-jakarta");

var nycFigure = document.getElementsByClassName('nyc');
var jakartaFigure = document.getElementsByClassName('jakarta');

areaNyc.addEventListener("mouseenter", function () {		
	nycFigure[0].style.opacity = "1";
});

areaNyc.addEventListener("mouseleave", function () {		
	nycFigure[0].style.opacity = "0";
});

areaJakarta.addEventListener("mouseenter", function () {
	jakartaFigure[0].style.opacity = "1";
});

areaJakarta.addEventListener("mouseleave", function () {
	jakartaFigure[0].style.opacity = "0";
});