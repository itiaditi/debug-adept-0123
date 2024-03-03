
// let cartEmail = "indrani@gmail.com";
 let cartEmail = localStorage.getItem("localAccessToken");

// FRONTEND_URLs
let cartPageURL = `./html/cart.html`;

// BACKEND_URLs
let registerURL = `https://debug-adept-0123.onrender.com/customer`;
// let registerURL = `http://localhost:3000/customer`;

const cartUrl = `https://debug-adept-0123.onrender.com/cart`;
// let cartUrl = `http://localhost:3000/cart`;

const urlFruits = `https://debug-adept-0123.onrender.com/Fruits`;


let submitBtn = document.getElementById("signUpBtn");

let userNameInput = document.getElementById("signUpName");
let userEmailInput = document.getElementById("semail");
let userPasswordInput = document.getElementById("spass");

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

// Add event listener to login button
let loginUserButton = document.getElementById("loginForm");
loginUserButton.addEventListener("click", logIn);
let loginUserUsername = document.getElementById("username");
let loginUserPassword = document.getElementById("password");
let adminURL = `https://debug-adept-0123.onrender.com/admin`;
async function logIn() {
  try {
    let res1 = await fetch(registerURL);
    let data1 = await res1.json();
    let res2 = await fetch(adminURL);
    let data2 = await res2.json();
    console.log(data1);

    console.log(data2);
   let obj1 = data2.find(
      (item) =>
        item.userName === loginUserUsername.value &&
        item.password === loginUserPassword.value
    );
    if(obj1){
      admin = obj1.userName;
     
      localStorage.setItem("localAdminToken", admin);
      window.location.href=`./html/admin.html`;
      return;
    }
    let obj = data1.find(
      (item) =>
        item.id === loginUserUsername.value &&
        item.password === loginUserPassword.value
    );
    if (!obj) {
      throw new Error("Username or password input elements not found");
    }

    // let credentials = {
    //   id: loginUserUsername.value,
    //   password: loginUserPassword.value,
    // };

    // let res = await fetch(registerURL, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(credentials),
    // });

    // if (!res.ok) {
    //   throw new Error("Failed to login");
    // }

    // let data = await res.json();
  
    // Set userAuthToken and userId variables
    userAuthToken = obj.id;
    //userId = data.user.id;

    // Set local storage keys
    localStorage.setItem("localAccessToken", userAuthToken);
    //localStorage.setItem("userId", userId);
alert("Login Successfully");
window.location.href=`./index.html`;
    // Fetch todos after user has logged in


    // Construct notification message
  } catch (err) {
    console.log("Error logging in:", err);
  }
}

// ******************************************************************

submitBtn.addEventListener("click", registerUser);

async function registerUser() {
  try {
    let userData = {
      id: userEmailInput.value,
      name: userNameInput.value,
      password: userPasswordInput.value,
    };

    let response = await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      let data = await response.json();
      
      console.log("User registered successfully:", data);
      alert("Successfuly registered");
      window.location.href=`./index.html`
    } else {
      throw new Error("Failed to register the user");
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

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
let cartClick = document.getElementById("cart");
cartClick.addEventListener("click", () => {
  window.location.replace(
    cartPageURL 
  );
});


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



const searchByInput = document.getElementsByClassName("bx-search");
// const urlFruits = `https://debug-adept-0123.onrender.com/Fruits`;
// const cartUrl = "https://debug-adept-0123.onrender.com/cart";  // change
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


function creatCard(obj) {
  let card;
  if (obj.offers) {
    card = `<div class="card1" data-id=${obj.id}>
      <div class="offer">${obj.offers}%off</div>
      <div class="cardImage" data-id=${obj.id}><img src=${obj.imageLink} alt="img"></div>
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
    card = `<div class="card1" data-id=${obj.id}>
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
  
  }
  return card;
}


// ip
async function updateCart(productArr, totalCnt, cartEmail) {
  try {
    let res = await fetch(`${cartUrl}/${cartEmail}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product: productArr,
        totalItem: totalCnt
      }),
    });

    alert("Product added to the cart!");
  } catch (err) {
    console.log(err);
  }
}
async function addProductToProductArray(cartEmail, product) {
  try {
    let res = await fetch(`${cartUrl}/${cartEmail}`);

    // ip
    if (!res.ok) {
      let res1 = await fetch(`${cartUrl}/${cartEmail}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: cartEmail,
          totalItem: "1",
          product: [product],
        }),
      });

      if (res1.ok) alert("Product added to the cart!");
    } else {
      let data = await res.json();

      let productArr = data.product;
      let totalCnt = +data.totalItem + 1 + "";

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

      updateCart(productArr, totalCnt, cartEmail);
    }
  } catch (err) {
    console.log(err);
  }
}

