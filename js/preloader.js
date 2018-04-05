var config = {}; 
config.window = $(window);
config.wWidth = config.window.width();
config.wHeight = config.window.height();

config.t = 1;
config.t2 = 3;
config.e = Power2.easeOut;
config.e2 = Power2.easeIn;

config.pageTrans = new TimelineMax({repeat:-1, repeatDelay: 0, yoyo:true});

config.pageTrans
.fromTo('.white',config.t, { x: config.wWidth/2 }, { x: 0, ease: config.e}, "f")
.fromTo('.grey',config.t, { x: -config.wWidth/2 }, { x: 0, ease: config.e}, "f")
.fromTo('.black',config.t, { y: -config.wHeight }, { y: 0, ease: config.e}, "f")
.fromTo('.gold',config.t, { y: config.wHeight }, { y: 0, ease: config.e}, "f")
.fromTo('.grey', config.t2, { y: 0 }, { y: -config.wHeight/2, ease: config.e2}, "f+=.8")
.fromTo('.white', config.t2, { y: 0 }, { y: config.wHeight/2, ease: config.e2}, "f+=.8")
.fromTo('#pagetransition', 2.5, { rotation: 0 }, { rotation: 10, ease: config.e}, "f")
.fromTo('.vic-gb', .8, { rotation: 0, scale: 0 }, { rotation: -10, scale: 1, ease: Back.easeOut}, "f+=.6")





 var preloader = document.getElementById("preloader");
    function fadeOutnojquery(el){el.style.opacity = 1;
      var interpreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <=0.05){ 
      clearInterval(interpreloader);
      preloader.style.display = "none";
    }},15);
    };
    window.onload = function(){setTimeout(function(){fadeOutnojquery(preloader);
    }, 500); // Время работы прелоадера ms
    };