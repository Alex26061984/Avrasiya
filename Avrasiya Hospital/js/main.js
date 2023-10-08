// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
};

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
};

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const Cards = [
  {
      image: '../img/p1.jpg',
      price: '129',
      title: 'Men Jacket',
      description: 'Jacket'
  },
  {
      image: '../img/p2.jpg',
      price: '55',
      title: 'Women bag ',
      description: 'Bag'
  },
  {
      image: '../img/p3.jpg',
      price: '66',
      title: 'Men Shirt',
      description: 'Shirt'
  },
  {
      image: '../img/p4.jpg',
      price: '105',
      title: 'Women Dress',
      description: 'Dress'
  },
  {
      image: '../img/p6.jpg',
      price: '49',
      title: 'Kids Pants',
      description: 'Pants'
  },
  {
      image: '../img/p7.jpg',
      price: '38',
      title: 'Kids Shoes',
      description: 'Shoes'
  },
  {
      image: '../img/p8.jpg',
      price: '22',
      title: 'Kids Sunglass',
      description: 'Sunglass'
  },
  {
      image: '../img/p5.jpg',
      price: '60',
      title: 'Kids Dress',
      description: 'Dress'
  },

]

Cards.map(card => {
  var cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="box">
  <div class="thum">
  <img src="${card.image}" alt="">
  <h3>${card.price} AZN</h3>
</div>
<div class="dest-content">
  <div class="name">
      <h4>${card.title}</h4>
      <p>${card.description}</p>
  </div>
  <div class="stars">
      <a href="#"><i class="fa-solid fa-star"></i></a>
      <a href="#"><i class="fa-solid fa-star"></i></a>
      <a href="#"><i class="fa-solid fa-star"></i></a>
      <a href="#"><i class="fa-solid fa-star"></i></a>
      <a href="#"><i class="fa-regular fa-star"></i></a>
  </div>
</div>
</div>`
  document.getElementsByClassName('card-content')[0].appendChild(cardDiv);
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
};