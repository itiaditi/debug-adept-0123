//login 
  // login submit button
  console.clear();
  const loginModal = document.getElementById("loginModal");
  const openModalButton = document.getElementById("openModal");
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");

  function openModal() {
    loginModal.style.display = "block";
    document.getElementById("mainBody").style.filter = "blur(5px)";
  }
  

  function closeModal() {
    loginModal.style.display = "none";
    document.getElementById("mainBody").style.filter = "blur(0px)";
  }

  openModalButton.addEventListener("click", openModal);
  openModalButton.addEventListener("dblclick", closeModal);
  // Close the modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === loginModal) {
      closeModal();
    }
  });

  // Close the modal when pressing the ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  loginBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });

  signupBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });
// ***************************************************************************






//cart click 
let cartClick=document.getElementById('cart');
cartClick.addEventListener('click',()=>{
   window.location.replace(
      "http://127.0.0.1:5500/snapBasket/html/cart.html" //login page url
    );
})



//ip
let cartEmail = "indrani@gmail.com";

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

// let totalQuantity = 0;


//ip
// let totalQuantity = 0;
// function incrementQuantity(button) {
//   // increment
//   const card = button.closest(".card1");
//   const quantitySpan = card.querySelector(".quantity");
//   // const addToCartDiv = card.querySelector('.addToCart');
//   let quantity = parseInt(quantitySpan.textContent);
//   quantity++;
//   quantitySpan.textContent = quantity;

//   totalQuantity++;
//   const totalQuantitySpan = document.getElementById("totalQuantity");
//   totalQuantitySpan.textContent = totalQuantity;
//   // addToCartDiv.innerHTML = `<button onclick="decrementQuantity(this)">-</button>
//   // <span class="quantity">1</span>
//   // <button onclick="incrementQuantity(this)">+</button>`
// }

// ip
// function addToMyCart(button) {
//   const card = button.closest(".card1");
//   const quantitySpan = card.querySelector(".quantity");
//   const addToCartDiv = card.querySelector(".addToCart");
//   //  let quantity = parseInt(quantitySpan.textContent);
//   //  quantity++;
//   //  quantitySpan.textContent = quantity;

//   totalQuantity++;
//   const totalQuantitySpan = document.getElementById("totalQuantity");
//   totalQuantitySpan.textContent = totalQuantity;
//   addToCartDiv.innerHTML = `<button onclick="decrementQuantity(this)">-</button>
//     <span class="quantity">1</span>
//     <button onclick="incrementQuantity(this)">+</button>`;
// }

// function decrementQuantity(button) {
//   const card = button.closest(".card1");
//   const quantitySpan = card.querySelector(".quantity");
//   let quantity = parseInt(quantitySpan.textContent);

//   if (quantity > 0) {
//     quantity--;
//     quantitySpan.textContent = quantity;

//     totalQuantity--;
//     const totalQuantitySpan = document.getElementById("totalQuantity");
//     totalQuantitySpan.textContent = totalQuantity;

//     if (quantity === 0) {
//       const addToCartDiv = card.querySelector(".addToCart");
//       addToCartDiv.innerHTML =
//         '<button onclick="addToMyCart(this)">Add</button>';
//     }
//   }
// }

// data append on page

// let selectedOption;
// function handleSearch() {
//   selectedOption = searchBySelect.value;
//   console.log("Selected Option:", selectedOption);
// }

const searchByInput = document.getElementsByClassName("bx-search");
const urlFruits = `https://debug-adept-0123.onrender.com/Fruits`;
const cartUrl = "https://debug-adept-0123.onrender.com/cart";
let page = 1;

function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchData();
  }
}

function searchData() {
  let inputVal = searchByInput.value;
  console.log();
  let query = `?productName_like=${inputVal}`;
  let url = `${urlFruits}${query}`;
  if (!inputVal) return;
  fetchData(page, url);
}

let mainSection = document.getElementById("cardsContainerWrapper");


// Removed onclick="addToMyCart(this)" from button in the following function - ip
function creatCard(obj) {
  let card;
  if (obj.offers) {
    card = `<div class="card1">
      <div class="offer">${obj.offers}%off</div>
      <div class="cardImage"><img src=${obj.imageLink} alt="img"></div>
      <div class="cardContent">
         <h4>${obj.productName}</h4>
         <p>${obj.quantity}</p>
         <div class="price">
            <h4>₹${obj.price}</h4>
            <div class="addToCart">
            <button data-id=${obj.id}>Add</button>
            </div>
         </div>
      </div>
 </div>`;
  } else {
    card = `<div class="card1">
   <div class="offer"></div>
      <div class="cardImage"><img src=${obj.imageLink} alt="img"></div>
      <div class="cardContent">
         <h4>${obj.productName}</h4>
         <p>${obj.quantity}</p>
         <div class="price">
            <h4>₹${obj.price}</h4>
            <div class="addToCart">
            <button data-id=${obj.id}>Add</button>
            </div>
         </div>
      </div>
 </div>`;
    //  <button onclick="decrementQuantity(this)">-</button>
    //                 <span class="quantity">0</span>
    //                 <button onclick="incrementQuantity(this)">+</button>
  }
  return card;
}


// ip
// async function addToCart1(id, data) {
//   let obj = data.find((item) => item.id === id);
//   let res = await fetch(`${cartUrl}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
//   let data1 = await res.json();
//   console.log(data1);
//   //  fetchData();
// }

// ip
async function updateCart(productArr, totalCnt) {
  try {
    let res = await fetch(`http://localhost:3000/cart/${cartEmail}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product: productArr,
        totalItem: totalCnt,
      }),
    });
    
    alert("Product added to the cart!");
  } catch (err) {
    console.log(err);
  }
}
async function addProductToProductArray(cartEmail, product) {
  try {
    let res = await fetch(`http://localhost:3000/cart/${cartEmail}`);
    let data = await res.json();
    let productArr = data.product;
    let totalCnt = (+data.totalItem + 1) + "";

    let flag = false;
    productArr.forEach((el) => {
      if (el.id === product.id) {
        flag = true;
        el.eachProductCount++;
      }
    });

    if (!flag) {
      productArr.push(product);
    }

    updateCart(productArr, totalCnt);
  } catch (err) {
    console.log(err);
  }
}

//ip
function collectProductFromHomeCard(e) {
  let card = e.currentTarget.parentNode.parentNode.parentNode;
  let offers = card.childNodes[1].innerText.slice(0, -4);
  let imageLink = card.childNodes[3].childNodes[0].src;
  let productName = card.childNodes[5].childNodes[1].innerText;
  let quantity = card.childNodes[5].childNodes[3].innerText;
  let price = card.childNodes[5].childNodes[5].childNodes[1].innerText.slice(1);
  let id = e.target.dataset.id;

  let product = {
    id,
    price,
    offers,
    quantity,
    imageLink,
    productName,
    eachProductCount: "1",
  };


  addProductToProductArray(cartEmail, product);
}

function appendData(data) {
  data.forEach((element) => {
    mainSection.innerHTML += creatCard(element);
  });
  let addToCart = document.getElementsByClassName("addToCart");
  for (let item of addToCart) {
    // Ip
    item.addEventListener("click", (e) => collectProductFromHomeCard(e));
  }
}

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;

  //console.log(clientHeight,scrollHeight,scrollTop);
  if (scrollHeight - clientHeight <= Math.ceil(scrollTop)) {
    console.log("we are at the bottom");
    page++;
    fetchData(page);
  }
});
async function fetchData(page, query = "") {
  try {
    let res = await fetch(`${urlFruits}?_page=${page}&_limit=10${query}`);
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
