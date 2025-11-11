/*
=======================================================================================================================================
==================================== CODES POUR L'ANIMATION D'APPARITION DES ELEMENT HTML =============================================
=======================================================================================================================================
*/
//Séctionnons tous les ele,ents à annimer
let leftToRight = document.querySelectorAll('.left-right');
let rightToLeft = document.querySelectorAll('.right-left');
let topToBottom = document.querySelectorAll('.top-bottom');
let bottomToTop = document.querySelectorAll('.bottom-top');
// creons l'instance d'intersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                //ajoutons la classe 'visible' si l'element est dans le viewport
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }else{
                //ajoutons la classe 'hidden' si l'element sort de la viewport
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
            
        })
    },{
        threshold :0.2, // donc il faut que l'element soit a 20% pour declencher
    }
);

leftToRight.forEach((element) => observer.observe(element));
rightToLeft.forEach((element) => observer.observe(element));
topToBottom.forEach((element) => observer.observe(element));
bottomToTop.forEach((element) => observer.observe(element));





/*
 ******************************************************************************************
 ****************************** CODE JS DE COKIES NOTIFICATION ****************************
 ******************************************************************************************
 */
let cookieNofication = document.querySelector('.cookie-notification');
let acceptCookieBtn = document.querySelector('.accept-btn');
let refuseCookieBtn = document.querySelector('.refuse-btn');

// affciher la notification apres le chargement de la page
window.addEventListener('load', () => {
    setTimeout(function(){
        cookieNofication.style.opacity = 1;
        cookieNofication.style.transform = 'translate(0%)';
    }, 2000);
})
// cacher la nofication apres avoir cliqué sur le bouton "accepter"
acceptCookieBtn.addEventListener('click', function(){
    cookieNofication.style.opacity = 0;
    cookieNofication.style.transform = 'translate(30%)';
})
// cacher la nofication apres avoir cliqué sur le bouton "refuser"
refuseCookieBtn.addEventListener('click', function(){
    cookieNofication.style.opacity = 0;
    cookieNofication.style.transform = 'translate(30%)';
})


/*
 ******************************************************************************************
 ****************************** CODE JS DE SLIDER USER TEAM (Swipper) *********************
 ******************************************************************************************
 */

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor : true,
    spaceBetween : 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // responsives breakpoints
  
    breakpoints: {
      0: {
        slidesPerView : 1
      },
  
      612: {
        slidesPerView : 2
      },
  
      1024: {
        slidesPerView : 3
      }
    }
  });

  /*
 ******************************************************************************************
 ****************************** CODE JS CLIC SUR LE BOUTON HAMBURGER **********************
 ******************************************************************************************
 */

 let btnHambuger = document.querySelector(".hamburger");
 let menu = document.querySelector('.menu');
 let followBtn = document.querySelector('.suivre-btn');


 btnHambuger.addEventListener('click', () => {
    btnHambuger.classList.toggle('active');
    menu.classList.toggle('active');
    followBtn.classList.toggle('active');
 })

