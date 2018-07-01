var int_timers;
var sections = ["#about", "#experience", "#projects", "#skills", "#awards", "#favorites"]
var projects = ["#pkmn", "#bds", "#cte", "#tower", "#humv", "#whack"]
var currentProjectIndex = 0
var slidingClasses = "slideInLeft slideInRight slideOutLeft slideOutRight"

$( document ).ready(function(){
	int_timers = shake();
});

function shake(){
	var int_1 = setInterval(function(){
		$("#border").addClass("shake");
	}, 2500);
	
		
	var int_2 = setInterval(function(){
		$("#border").removeClass("shake");
	}, 3450);
	
	return [int_1, int_2];
}

function showPage(){
	clearInterval(int_timers[0]);
	clearInterval(int_timers[1]);
	$("#bottom").addClass("slideOutDown");
	$("#top").addClass("slideOutUp");
	$("#border").addClass("shrink");
	setTimeout(function(){
		$("#border-line-top").hide();
		$("#navbar").show();
		$("#about").show();
	}, 1500);
}

function showSection(section){
	for(var i = 0; i < sections.length; i++){
		$(sections[i]).hide();
	}
	if (section === "#projects"){
		$(projects[currentProjectIndex]).css("visibility","visible")
	}
	$(section).show();
}

function nextProject(){
	var temp = currentProjectIndex + 1;
	if(temp >= projects.length) {
		temp = temp - projects.length;
	}
	
	$(projects[currentProjectIndex]).removeClass(slidingClasses)
	$(projects[currentProjectIndex]).addClass("slideOutLeft")
	
	$(projects[temp]).removeClass(slidingClasses)
	$(projects[temp]).addClass("slideInRight")
	
	$(projects[temp]).css("visibility","visible");

	currentProjectIndex = temp;
}

function previousProject(){
	var temp = currentProjectIndex - 1;
	if(temp < 0) {
		temp = projects.length + temp;
	}
	
	$(projects[currentProjectIndex]).removeClass(slidingClasses)
	$(projects[currentProjectIndex]).addClass("slideOutRight")
	
	$(projects[temp]).removeClass(slidingClasses)
	$(projects[temp]).addClass("slideInLeft")
	
	setTimeout(function(){
		$(projects[temp]).css("visibility","visible");
	}, 1000);
	
	currentProjectIndex = temp;
}