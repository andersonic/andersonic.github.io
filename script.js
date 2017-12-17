var allEntranceRelatedClasses = "bounceIn fadeIn flipInY lightSpeedIn rotateInDownLeft slideInRight zoomIn rollIn";

function selectEntrance()
{
    var BOUNCE_IN = 0;
    var FADE_IN = 1;
    var FLIP_IN_Y = 2;
    var LIGHT_SPEED_IN = 3;
    var ROTATE_IN_DOWN_LEFT = 4;
    var SLIDE_IN_RIGHT = 5;
    var ZOOM_IN = 6;
    var ROLL_IN = 7;
    
    var numberOfChoices = 8;
    
    var exit = Math.floor(Math.random()*numberOfChoices);
    
    if(exit==BOUNCE_IN)
    {
        return "bounceIn"
    }
    else if(exit == FADE_IN)
    {
        return "fadeIn";
    }
    else if(exit == FLIP_IN_Y)
    {
        return "flipInY";
    }
    else if(exit == LIGHT_SPEED_IN)
    {
        return "lightSpeedIn";
    }
    else if(exit == ROTATE_IN_DOWN_LEFT)
    {
        return "rotateInDownLeft";
    }
    else if (exit == SLIDE_IN_RIGHT)
    {
        return "slideInRight";
    }
    else if(exit == ZOOM_IN)
    {
        return "zoomIn";
    }
    else if(exit == ROLL_IN)
    {
        return "rollIn";
    }
    else
    {
        return "bounceIn";
    }
}

function show(sectionToShow)
{
    $(".section").removeClass(allEntranceRelatedClasses);
    $(".section").addClass("hidden");
    $("#" + sectionToShow).removeClass("hidden");
    $("#" + sectionToShow).addClass(selectEntrance());
}

function removeDefault()
{
    $("#default").addClass("slideOutLeft");
    $("#default").addClass("hidden");
    $("#profile").removeClass("hidden");
    $("#profile").addClass(selectEntrance());
}