/*
uses js bootstrap
$(document).ready(function(){
	$('.header').height($(window).height());
})*/
/*plan js for sstretching eement across screen*/
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
