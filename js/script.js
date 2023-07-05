// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//pas ramen menu di klik
document.querySelector("#ramen-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form

const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// klik di luar element
const ramen = document.querySelector("#ramen-menu");
const searchbtn = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!ramen.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchbtn.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
});

const search = document.getElementById("#search");

search.addEventListener("click", function (e) {});

// modal box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtn = document.querySelector('.item-detail-btn');

itemDetailBtn.onclick = () =>{
  itemDetailModal.style.display = 'flex';
  e.preventDefault();
}
// const itemDetailModal = document.getElementById('item-detail-modal');
// const itemDetailBtn = document.getElementsByClassName('item-detail-btn')[0];

// itemDetailBtn.onclick = (e) => {
//   itemDetailModal.style.display = 'flex';
//   e.preventDefault();
// };

var swiper = new swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView : 1,
    },
    768: {
      slidesPerView : 2,
    },
    1024: {
      slidesPerView : 3,
    },
  },
});


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let openShopping =document.querySelector('#shopping-cart');
let closeShopping= document.querySelector('.closeshopping');
let list= document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let body =document.querySelector('.body');
let total= document.querySelector('.total');
let quantitty= document.querySelector('.quantity');

openShopping.addEventListener('click', ()=> {
  body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
  body.classList.remove('active');
})
let products =[
  {
    id: 1,
    name: 'salmon sushi',
    image: '.img/menu/Salmon Sushi.jpg',
    price: 15.000
  },
  {
    id: 2,
    name: 'Tuna Salad Crispy Mentai',
    image: '.img/menu/Tuna Salad Crispy Mentai.jpg',
    price: 20.000
  },
  {
    id: 3,
    name: 'Salmon Sashimi Boat',
    image: '.img/menu/Salmon Sashimi Boat.jpg',
    price: 35.000
  },
  {
    id: 4,
    name: 'Inari Sushi',
    image: '.img/menu/inari sushi.png',
    price: 10.000
  },
  {
    id: 5,
    name: 'Eel Sushi',
    image: '.img/menu/eel nigiri.jpg',
    price: 20.000
  },
  {
    id: 6,
    name: 'Ikira gunkan',
    image: '.img/menu/ikura gunkan sushi.jpg',
    price: 15.000
  },
  {
    id: 7,
    name: 'Ramen Miso',
    image: '.img/ramen/miso ramen 1.png',
    price: 25.000
  },
  {
    id: 8,
    name: 'Abura Ramen',
    image: '.img/ramen/Abura Soba - Cherry on my Sundae.jpg',
    price: 30.000
  },
  {
    id: 9,
    name: 'Sea Urchin Tsukemen',
    image: '.img/ramen/Sea Urchin Tsukemen (Dipping Noodle).jpg',
    price: 25.000
  },
  {
    id: 10,
    name: 'Shio Ramen',
    image: '.img/ramen/Shio Ramen.jpg',
    price: 30.000
  },
  {
    id: 11,
    name: 'Shoyu Ramen',
    image: '.img/ramen/shoyu ramen.jpg',
    price: 30.000
  },
  {
    id: 12,
    name: 'Wakayama Ramen',
    image: '.img/ramen/Wakayama Ramen.jpg',
    price: 35.000
  },
];
let listCards = [];
function initApp(){
  products.forEach((value, key)=>{
    let newDiv =document.createElement('div');
    newDiv.innerHTML =`
      <img src="image/$(value.image)"/>
      <div class="tittle">$(value.name)</div>
    `;
    list.appendChild(newDiv);
  })
}
initApp();