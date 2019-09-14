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
    windowHeight = window.innerHeight;
    addEventHandlers();
}

function addEventHandlers() {
    window.onscroll = function (e) {  
        setTimeout(function() {
            $('.navbar').show();
        }, 50);
    } 
}
