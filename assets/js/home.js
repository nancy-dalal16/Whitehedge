
$('#testi').owlCarousel({
  loop: false,
  margin: 10,
  responsiveClass: true,
  autoplay: false,
  nav: true,
  navText: ["<img src='./assets/img/left.svg'>","<img src='./assets/img/right.svg'>"],
  dots: false,
  responsive: {
      0: {
          items: 1,
          autoplay: false,
          loop: false,
      },
      600: {
          items: 1,
          autoplay: false,
          loop: false,
      },
      1000: {
          items: 1,
      },
      1200: {
          items: 1,
      }
  }
});
