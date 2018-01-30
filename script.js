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


function test()
{
	alert("hello");
}