//ip
function collectProductFromHomeCard(e, cartEmail) {

  if (!cartEmail) {
    window.location.replace(
      "http://127.0.0.1:5500/snapBasket/html/login.html" //login page url
    );
  }

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
    item.addEventListener("click", (e) => collectProductFromHomeCard(e, cartEmail));
  }

  let eachCard = document.getElementsByClassName("cardImage");
  for(let item of eachCard){
    item.addEventListener("click",(e)=> productDetailPage(e));
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

// record of visitors
      // Function to get current date and time
      function getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleString(); // Adjust formatting as needed
      }

      // Function to store visitor record in local storage
      function storeVisitorRecord() {
        const visitRecord = {
          timestamp: getCurrentDateTime(),
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
        };

        // Get existing records or initialize empty array
        let visitorRecords =
          JSON.parse(localStorage.getItem("visitorRecords")) || [];
        // Add current visit record to the array
        visitorRecords.push(visitRecord);
        // Store updated records back to local storage
        localStorage.setItem("visitorRecords", JSON.stringify(visitorRecords));

        // Update visitor count in the window
        document.getElementById("visitorCount").textContent =visitorRecords.length;
      }

      // Function to display visitor count when the page loads
      function displayVisitorCount() {
        // Get existing visitor records from local storage
        let visitorRecords =
          JSON.parse(localStorage.getItem("visitorRecords")) || [];
        // Display the count of visitor records
        document.getElementById("visitorCount").textContent =
          visitorRecords.length;
      }

      // Call function to store visitor record when the page loads
      storeVisitorRecord();
      // Call function to display visitor count when the page loads
      displayVisitorCount();

      //

//       let about = document.getElementById("about");
//       about.addEventListener("click",(e)=>{
// e.preventDefault();
// window.location.href=`../html/login.html`;
//       }
//       )



// Product detais page

