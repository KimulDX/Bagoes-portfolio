$(document).ready(function () {
  const navigation = document.querySelector(".navbar");

  const setScrollPadding = () => {
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  };

  $('a.nav-link').click(function () {
    $('a.nav-link').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    return false;
  });

  window.addEventListener("resize", setScrollPadding);
  setScrollPadding();

  // Other scripts you have
  window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollPos > 500) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
