window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });

  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
}); 

function fadeIn() {
  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
  $('.fadeTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fade');
    } else {
      $(this).removeClass('fade');
    }
  });
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });
}
$(window).scroll(function () {
  fadeIn();
});
$('.lp_clock').slick({
  autoplaySpeed: 2000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick_prev"></div>',
  nextArrow: '<div class="slick_next"></div>'
})