function productDetailPage(e){
  let card = e.currentTarget.parentNode ;
  let offers = card.childNodes[1].innerText.slice(0, -4);
  let imageLink = card.childNodes[3].childNodes[0].src;
  let productName = card.childNodes[5].childNodes[1].innerText;
  let quantity = card.childNodes[5].childNodes[3].innerText;
  let price = card.childNodes[5].childNodes[5].childNodes[1].innerText.slice(1);
  let id = card.dataset.id;

  let product = {
    id,
    price,
    offers,
    quantity,
    imageLink,
    productName,
    eachProductCount: "1",
  };

  console.log(product);

  let Detailpage = `<div class="middle-container">
  <div>
      <div class="coursel-image">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src=${imageLink}
                          class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src=${imageLink}
                          class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src=${imageLink}
                          class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src=${imageLink}
                          class="d-block w-100" alt="...">
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>

          </div>
  

 
    

      </div>
      <!-- deatils of products -->
      <ul>
          <li>Description : Papayas contain high levels of antioxidants vitamin a, vitamin c, and vitamin e. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol. When cholesterol oxidizes, it’s more likely to create blockages that lead to heart disease.</li>
          <li>Country of Origin : India</li>
          <li>Shelf Life : 5 days</li>
          <li>Fill muffin tray 3/4 full.</li>
          <li>How to Use : Suitable for salad and can be eaten fresh.</li>
        </ul>
        
  </div>
 








  <div class="description">
      <a href="#">Home&gt;</a>
      <a href="#">Fresh Fruits&gt;</a>
      <a href="#" class="papaya">${productName}</a>
      <h3>${productName}</h3>
      <h6>${quantity}</h6>

      <i class="fa-solid fa-indian-rupee-sign price-text">55</i>
      <i class="fa-solid fa-indian-rupee-sign price-text2 cut-text">69</i>
      <p class="off">${offers}% Off</p>
      <button>Add</button>
      <hr>
      <p>How it Works</p>

      <div class="points">
          <div class="box">
              <img src="https://img.freepik.com/premium-vector/female-hand-holding-smartphone-cartoon-hand-scrolling-cell-phone-screen-mobile-device-hand-flat-vector-illustration-white-background_627510-1571.jpg?w=740"
                  alt="mobile">
          </div>
          <div>
              <h5>Open the app</h5>
              <p>Choose from over 7000 products across groceries, fresh fruits &amp;<br> veggies, meat, pet care,
                  beauty items &amp; more</p>
          </div>


      </div>
      <div class="points">
          <div class="box">
              <img src="https://media.istockphoto.com/id/500805248/vector/vector-set-of-paper-bag.jpg?s=612x612&w=0&k=20&c=8hH2jpYtcvexsGZXJ5GLP464dtMtRarlYqkzSXNOtyk="
                  alt="free-delivery">
          </div>
          <div>
              <h5>Place an order</h5>
              <p>Add your favourite items to the cart &amp; <br>avail the best offers</p>
          </div>


      </div>
      <div class="points">
          <div class="box">
              <img src="https://i.pinimg.com/474x/28/1f/b2/281fb27c747c2cf1cc41819356978801.jpg" alt="mobile">
          </div>
          <div>
              <h5>Get free delivery</h5>
              <p>Experience lighting-fast speed &amp; get all your items delivered in <br>10 minutes</p>
          </div>
      </div>
  </div>

</div>


<!--recommdation-of-products-->
<div class="might-like">
  <p>You might also like</p>
  <div class="recommend">
      <div class="recommend-card">
          <h5 class="off">20% Off</h5>
          <img src="https://cdn.zeptonow.com/production///tr:w-450,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/87ba5567-09fd-4e76-9a4e-0dc1d7fdd341.jpeg"
              alt="Cauliflower">
          <h6>Cauliflower</h6>
          <p>1 pc (Approx. 400g - 600g)</p>
          <div>
              <i class="fa-solid fa-indian-rupee-sign price">28</i>
              <i class="fa-solid fa-indian-rupee-sign price-cut">22</i>
              <button>Add</button>
          </div>
      </div>

      <div class="recommend-card">
          <h5 class="off">20% Off</h5>
          <img src="https://cdn.zeptonow.com/production///tr:w-450,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/c815da73-f67b-4066-aac6-7566cf8931c9.jpeg"
              alt="Cauliflower">
          <h6>Tomato Local</h6>
          <p>1 kg</p>
          <div>
              <i class="fa-solid fa-indian-rupee-sign price">43</i>
              <i class="fa-solid fa-indian-rupee-sign price-cut">54</i>
              <button>Add</button>
          </div>
      </div>

      <div class="recommend-card">
          <h5 class="off">20% Off</h5>
          <img src="https://cdn.zeptonow.com/production///tr:w-450,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/32bf997e-e3cb-4513-bb98-3d3f1a672889.jpeg"
              alt="Cauliflower">
          <h6>Strawberry</h6>
          <p>1 pc (Approx. 180g - 200g)</p>
          <div>
              <i class="fa-solid fa-indian-rupee-sign price">87</i>
              <i class="fa-solid fa-indian-rupee-sign price-cut">110</i>
              <button>Add</button>
          </div>
      </div>

      <div class="recommend-card">
          <h5 class="off">20% Off</h5>
          <img src="https://cdn.zeptonow.com/production///tr:w-450,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/322275eb-48f6-4b66-9adf-48b3d38bede3.jpeg"
              alt="Cauliflower">
          <h6>Coriander Leaves</h6>
          <p>250 g</p>
          <div>
              <i class="fa-solid fa-indian-rupee-sign price">31</i>
              <i class="fa-solid fa-indian-rupee-sign price-cut">25</i>
              <button>Add</button>
          </div>
      </div>

      <div class="recommend-card">
          <h5 class="off">20% Off</h5>
          <img src="https://cdn.zeptonow.com/production///tr:w-450,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/af60456d-38af-4c52-adb1-09f20a941914.jpeg"
              alt="Cauliflower">
          <h6>Tender Coconut</h6>
          <p>1 pc (Min. 250 ml water)</p>
          <div>
              <i class="fa-solid fa-indian-rupee-sign price">61</i>
              <i class="fa-solid fa-indian-rupee-sign price-cut">54</i>
              <button>Add</button>
          </div>
      </div>

      
    


  </div>
  
</div>







`
let body = document.querySelector("#mainBody");

console.log(body);

body.innerHTML = ""

body.innerHTML = Detailpage

}
