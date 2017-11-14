$(document).ready(function(){
    /*Sticky navigation after section features*/
    $(".js--section-features").waypoint(function(direction){//direction nam pove ali uporabnik , skrola gor ali dol
        if(direction == "down"){//če se uporabnik premakne dol doda razred sticky v nav
            $("nav").addClass("sticky-nav");    
        }else{
         $("nav").removeClass("sticky-nav");    
        }
    },{
        offset: "60px"
    });
    
    /*Scroll buttons*/
    $(".js--scroll-to-plans").click(function(){
        $("html, body").animate({scrollTop: $(".section-plans").offset().top},1000);//1000 milisekund, ki je 1 sekunda.. ko kliknemo na class se izvede animacija, ki scrola na top oz. začetek označenega razreda z hitrostjo 1 sekunde
    });
    
    $(".js--scroll-to-start").click(function(){
        $("html, body").animate({scrollTop: $(".section-features").offset().top},1000);
    });
    
    
    
  /*  $("h1").click(function(){//izberemo h1 el. in uporabimo click funkcijo
        $(this).css("background-color","#ff0000");// this izbere h11 el. ki smo ga prvo izbrali in dodeli lastnost barvo rdečo..
    })*/
    
    /*Navigation scroll*/
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
    /*Animations on scroll*/
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeIn");
    },{
        offset: "50%"
    });
    
$(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeInLeft");
    },{
        offset: "50%"
    });
    
    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    },{
        offset: "50%"
    });
    
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    },{
        offset: "50%"
    });
    
    /*Mobile navigation*/
    $(".js--nav-icon").click(function(){
        var nav = $(".js--main-nav");
        var icon = $(".mobile-nav-icon i"); 
        nav.slideToggle(200);
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }else{
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
        ion-close-round
    })
    /*Maps*/ 
    

    
    var map = new GMaps({
      div: '.map',
      lat: 38.7436057,
      lng: -9.2302432,
      zoom: 12
});
    
  map.addMarker({
      lat: 38.7436057,
      lng: -9.2302432,
      title: 'Lima',
      infoWindow: {
        content: '<p>Our Lisbon HQ</p>'
      }
});
    
});

