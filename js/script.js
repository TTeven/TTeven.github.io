//Preload music
var currenttheme;
var playing1 = false;
var playing2 = false;
var playing3 = false;
var song1 = new Audio('assets/music/GLU_preview.mp3');
var song2 = new Audio('assets/music/LEM_preview.mp3');
var song3 = new Audio('assets/music/SEV_preview.mp3');
//Set store Variables
var data = {"total":0,"rows":[]};
var totalCost = 0;

//Onload
$(function(){

init();

var currentpage = 1;

console.log("Ready");
  
//Footer fade effects
//Yes i understand this code is extremely inefficent - but it is the only way i have found to work so far
    
$('#button1').hover(function() { //Upon hovering over the button
    $("#bottext1").fadeTo(200, 1); //Light up the text below it
}, function() { //Upon leaving the button
    $("#bottext1").fadeTo(200, 0.40); //Dim the text again
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

//onclick events
$("#button1").click(function(){
    loadpage(currentpage, 1);  
    currentpage = 1;
});
    
$("#button2").click(function(){
    loadpage(currentpage, 2); 
    currentpage = 2;
});
$("#button3").click(function(){  
    loadpage(currentpage, 3);
    currentpage = 3;
});
$("#button4").click(function(){
    loadpage(currentpage, 4);
    currentpage = 4;
});
$("#button5").click(function(){  
    loadpage(currentpage, 5);
    $("#table").datagrid('loadData', data);
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
    
    data = {"total":0,"rows":[]}; //Set the array to default
    $("#table").datagrid('loadData', data); //Load it
    totalCost = 0; //Set the cost to default
    $('#total').html('Total: £'+totalCost); //Load it
    //Put it in local storage
    var shoppingcart = JSON.stringify(data);
    var cost = totalCost.toString();
    localStorage.setItem("cartstorage", shoppingcart);
    localStorage.setItem("totalcost", cost);
});
//Music Buttons
$("#play1").click(function(){
    //Check if the other buttons are playing and stop them
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
    //Then play the selected song
    if (!playing1)
    {
        playing1 = true;
        song1.volume = 0.25;
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
        song2.volume = 0.25;
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
        song3.volume = 0.25;
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
//Theme selector
$("#themeselect1").click(function(){
    settheme(1);
    //Save to local storage
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
//Footer button hover effects based on selected theme
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


//Allow store items to be draggable
$(".storeitem").draggable({
    helper: "clone",
    scroll: false,
    containment: "window",
    stop: function( event, ui ) {}
});
//On drop
$(".storebox#storedrop").droppable({
    accept: ".storeitem", //Only accept store items
    drop: function( event, ui ) {
        var dropped = ui.draggable; //Grab the dropped item
        var name = $(dropped).find("p.title").text(); //Grab the name
        var price = $(dropped).find("p.title").data('price'); //Grab the price
        addproduct(name, parseFloat(price)); //Add the product with the grabbed data
        console.log(name);
        console.log(price);
        
        
    }
    
});
    
$( ".storeitem" ).on( "dragstop", function( event, ui ) {console.log("dragging stopped");} );

    
});



function loadpage(page1, page2){ //page1 = page you want to exit; page2 = page you want to enter
    var fade = 200; //Set fade timer
    var mobile = false;
    //Mobile check
    if($(window).width() < 400 || $(document).width() < 400)
    {
        fade = 0;
        mobile = true;
    }
    if (page1 != page2)//If the page is different
    {
    //Fade out the current page
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
    //Fade in the new one
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
            if (mobile)
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
    //Preload images, and the table
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    $("#table").datagrid({
       singleselect:true 
    });

    img1.src = 'assets/atmosp.jpg';
    img2.src = 'assets/wlgyl.png';
    img3.src = 'assets/atmos_green.jpg';
    //Local storage checks
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
    //Dim the text onload
    $("#bottext1").fadeTo(100, 0.40);
    $("#bottext2").fadeTo(100, 0.40);
    $("#bottext3").fadeTo(100, 0.40);
    $("#bottext4").fadeTo(100, 0.40);
    $("#bottext5").fadeTo(100, 0.40);
    
}

function settheme(theme){
    switch(theme) //Depending on theme selected, change backgrounds and CSS
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
    function add(){ //Run through the array to check for duplicates
        for(var i=0; i<data.total; i++){
            var row = data.rows[i];
            if (row.name === name)
            {
                row.quantity += 1; //If so, add 1 to the quantity and exit the loop
                return;
            }
        }
        //Put the item in the array
        data.total += 1;
        data.rows.push({
            name: name,
            quantity: 1,
            price: price
        });
        
    }
    
    add();
    
    totalCost += price; //Increase cost
    
    //Save to local storage
    var shoppingcart = JSON.stringify(data);
    var cost = totalCost.toString();
    localStorage.setItem("cartstorage", shoppingcart);
    localStorage.setItem("totalcost", cost);
    
    $("#table").datagrid('loadData', data);
    $('#total').html('Total: £'+totalCost);
    
}



 
