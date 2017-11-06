function setClassList(jQueryObject, desiredClasses)
{
    var numberOfElements = jQueryObject.length;
    var currentClasses = [];
    
    for(var i = 0; i < currentClasses.length; i++)
    {
        jQueryObject.removeClass(currentClasses[i]);
    }
    
    for(var i = 0; i < desiredClasses.length; i++)
    {
        jQueryObject.addClass(desiredClasses[i]);
    }
    
    return jQueryObject;
}