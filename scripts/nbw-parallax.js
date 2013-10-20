/*
Demo: Despiration Tutorial Parallax Demo
Author: Elias Ghosn - Despiration.com
Author URL: http://www.despiration.com/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Despiration.com simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.despiration.com/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	//var $firstBG = $('body');
	var header = $(".header");
	var content = $("#content");
	var lightCenter = $(".lightCenter");
	var lightRight = $(".lightRight");
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#second').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	function newPosX(y, windowHeight, pos, adjuster, inertia){
		return (-((windowHeight + pos) - adjuster) * inertia)  + "px " + y + "% ";
	}
	
	function newPosXNeg(y, windowHeight, pos, adjuster, inertia){
		return (((windowHeight + pos) - adjuster) * inertia)  + "px " + y + "% ";
	}
	
	function newMarg(windowHeight, pos, adjuster, inertia){
		return adjuster + pos - (pos * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

			//call the newPos function and change the background position
			//$firstBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 720, 0)}); 
			//call the newPos function and change the second background position
			
			
			header.css({'top': newMarg(windowHeight, pos, 0, 1)});
			//content.css({'top': newMarg(windowHeight, pos, 150, .42)});
			
			//crowd.css({'backgroundPosition': newPos(0, windowHeight, pos, 1550, .2)});
			
			
			lightCenter.css({'backgroundPosition': newPosX(0, windowHeight, pos, 1550, 2.3)});
			lightRight.css({'backgroundPosition': newPosXNeg(15, windowHeight, pos, 960, 2.3)});
			//content.html("<p>"+lightRight+"</p>");
			
			//newPosX(10, windowHeight, pos, 1000, 0.8)
			
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});