var currenttheme;
$(function(){

init();
var currentpage = 1;

console.log("Ready");
//Yes i understand this code is extremely inefficent - but it is the only way i have found to work so far
    
$('#button1').hover(function() {       
    $("#bottext1").fadeTo(200, 1); 
}, function() {
    $("#bottext1").fadeTo(200, 0.10);     
});
  
$('#button2').hover(function() {       
    $("#bottext2").fadeTo(200, 1); 
}, function() {
    $("#bottext2").fadeTo(200, 0.10);     
});
    
$('#button3').hover(function() {       
    $("#bottext3").fadeTo(200, 1); 
}, function() {
    $("#bottext3").fadeTo(200, 0.10);     
});
    
$('#button4').hover(function() {       
    $("#bottext4").fadeTo(200, 1); 
}, function() {
    $("#bottext4").fadeTo(200, 0.10);     
});
    
$('#button5').hover(function() {       
    $("#bottext5").fadeTo(200, 1); 
}, function() {
    $("#bottext5").fadeTo(200, 0.10);     
});

/*$(".musicpreview#1").hover(function(){
    $("#1#musicplayer").css("display", "inline");
    
}, function(){
    $("#1#musicplayer").css("display", "none");
    
});*/
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
            $(this).css("background-color", "#ff6b6b");
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
            $(this).css("background-color", "#ff8e8e");
        break;
        
        case 3:
            $(this).css("background-color", "#72ff9c");
    }
    
});

});

function loadpage(page1, page2){    
    var fade = 200;
    var mobile = false;
    if($(window).width() < 400)
    {
        fade = 0;
        mobile = false;
    }
    if (page1 != page2)
    {
    switch(page1){
        case 1:
            $(".homepage").fadeOut(fade);
            break;
        case 2:
            $(".aboutus").fadeOut(fade);
            break;
        case 3:
            
            break;
        case 4:
            $(".themes").fadeOut(fade);
            break;
        case 5:
    }
    switch(page2){
        case 1:
            $(".homepage").fadeIn(fade);
            $(".header").fadeOut(fade);
            break;
        case 2:
            $(".aboutus").fadeIn(fade);
            break;
        case 3:
            
            break;
        case 4:
            $(".themes").fadeIn(fade);
            if (!mobile)
            {
                $(".themes").css("display", "inline");
            }
            break;
        case 5:
    }
        if (page2 != 1 && $(window).width() < 1440)
        {
            $(".header").fadeIn(fade);
            //$(".header").css("display", "block");
        }
    }
            
}

function init(){
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();

    img1.src = 'assets/atmosp.jpg';
    img2.src = 'assets/wlgyl.png';
    img3.src = 'assets/atmos_green.jpg';
    if (typeof(Storage) !== "undefined") {
    currenttheme = parseInt(localStorage.getItem("themestore"));
    if (localStorage.getItem("themestore") === null)
    {
        settheme(1);
        currenttheme = 1;
    }
    else
    {
        settheme(currenttheme);
    }
    } else {
    console.log("This browser does not support local storage!");
    }
    /*$(".aboutus").css("display", "block");
    $(".aboutus").fadeOut(0);
    $(".themes").css("display", "inline");
    $(".themes").fadeOut(0)*/
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
            $("body").css("background", 'url("assets/atmosp.jpg") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "darkgray");
            $(".header").css("background-color", "black");
            $(".header").css("color", "white");
            $(".header").css("border", "5px solid white");
            $(".blur").css("background", 'url("assets/atmosp.jpg") no-repeat center center fixed');
            break;
        case 2:
            $("body").css("background", 'url("assets/wlgyl.png") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "#ff8e8e");
            $(".header").css("background-color", "black");
            $(".header").css("color", "white");
            $(".header").css("border", "5px solid white");
            $(".blur").css("background", 'url("assets/wlgyl.png") no-repeat center center fixed');
            break;
        case 3:
            $("body").css("background", 'url("assets/atmos_green.jpg") no-repeat center center fixed');
            $(".circlebutton").css("background-color", "#72ff9c");
            $(".header").css("background-color", "#72ff9c");
            $(".header").css("color", "black");
            $(".header").css("border", "5px solid black");
            $(".blur").css("background", 'url("assets/atmos_green.jpg") no-repeat center center fixed');
            
    }
}



 
