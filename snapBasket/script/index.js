// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}


// big card image crousal

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}


// cart items

let totalQuantity = 0;

// let totalQuantity = 0;
function addToCart(){
   
}

function incrementQuantity(button) {
    const card = button.closest('.card1');
    const quantitySpan = card.querySelector('.quantity');
    const addToCartDiv = card.querySelector('.addToCart');
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    
    totalQuantity++;
    const totalQuantitySpan = document.getElementById("totalQuantity");
    totalQuantitySpan.textContent = totalQuantity;
    addToCartDiv.innerHTML = `<button onclick="decrementQuantity(this)">-</button>
    <span class="quantity">${quantity}</span>
    <button onclick="incrementQuantity(this)">+</button>`

}

function decrementQuantity(button) {
    const card = button.closest('.card1');
    const quantitySpan = card.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        
        totalQuantity--;
        const totalQuantitySpan = document.getElementById("totalQuantity");
        totalQuantitySpan.textContent = totalQuantity;
        
        if (quantity === 0) {
            const addToCartDiv = card.querySelector('.addToCart');
            addToCartDiv.innerHTML = '<button onclick="incrementQuantity(this)">Add</button>';
        }
    }
}





// data append on page

// let selectedOption;
// function handleSearch() {
//   selectedOption = searchBySelect.value;
//   console.log("Selected Option:", selectedOption);
// }

const searchByInput = document.getElementsByClassName("bx-search");
const urlAllRecipes = `https://debug-adept-0123.onrender.com/Fruits`;
let page = 1;

function handleKeyPress(event) {
   if (event.key === "Enter") {
       searchData();
   }
}

function searchData(){
    let inputVal = searchByInput.value;
    let query =`?productName_like=${inputVal}`
    let url = `${urlAllRecipes}${query}`
    if(!inputVal) return;
    fetchData(page,url)
}

let mainSection = document.getElementById("cardsContainerWrapper");
// let getRecipesBtn = document.getElementById("fetch-recipes");
// let totalResult = document.querySelector(".total-results");

function creatCard(obj){
   let card;
   if(obj.offers){
      card = `<div class="card1">
      <div class="offer">${obj.offers}%off</div>
      <div class="cardImage"><img src=${obj.imageLink} alt="img"></div>
      <div class="cardContent">
         <h4>${obj.productName}</h4>
         <p>${obj.quantity}</p>
         <div class="price">
            <h4>₹${obj.price}</h4>
            <div class="addToCart">
                <button onclick="decrementQuantity(this)">-</button>
                <span class="quantity">0</span>
                <button onclick="incrementQuantity(this)">+</button>
            </div>
         </div>
      </div>
 </div>`
}
  else{
   card = `<div class="card1">
      <div class="cardImage"><img src=${obj.imageLink} alt="img"></div>
      <div class="cardContent">
         <h4>${obj.productName}</h4>
         <p>${obj.quantity}</p>
         <div class="price">
            <h4>₹${obj.price}</h4>
            <div class="addToCart">
                <button onclick="decrementQuantity(this)">-</button>
                <span class="quantity">0</span>
                <button onclick="incrementQuantity(this)">+</button>
            </div>
         </div>
      </div>
 </div>`
  }
 return card;
 }
 
 function appendData(data){
   data.forEach(element => {
     mainSection.innerHTML += creatCard(element)
   });
 }
 window.addEventListener("scroll",()=>{
     
     let clientHeight = document.documentElement.clientHeight;
     let scrollHeight = document.documentElement.scrollHeight;
     let scrollTop = document.documentElement.scrollTop;
 
     //console.log(clientHeight,scrollHeight,scrollTop);
     if((scrollHeight - clientHeight)<=Math.ceil(scrollTop)){
         console.log("we are at the bottom");
         page++;
         fetchData(page);
     }
 })
  async function fetchData(page,query=""){
     try{
         let res = await fetch(`${urlAllRecipes}?_page=${page}&_limit=10${query}`);
         let data = await res.json();
         console.log(data);
         appendData(data)
     }
     catch(err){
         console.log(err);
     }
   }
 