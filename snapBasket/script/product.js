let profile=document.getElementById("loginProfile");
const isLoggedIn = localStorage.getItem("localAccessToken")!==null;

// Update the text if the user is logged in
if (!isLoggedIn) {
 profile.innerText = "Profile";
}
// navbar 
//navbar
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
// ********************************************************





const searchByInput = document.getElementsByClassName("bx-search");
const urlFruits = `https://debug-adept-0123.onrender.com/Fruits`;
const cartUrl = 'https://debug-adept-0123.onrender.com/cart';
let mainSection = document.getElementById("card-container");

let totalQuantity = 0;

// let totalQuantity = 0;
function incrementQuantity(button) {
   const card = button.closest('.cards');
   const quantitySpan = card.querySelector('.quantity');
   // const addToCartDiv = card.querySelector('.addToCart');
   let quantity = parseInt(quantitySpan.textContent);
   quantity++;
   quantitySpan.textContent = quantity;
   
   totalQuantity++;
//    const totalQuantitySpan = document.getElementById("totalQuantity");
//    totalQuantitySpan.textContent = totalQuantity;
   // addToCartDiv.innerHTML = `<button onclick="decrementQuantity(this)">-</button>
   // <span class="quantity">1</span>
   // <button onclick="incrementQuantity(this)">+</button>`
   

}

function addToMyCart(button) {
    const card = button.closest('.cards');
    // const quantitySpan = card.querySelector('.quantity');
    const addToCartDiv = card.querySelector('.addToCart');
    const getId = card.querySelector(".add-botton")
    const dataId = getId.getAttribute('data-id');

    console.log(dataId);
   //  let quantity = parseInt(quantitySpan.textContent);
   //  quantity++;
   //  quantitySpan.textContent = quantity;
    
    totalQuantity++;
    // const totalQuantitySpan = document.getElementById("totalQuantity");
    // totalQuantitySpan.textContent = totalQuantity;
    addToCartDiv.innerHTML = `<button onclick="decrementQuantity(this)" data-id=${dataId} class="increase add-botton">Added</button>`

}

function decrementQuantity(button) {
    const card = button.closest('.cards');
    // const quantitySpan = card.querySelector('.quantity');
    // let quantity = parseInt(quantitySpan.textContent);
    
    // if (quantity > 0) {
    //     quantity--;
    //     quantitySpan.textContent = quantity;
        
    //     totalQuantity--;
    //     // const totalQuantitySpan = document.getElementById("totalQuantity");
    //     // totalQuantitySpan.textContent = totalQuantity;
        
    //     if (quantity === 0) {
            const addToCartDiv = card.querySelector('.addToCart');
            // addToCartDiv.ClassList.toggle("increase")
            const getId = card.querySelector(".add-botton")
             const dataId = getId.getAttribute('data-id');
            addToCartDiv.innerHTML = `<button onclick="addToMyCart(this)" data-id=${dataId} class="add-botton" >Add</button>`;
            // deleteCart(dataId)
    //     }
    // }
}

// async function deleteCart(id) {
//     try {
//       let res = await fetch(`${cartUrl}/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
  
//       let data = await res.json();
//       console.log(data);
//       // fetchData(`${cartUrl}?_page=1&_limit=10`);
//     } catch (error) {
//       console.log(error);
//     }
//   }




// data append on page

// let selectedOption;
// function handleSearch() {
//   selectedOption = searchBySelect.value;
//   console.log("Selected Option:", selectedOption);
// }

let page = 1;

function handleKeyPress(event) {
   if (event.key === "Enter") {
       searchData();
   }
}

function searchData(){
    let inputVal = searchByInput.value;
    console.log()
    let query =`?productName_like=${inputVal}`
    let url = `${urlFruits}${query}`
    if(!inputVal) return;
    fetchData(page,url)
}

// let mainSection = document.getElementById("cardsContainerWrapper");


function creatCard(obj){
   let card;
   if(obj.offers){
      card = `<div class="cards">
      <div class="image">
          <h6>${obj.offers}% Off</h6>
          <img src=${obj.imageLink}
              alt="img">
      </div>
      <h4>${obj.productName}</h4>
      <p>${obj.quantity}</p>
      <div class="priceAndadd">
          <div class="price">
              <i class="fa-solid fa-indian-rupee-sign price-text">69</i>
              <i class="fa-solid fa-indian-rupee-sign price-text2">${obj.price}</i>
          </div>
          <div class="addToCart">
          <button onclick="addToMyCart(this)" data-id=${obj.id} class="add-botton" >Add</button>
          </div>
      </div>
   </div>`
}
  else{
   card = `<div class="cards">
   <div class="image">
       <h6></h6>
       <img src=${obj.imageLink}
           alt="img">
   </div>
   <h4>${obj.productName}</h4>
   <p>${obj.quantity}</p>
   <div class="priceAndadd">
       <div class="price">
           <i class="fa-solid fa-indian-rupee-sign price-text">69</i>
           <i class="fa-solid fa-indian-rupee-sign price-text2">${obj.price}</i>
       </div>
       <div class="addToCart">
       <button onclick="addToMyCart(this)" data-id=${obj.id} class="add-botton">Add</button>
       </div>
   </div>
</div>`
//  <button onclick="decrementQuantity(this)">-</button>
//                 <span class="quantity">0</span>
//                 <button onclick="incrementQuantity(this)">+</button>
  }
 return card;
 }
 
//  async function addToCart1(id,data){
//    let obj = data.find(item => item.id === id);
//    let res = await fetch(`${cartUrl}`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     });
//     let data1 = await res.json();
//     console.log(data1);
//    //  fetchData();
//  }
 function appendData(data){
   data.forEach(element => {
     mainSection.innerHTML += creatCard(element)
   });
   let addToCart = document.getElementsByClassName("addToCart");
   for(let item of addToCart){
      item.addEventListener("click",(e)=>{
         e.preventDefault();
        //  addToCart1(e.target.dataset.id,data);
      })
   }
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
         let res = await fetch(`${urlFruits}?_page=${page}&_limit=10${query}`);
         let data = await res.json();
         console.log(data);
         appendData(data)
     }
     catch(err){
         console.log(err);
     }
   }
   fetchData(1)
 