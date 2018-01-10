var currenttheme;
var playing1 = false;
var playing2 = false;
var playing3 = false;
var song1 = new Audio('assets/music/GLU_preview.mp3');
var song2 = new Audio('assets/music/LEM_preview.mp3');
var song3 = new Audio('assets/music/SEV_preview.mp3');

var data = {"total":0,"rows":[]};
var totalCost = 0;

$(function(){

init();
var currentpage = 1;
console.log("Ready");
//Yes i understand this code is extremely inefficent - but it is the only way i have found to work so far
    
$('#button1').hover(function() {       
    $("#bottext1").fadeTo(200, 1); 
}, function() {
    $("#bottext1").fadeTo(200, 0.40);     
});
  
$('#button2').hover(function() {       
    $("#bottext2").fadeTo(200, 1); 
}, function() {
    $("#bottext2").fadeTo(200, 0.40);     
});
    
$('#button3').hover(function() {       
    $("#bottext3").fadeTo(200, 1); 
}, function() {
    $("#bottext3").fadeTo(200, 0.40);     
});
    
$('#button4').hover(function() {       
    $("#bottext4").fadeTo(200, 1); 
}, function() {
    $("#bottext4").fadeTo(200, 0.40);     
});
    
$('#button5').hover(function() {       
    $("#bottext5").fadeTo(200, 1); 
}, function() {
    $("#bottext5").fadeTo(200, 0.40);     
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
$("#button3").click(function(){
    
    loadpage(currentpage, 3);
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 3;
});
$("#button4").click(function(){
    
    loadpage(currentpage, 4);
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 4;
});
$("#button5").click(function(){
    
    loadpage(currentpage, 5);
    $("#table").datagrid('loadData', data);
    //console.log($(".aboutus").css("display"));
    
    
    currentpage = 5;
});

$("#demobutton").click(function(){
    $(".centerhome").fadeOut(100);
    $(".demovideo").fadeIn(100);
});
$("#backbutton").click(function(){
    $(".centerhome").fadeIn(100);
    $(".demovideo").fadeOut(100);
});

$("#reset").click(function(){
    
    data = {"total":0,"rows":[]};
    $("#table").datagrid('loadData', data);
    totalCost = 0;
    $('#total').html('Total: £'+totalCost);
    var shoppingcart = JSON.stringify(data);
    var cost = totalCost.toString();
    localStorage.setItem("cartstorage", shoppingcart);
    localStorage.setItem("totalcost", cost);
});
    
$("#play1").click(function(){
    if(playing2)
    {
        playing2 = false;
        $("#play2").html("Play");
        song2.pause();
    }
    if (playing3)
    {
        playing3 = false;
        $("#play3").html("Play");
        song3.pause();
    }
    if (!playing1)
    {
        playing1 = true;
        song1.volume = 0.05;
        song1.play();
        $("#play1").html("Stop");
        console.log("playing song 1");
    }
    else
    {
        playing1 = false;
        song1.pause();
        $("#play1").html("Play");
    }
    
});

$("#play2").click(function(){
    if(playing1)
    {
        playing1 = false;
        $("#play1").html("Play");
        song1.pause();
    }
    if (playing3)
    {
        playing3 = false;
        $("#play3").html("Play");
        song3.pause();
    }
    if (!playing2)
    {
        playing2 = true;
        song2.volume = 0.05;
        song2.play();
        $("#play2").html("Stop");
        console.log("playing song 2");
    }
    else
    {
        playing2 = false;
        song2.pause();
        $("#play2").html("Play");
    }
    
});
    
$("#play3").click(function(){
    if(playing1)
    {
        playing1 = false;
        $("#play1").html("Play");
        song1.pause();
    }
    if (playing2)
    {
        playing2 = false;
        $("#play2").html("Play");
        song2.pause();
    }
    if (!playing3)
    {
        playing3 = true;
        song3.volume = 0.05;
        song3.play();
        $("#play3").html("Stop");
        console.log("playing song 3");
    }
    else
    {
        playing3 = false;
        song3.pause();
        $("#play3").html("Play");
    }
    
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


    
$(".storeitem").draggable({
    helper: "clone",
    scroll: false,
    containment: "window",
    stop: function( event, ui ) {}
});
    
$(".storebox#storedrop").droppable({
    accept: ".storeitem",
    drop: function( event, ui ) {
        var dropped = ui.draggable;
        var name = $(dropped).find("p.title").text();
        var price = $(dropped).find("p.title").data('price');
        addproduct(name, parseFloat(price));
        console.log(name);
        console.log(price);
        
        
    }
    
});
    
/*var helper = $( ".storeitem" ).draggable( "option", "helper" );
var scroll = $( ".storeitem" ).draggable( "option", "scroll" );
var containment = $("body").draggable( "option", "containment" );*/
    
$( ".storeitem" ).on( "dragstop", function( event, ui ) {console.log("dragging stopped");} );

    
});



function loadpage(page1, page2){    
    var fade = 200;
    var mobile = false;
    if($(window).width() < 400 || $(document).width() < 400)
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
            $(".tours").fadeOut(fade);
            break;
        case 4:
            $(".themes").fadeOut(fade);
            break;
        case 5:
            $(".store").fadeOut(fade);
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
            $(".tours").fadeIn(fade);
            break;
        case 4:
            $(".themes").fadeIn(fade);
            if (!mobile)
            {
                $(".themes").css("display", "inline");
            }
            break;
        case 5:
            $(".store").fadeIn(fade);
            $('#table').datagrid('reload');  
    }
        if (page2 != 1 && ($(window).width() > 1441 || $(document).width() > 1441))
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
    $("#table").datagrid({
       singleselect:true 
    });

    img1.src = 'assets/atmosp.jpg';
    img2.src = 'assets/wlgyl.png';
    img3.src = 'assets/atmos_green.jpg';
    if (typeof(Storage) !== "undefined") {
    currenttheme = parseInt(localStorage.getItem("themestore"));
    shoppingcart = localStorage.getItem("cartstorage");
    if (shoppingcart != null)
    {
        data = JSON.parse(shoppingcart);
        var temp = parseInt(localStorage.getItem("totalcost"));
        totalCost = temp;
        $('#total').html('Total: £'+totalCost);
        
        $("#table").datagrid('loadData', data);
    }
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
    $("#bottext1").fadeTo(100, 0.40);
    $("#bottext2").fadeTo(100, 0.40);
    $("#bottext3").fadeTo(100, 0.40);
    $("#bottext4").fadeTo(100, 0.40);
    $("#bottext5").fadeTo(100, 0.40);
    
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

function addproduct(name, price){
    function add(){
        for(var i=0; i<data.total; i++){
            var row = data.rows[i];
            if (row.name === name)
            {
                row.quantity += 1;
                return;
            }
        }
        data.total += 1;
        data.rows.push({
            name: name,
            quantity: 1,
            price: price
        });
        
    }
    
    add();
    
    totalCost += price;
    
    var shoppingcart = JSON.stringify(data);
    var cost = totalCost.toString();
    localStorage.setItem("cartstorage", shoppingcart);
    localStorage.setItem("totalcost", cost);
    
    $("#table").datagrid('loadData', data);
    $('#total').html('Total: £'+totalCost);
    
}



 
