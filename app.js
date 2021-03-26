const navSlide = () => {
  const  burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const navItems = document.querySelectorAll('.nav-link');


  burger.addEventListener('click', () => {
    //   toggle nav
    nav.classList.toggle('nav-active');

    // Animate link
  navItems.forEach((link, index) => {
    if(link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
     });
     //    Burger Animation
     burger.classList.toggle('toggle');
  });


   


}

navSlide();