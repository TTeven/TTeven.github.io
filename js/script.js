$(function(){
$(".aboutus").css("display", "block");
$(".aboutus").fadeOut(0);
var currentpage = 1;
console.log("Ready");
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

 
