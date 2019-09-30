$(document).ready(function () {
    var windowHeight;

    init();
});

function init() {
    windowHeight = window.innerHeight;
    addEventHandlers();
    setParallax();
    toggleNavbar();
}

function addEventHandlers() {
    window.onscroll = function (e) {
        setTimeout(function () {
            $('.navbar').show();
        }, 50);
    }
}

function setParallax() {
    if ($('.rellax').length > 0) {
        var rellax = new Rellax('.rellax', {
            speed: -5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }    
}

function toggleNavbar() {
    var customNavbar = $("#customNavbar");

    customNavbar.on("click", "a", null, function () {
        customNavbar.collapse('hide');
        setTimeout(function () {
            $('.navbar').hide();
        }, 100);
    });
}