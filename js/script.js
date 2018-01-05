var currenttheme = 1;
$(function(){

init();
var currentpage = 1;

console.log("Ready");
//Yes i understand this code is extremely inefficent - but it is the only way i have found to work so far
$("#button1").mouseenter(function(){
   $("#bottext1").fadeTo(100, 1); 
});
$("#button1").mouseleave(function(){
   $("#bottext1").fadeTo(100, 0.10); 
});
    
$("#button2").mouseenter(function(){
   $("#bottext2").fadeTo(100, 1); 
});
$("#button2").mouseleave(function(){
   $("#bottext2").fadeTo(100, 0.10); 
});
    
$("#button3").mouseenter(function(){
   $("#bottext3").fadeTo(100, 1); 
});
$("#button3").mouseleave(function(){
   $("#bottext3").fadeTo(100, 0.10); 
});
    
$("#button4").mouseenter(function(){
   $("#bottext4").fadeTo(100, 1); 
});
$("#button4").mouseleave(function(){
   $("#bottext4").fadeTo(100, 0.10); 
});
    
$("#button5").mouseenter(function(){
   $("#bottext5").fadeTo(100, 1); 
});
$("#button5").mouseleave(function(){
   $("#bottext5").fadeTo(100, 0.10); 
});
    
$("#button1").click(function(){

    loadpage(currentpage, 1);
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 1;
});
    
$("#button2").click(function(){

    loadpage(currentpage, 2);

    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 2;
});
    
$("#button4").click(function(){
    
    loadpage(currentpage, 4);
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 4;
});
    
$("#themeselect1").click(function(){
    settheme(1);
    localStorage.setItem("themestore", "1");
    currenttheme = 1;
});
    
$("#themeselect2").click(function(){
    settheme(2);
    localStorage.setItem("themestore", "2");
    currenttheme = 2;
});
$("#themeselect3").click(function(){
    settheme(3);
    localStorage.setItem("themestore", "3");
    currenttheme = 3;
});
    
$('.circlebutton').hover(function() {
    switch(currenttheme){
        case 1:
            $(this).css("background-color", "lightgray");
        break;
        case 2:
            $(this).css("background-color", "#fff419");
        break;
        case 3:
            $(this).css("background-color", "#1cff5f");
    }
        

}, function() {
    
    switch(currenttheme){
        case 1:
            $(this).css("background-color", "darkgray");
        break;
        case 2:
            $(this).css("background-color", "#fffa8e");
        break;
        
        case 3:
            $(this).css("background-color", "#72ff9c");
    }
    
});

});

function loadpage(page1, page2){
    if (page1 != page2)
    {
    switch(page1){
        case 1:
            $(".homepage").fadeOut("slow");
            break;
        case 2:
            $(".aboutus").fadeOut("slow");
            break;
        case 3:
            
            break;
        case 4:
            $(".themes").fadeOut("slow");
            break;
        case 5:
    }
    switch(page2){
        case 1:
            $(".homepage").fadeIn("slow");
            break;
        case 2:
            $(".aboutus").fadeIn("slow");
            break;
        case 3:
            
            break;
        case 4:
            $(".themes").fadeIn("slow");
            break;
        case 5:
    }
    }
            
}

function init(){
    
    if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    currenttheme = parseInt(localStorage.getItem("themestore"));
    settheme(currenttheme);
    } else {
    console.log("This browser does not support local storage!")
    }
    $(".aboutus").css("display", "block");
    $(".aboutus").fadeOut(0);
    $(".themes").css("display", "inline");
    $(".themes").fadeOut(0);
    $("#bottext1").fadeTo(100, 0.10);
    $("#bottext2").fadeTo(100, 0.10);
    $("#bottext3").fadeTo(100, 0.10);
    $("#bottext4").fadeTo(100, 0.10);
    $("#bottext5").fadeTo(100, 0.10);
}

function settheme(theme){
    switch(theme)
    {
        case 1:
            $("body").css("background", 'url("../assets/atmosp.jpg") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "darkgray");
            $(".blur").css("background", 'url("../assets/atmosp.jpg") no-repeat center center fixed');
            break;
        case 2:
            $("body").css("background", 'url("../assets/wlgyl.png") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "#fffa8e");
            $(".blur").css("background", 'url("../assets/wlgyl.png") no-repeat center center fixed');
            break;
        case 3:
            $("body").css("background", 'url("../assets/atmos_green.jpg") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "#72ff9c");
            $(".blur").css("background", 'url("../assets/atmos_green.jpg") no-repeat center center fixed');
            
    }
}



 
