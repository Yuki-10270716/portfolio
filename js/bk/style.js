$(function() {
  /*page animation*/
  $('body').removeClass('js-page-animation');
  $(function() {
      $('a:not([href^="#"]):not([mailto]):not([target])').on('click', function(e){
          e.preventDefault();
          url = $(this).attr('href');
          if (url !== '') {
              $('body').addClass('js-page-animation');
              setTimeout(function(){
                  window.location = url;
              }, 800);
          }
          return false;
      });
  });

  /*mouse stolker*/
  var cursor = $('.mouse-stolker__cursor'),
      follower = $('.mouse-stolker__follower'),
      cWidth = 8,
      fWidth = 32,
      mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

  $(document).on('mousemove', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      posX = e.pageX;
      posY = e.pageY;
      cursor.css({
        left: mouseX - (cWidth / 2),
        top: mouseY - (cWidth / 2)
      })
      follower .css({
        left: posX - (fWidth / 2),
        top: posY - (fWidth / 2)
      })
  });

  $('a').on({
    'mouseenter': function() {
      follower.addClass('is-active');
    },
    'mouseleave': function() {
      follower.removeClass('is-active');
    }
  });

  /*sticky header*/
  $('.header').each(function () {
    var $window = $(window),
        $header = $(this),

    headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
        if ($window.scrollTop() > headerOffsetTop) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    $window.trigger('scroll');

    });

  /*mv animation*/
  $('.mv').addClass('is-animate');

  /*scroll animation*/
  $(window).scroll(function (){
    $('.js-animate').each(function(){
      var elementPosition = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();

      if (scroll > elementPosition - windowHeight + 100){
        $(this).addClass('is-animate');
      }
    });
  });

  /*smooth scroll*/
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;

    $('html, body').animate({scrollTop:position - 100}, speed, "swing");
    return false;
  });

  /* hamburgermenu*/
  $('#js-btn-hamburger').click(function () {
    $('body').toggleClass('is-menu-open');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });

  /* hamburgermenu内でanchorlinkをクリックした時にhamburgermenuが閉じるようにする */
  $('a[href^="#contact"]').on('click', function () {
    $('body').removeClass('is-menu-open');
    $('#js-btn-hamburger').attr('aria-expanded', false);
  });
});