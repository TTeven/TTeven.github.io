$(function(){
$(".aboutus").css("display", "block");
$(".aboutus").fadeOut(0);
$(".themes").css("display", "inline");
$(".themes").fadeOut(0);
$("#bottext1").fadeTo(100, 0.10);
$("#bottext2").fadeTo(100, 0.10);
$("#bottext3").fadeTo(100, 0.10);
$("#bottext4").fadeTo(100, 0.10);
$("#bottext5").fadeTo(100, 0.10);
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
    switch(currentpage){
        case 1:
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
    $(".homepage").fadeIn("slow");
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 1;
});
$("#button2").click(function(){
    switch(currentpage){
        case 1:
            $(".homepage").fadeOut("slow");
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            $(".themes").fadeOut("slow");
            break;
        case 5:

    }
    $(".aboutus").fadeIn("slow");
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 2;
});
$("#button4").click(function(){
    switch(currentpage){
        case 1:
            $(".homepage").fadeOut("slow");
            break;
        case 2:
            $(".aboutus").fadeOut("slow");
            break;
        case 3:
            
            break;
        case 4:
            break;
        case 5:

    }
    $(".themes").fadeIn("slow");
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 4;
});
    
$("#themeselect2").click(function(){
   $("body").css("background", 'url("../assets/wlgyl.png") no-repeat center center fixed');
   $(".blur").css("background", 'url("../assets/wlgyl.png") no-repeat center center fixed');
});
});

 
