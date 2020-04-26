document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');

  /*page animation*/
  var a = document.querySelectorAll('a:not([href^="#"]):not([mailto]):not([target])');

  body.classList.remove('js-page-animation');
  for(var i = 0;i < a.length;i++) {
    a[i].addEventListener('click', function(e) {
        e.preventDefault();
        var url = this.getAttribute('href');
        if (url !== '') {
            body.classList.add('js-page-animation');
            setTimeout(function() {
                window.location = url;
            }, 800);
        }
        return false;
    });
  }

  /*mv animation*/
  var mv = document.querySelector('.mv');

  mv.classList.add('is-animate');

  /*mouse stolker*/
  var follower = document.getElementById('js-mouse-stolker__follower'),
      stalker = document.getElementById('js-mouse-stolker__cursor'),
      linkElement = document.querySelectorAll('a'),
      hovFlag = false;

  window.addEventListener('mousemove', function (e) {
      if (!hovFlag) {
        follower.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      }
  });

  for (var i = 0; i < linkElement.length; i++) {
    linkElement[i].addEventListener('mouseover', function (e) {
        var rect = e.target.getBoundingClientRect(),
            posX = rect.left + (rect.width / 2),
            posY = rect.top + (rect.height / 2);

        hovFlag = true;
        follower.classList.add('is-active');
        stalker.classList.add('is-active');
        follower.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
      });

      linkElement[i].addEventListener('mouseout', function (e) {
          hovFlag = false;
          follower.classList.remove('is-active');
          stalker.classList.remove('is-active');
      });
  }

  window.addEventListener('scroll', function() {
    /*sticky header*/
    var header = document.querySelector('.header'),
        headerOffsetTop = header.getBoundingClientRect().top;

    if (window.pageYOffset > headerOffsetTop) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    /*scroll animation*/
    var scrollAnimationElm = document.getElementsByClassName('js-animate');
    for(var i = 0; i < scrollAnimationElm.length; i++) {
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + 200) {
        scrollAnimationElm[i].classList.add('is-animate');
      }
    }
  });

  /* hamburgermenu*/
  var btn = document.getElementById('js-btn-hamburger');

  btn.addEventListener('click', function() {
    body.classList.toggle('is-menu-open');
    if (btn.getAttribute('aria-expanded') == 'false') {
      this.setAttribute('aria-expanded', true);
    } else {
      this.setAttribute('aria-expanded', false);
    }
  });

  /* hamburgermenu内でanchorlinkをクリックした時の処理 */
  var anchor = document.querySelector('a[href^="#contact"]');

  anchor.addEventListener('click', function () {
    body.classList.remove('is-menu-open');
    btn.setAttribute('aria-expanded', false);
  });

  /*smooth scroll*/
  var target = document.querySelector('a[href^="#"]');
  
  target.addEventListener('click', function(e) {
    var target = document.querySelector(e.target.getAttribute('href')),
        position = target.getBoundingClientRect().top + window.scrollY;
    
    e.preventDefault();
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });

});