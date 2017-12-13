$(function(){
$(".aboutus").css("display", "block");
$(".aboutus").fadeOut(0);
$("#bottext1").fadeTo(100, 0.00);
$("#bottext2").fadeTo(100, 0.00);
$("#bottext3").fadeTo(100, 0.00);
$("#bottext4").fadeTo(100, 0.00);
$("#bottext5").fadeTo(100, 0.00);
var currentpage = 1;
console.log("Ready");
//Yes i understand this code is extremely inefficent - but it is the only way i have found to work so far
$("#button1").mouseenter(function(){
   $("#bottext1").fadeTo(100, 1); 
});
$("#button1").mouseleave(function(){
   $("#bottext1").fadeTo(100, 0.00); 
});
$("#button2").mouseenter(function(){
   $("#bottext2").fadeTo(100, 1); 
});
$("#button2").mouseleave(function(){
   $("#bottext2").fadeTo(100, 0.00); 
});
$("#button3").mouseenter(function(){
   $("#bottext3").fadeTo(100, 1); 
});
$("#button3").mouseleave(function(){
   $("#bottext3").fadeTo(100, 0.00); 
});
$("#button4").mouseenter(function(){
   $("#bottext4").fadeTo(100, 1); 
});
$("#button4").mouseleave(function(){
   $("#bottext4").fadeTo(100, 0.00); 
});
$("#button5").mouseenter(function(){
   $("#bottext5").fadeTo(100, 1); 
});
$("#button5").mouseleave(function(){
   $("#bottext5").fadeTo(100, 0.00); 
});
$("#button1").click(function(){
                    
    if (currentpage === 1)
    {
        //:thinking emoji:
    }
    if (currentpage === 2)
    {
        $(".aboutus").fadeOut("slow");
    }
    if (currentpage === 3)
    {
        
    }
    if (currentpage === 4)
    {
        
    }
    $(".homepage").fadeIn("slow");
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 1;
});
$("#button2").click(function(){
    if (currentpage === 1)
    {
        $(".homepage").fadeOut("slow");
    }
    if (currentpage === 2)
    {
        //:thinking emoji:
    }
    if (currentpage === 3)
    {
        
    }
    if (currentpage === 4)
    {
        
    }
    $(".aboutus").fadeIn("slow");
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 2;
});
    
});

 
