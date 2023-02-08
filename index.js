// nav menu (at the bottom for mobile view)
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}



// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}




// slider for banner
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
let currentSlide = 0;
const intervalTime = 5000;

const nextSlide = () => {
  sliderItems[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % sliderItems.length;
  sliderItems[currentSlide].style.display = 'flex';
};

sliderItems[0].style.display = 'flex';
setInterval(nextSlide, intervalTime);





// hide lottie animation when page is no longer loading for 2.65s
setTimeout(function() {
  document.querySelector('.lottie-container').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 2650);





// fetch api from fake api store
document.addEventListener('DOMContentLoaded', function() {
  let products = document.querySelector('.products');
  let url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=5`;
  let opset = 0;
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          opset = opset + 5;
          if (data.ok) {
              let response = await data.json();

              for (let i = 0; i < 55; i++) {
                  let description = response[i].description;
                  let title = response[i].title;
                  products.innerHTML += `
     <div class="product">
         <img src="${response[i].images[1]}" alt="${
          response[i].category.name
        }" class="product-img">
         <div class="product-content">
         <h2 class="product-title">${title.length > 50 ? title.substring(0, 50).concat(' ...') : title}</h2>
         <h4 class="product-category">${response[i].category.name}</h4>
         <p class="product-description">${description.length > 100 ? description.substring(0, 100).concat(' ...more') : description}</p>
         <div class="product-price-container">
             <h3 class="product-price">$${response[i].price}</h3>
             <a href="#!" data-productId="${response[i].id}" class="add-to-like"><ion-icon name="heart"></ion-icon></a>
             <a href="#!" data-productId="${response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
         </div>
         </div>
        
     </div>
     `;
              }
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts(url);

// lottie animation at the bottom
  window.addEventListener('scroll', function() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1/4) {
          setTimeout(() => {
              fetchProducts(
                  `https://api.escuelajs.co/api/v1/products?offset=${opset}&limit=5`
              );
          }, 1000);
      }
  });
});