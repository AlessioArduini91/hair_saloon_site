$(document).ready(function () {

    var windowHeight;
    var customNavbar = $("#customNavbar");
    

    init();
    
    customNavbar.on("click", "a", null, function () {
        customNavbar.collapse('hide'); 
        setTimeout(function() {
            $('.navbar').hide();   
        }, 100);
    });

});

function init() {
    var introBg = $(".intro-container-bg");
    windowHeight = window.innerHeight;
    addEventHandlers();
    setBackgroundParallax(introBg);
}

function addEventHandlers() {
    window.onscroll = function (e) {  
        setTimeout(function() {
            $('.navbar').show();
        }, 50);
    } 
}

function setBackgroundParallax(image) {
    new simpleParallax(image[0], {
        scale: 2.0,
        overflow: true
    });
}
