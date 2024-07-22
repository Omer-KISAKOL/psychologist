$(document).ready(function(){
    $('#owlCarousel').owlCarousel({
        loop:true,
        items:3,
        margin:10,
        nav:false,
        mouseDrag:true,
        dots:true,
        center: false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
        }
    });});
