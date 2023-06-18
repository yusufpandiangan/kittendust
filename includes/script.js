window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar-bg');
    } else {
      navbar.classList.remove('navbar-bg');
    }
  });