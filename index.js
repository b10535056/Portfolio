const y = window.scrollY;
const navbar = document.querySelector(".navbar");
const navlinks = document.querySelector(".nav_links");
const icon = document.querySelector(".icon");
const searchbar = document.querySelector(".searchbar");

const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const intro3 = document.getElementById("intro3");

const introp1 = document.getElementById("introp1");
const introp2 = document.getElementById("introp2");
const introp3 = document.getElementById("introp3");
const introp4 = document.getElementById("introp4");
const introp5 = document.getElementById("introp5");
const introp6 = document.getElementById("introp6");

const scrollreport = document.getElementById("scrollreport");


navbar.addEventListener("click", () => {
  navlinks.classList.toggle('show');
});

icon.addEventListener("click", () => {
  searchbar.classList.toggle('getlong');
});

window.addEventListener("scroll", () => {
  
  const y = window.scrollY;

  const intro1_Top = intro1.offsetTop;
  const intro1_Height = intro1.offsetHeight;
  const intro1_Bottom = intro1.offsetTop + intro1.offsetHeight;

  const intro2_Top = intro2.offsetTop;
  const intro2_Height = intro2.offsetHeight;
  const intro2_Bottom = intro2.offsetTop + intro2.offsetHeight;

  const intro3_Top = intro3.offsetTop;
  const intro3_Height = intro3.offsetHeight;
  const intro3_Bottom = intro3.offsetTop + intro3.offsetHeight;

  console.log("intro1_Top", intro1_Top, "intro1_Bottom", intro1_Bottom)
  // console.log("intro2_Top", intro2_Top, "intro2_Bottom", intro2_Bottom)
  // console.log("intro3_Top", intro3_Top, "intro3_Bottom", intro3_Bottom)

  scrollreport.innerHTML = `目前的位置是${y}`;

  if(y > 0 && y < intro1_Top) {
    introp1.classList.add('swipeInLeft');
    introp2.classList.add('swipeInRight');
  }

  if (y > intro1_Top && y < intro1_Bottom) {
    introp3.classList.add('swipeInLeft');
    introp4.classList.add('swipeInRight');
  }

  if (y > intro1_Bottom) {
    introp3.classList.add('swipeInLeft');
    introp4.classList.add('swipeInRight');
  }

  // if(y > 270) {
  //   introp1.classList.add('swipeInLeft');
  //   introp2.classList.add('swipeInRight');
  // } 
  // if(y > 560){
  //   introp3.classList.add('swipeInLeft');
  //   introp4.classList.add('swipeInRight');
  // }
  // if(y > 890){
  //   introp5.classList.add('swipeInLeft');
  //   introp6.classList.add('swipeInRight');
  // } 
  
});



// const introTable = {
//   intro1: {
//     introp: document.getElementById("introp1")
//   },
//   intro2: {
//     introp: document.getElementById("introp2")
//   },
// };


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



