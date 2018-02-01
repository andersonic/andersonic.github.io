var int_timers;

$( document ).ready(function(){
	int_timers = shake();
});

function show(sectionToShow){
	$("#" + sectionToShow).show()
    $("#" + sectionToShow).addClass("slideInRight");
}

function hide(sectionToHide){
    $("#" + sectionToHide).addClass("slideOutRight");
	window.setTimeout(function(){
		$("#" + sectionToHide).hide();
		$("#" + sectionToHide).removeClass("slideOutRight slideInRight");
	}, 1000);
	
}

function show_slider(){
	$(".slider").show();
	window.setTimeout(function(){
		$(".slider").hide();
	}, 1300)
}

function show_page(){
	clearInterval(int_timers[0]);
	clearInterval(int_timers[1]);
	$("#bottom").addClass("slideOutDown");
	$("#top").addClass("slideOutUp");
	setTimeout(function(){
		$("#main").show();
	}, 1500);
}

function shake(){
	var int_1 = setInterval(function(){
		$("#picture-border").addClass("shake");
	}, 2500);
	
		
	var int_2 = setInterval(function(){
		$("#picture-border").removeClass("shake");
	}, 3450);
	
	return [int_1, int_2];
}

function test()
{
	alert("hello");
}