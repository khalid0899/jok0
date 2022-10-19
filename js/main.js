$( document ).ready(function() {
    //Owl Carousel
    $('.khalid').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
   

    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        autoplay:true,
        // autoplayTimeout:1000,
        dots:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });

    $('.team').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    $('.brand').owlCarousel({
        loop:true,
        margin:90,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $(function() {
        $('.chart').easyPieChart({
            scaleColor: false,
            barColor:'#8cdfe2',
            trackColor:'#fff',
            lineCap:'square',
            size:'240',
            lineWidth:'8',
        });
    });
   

    
    });
