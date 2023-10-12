const menuNav = document.getElementById('menu-nav');

const btn = document.querySelector('.menu-mobile');

function abreMenu() {
    menuNav.classList.toggle('MenuMobile');
}

btn.addEventListener('click', abreMenu);


const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });