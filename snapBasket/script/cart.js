const cartUrl = `https://debug-adept-0123.onrender.com/cart`;
// let cartUrl = `http://localhost:3000/cart`;

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

// *****************************************



// get cartEmail from localStorage
let cartEmail = "indrani@gmail.com";
// let cartEmail=localStorage.getItem('id');
async function getData(cartEmail) {
  try {
    if (!cartEmail) {
      window.location.replace(
        "http://127.0.0.1:5500/snapBasket/html/login.html" //login page url
      );
    }
    let res = await fetch(`${cartUrl}/${cartEmail}`);
    let data = await res.json();
    const products = data.product;
    let totalItem = data.totalItem;
    if (totalItem == 0) {
      uiAfterRemovingProduct();
    } else {
      displayData(products, totalItem);
    }
  } catch (err) {
    console.log(err);
  }
}

getData(cartEmail);

function displayData(productArr, totalItem, totalAmount) {
  let box = document.getElementById("container");
  let emptyBtn = document.getElementById("emptyBtn");
  let totalItemNew = document.getElementById("cartHeading");
  totalItemNew.innerText = 0;
  let totalPriceNew = document.getElementById("itemPrice");
  totalPriceNew.innerText = 0;
  emptyBtn.addEventListener("click", () => {
    emptyCart(uiAfterRemovingProduct);
  });

  // leftBox display data
  productArr.forEach((element) => {
    let parentBox = document.createElement("div");
    parentBox.style.display = "flex";
    parentBox.style.borderBottom = "1px solid grey";
    parentBox.style.width = "90%";
    parentBox.style.margin = "20px auto 20px auto";
    parentBox.style.justifyContent = "space-between";
    let imageBox = document.createElement("div");
    imageBox.style.width = "20%";
    let imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", element.imageLink);
    imageProduct.style.width = "100%";
    let middleBox = document.createElement("div");
    middleBox.style.width = "60%";

    let proName = document.createElement("p");
    proName.innerText = element.productName;
    proName.style.margin = "5px 0px 5px 0px";
    proName.style.fontWeight = "bold";
    let proQuantity = document.createElement("p");
    proQuantity.innerText = element.quantity;
    proQuantity.style.margin = "0px 0px 0px 0px";
    proQuantity.style.color = "grey";
    proQuantity.style.fontSize = "14px";
    let proPrice = document.createElement("h3");
    proPrice.innerText = "₹" + element.price;
    proPrice.style.margin = "30px 0px 0px 0px";
    let btnBox = document.createElement("div");
    btnBox.style.display = "flex";
    btnBox.style.height = "25px";
    btnBox.style.width = "70px";
    btnBox.style.justifyContent = "space-between";
    btnBox.style.alignItems = "center";
    btnBox.style.borderRadius = "7px";
    btnBox.style.padding = "5px 10px";
    btnBox.style.backgroundColor = "rgb(255,50,105)";
    btnBox.style.margin = "5px 0px 0px 0px";

    let decBtn = document.createElement("button");
    decBtn.innerText = "-";
    decBtn.style.border = "none";
    decBtn.style.background = "rgb(255,50,105)";
    decBtn.style.color = "white";
    decBtn.addEventListener("click", (e) => {
      e.preventDefault();
      eachProductDecrement(element, productArr, totalItem, totalAmount, e);
    }); //decrement

    let quantityP = document.createElement("p");

    quantityP.innerText = element.eachProductCount;
    totalItemNew.innerText =
      +totalItemNew.innerText + +element.eachProductCount;
    totalPriceNew.innerText = +totalAmount;
    console.log(totalPriceNew.innerText);
    quantityP.style.color = "white";
    let incBtn = document.createElement("button");
    incBtn.innerText = "+";
    incBtn.style.border = "none";
    incBtn.style.background = "rgb(255,50,105)";
    incBtn.style.color = "white";
    incBtn.addEventListener("click", (e) => {
      e.preventDefault();
      eachProductIncrement(element, productArr, totalItem, totalAmount, e);
    });

    imageBox.append(imageProduct);
    middleBox.append(proName, proQuantity, proPrice);
    btnBox.append(decBtn, quantityP, incBtn);
    parentBox.append(imageBox, middleBox, btnBox);
    leftBox.append(parentBox);

    let placeOrder=document.getElementById('thirdInnerRightBox');
    placeOrder.addEventListener('click',()=>{
      emptyCartForPlacingOrder(uiafterOrderPlace)
    });
  });

  updateItemTotal(productArr);
}

//ui after order placing
function uiafterOrderPlace()
{
  let box = document.getElementById("container");
  box.innerHTML = "";
  let uiBox = document.createElement("div");
  box.style.display="flex";
  box.style.backgroundColor="white"
  box.style.justifyContent="center";
  box.style.alignItems="center";
  uiBox.style.width = "30vw";
  uiBox.style.height = "40vh";
  uiBox.style.display="flex";
  uiBox.style.flexDirection="column";
  uiBox.style.justifyContent="center";
  uiBox.style.alignItems="center";
  uiBox.style.borderRadius="20px";
  uiBox.style.background="rgb(255,50,105)";
  uiBox.style.color="white";
  uiBox.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
  let successHeading=document.createElement('h4');
  successHeading.innerText='Order Placed Successfully';
  let deliverText=document.createElement('h3');
  deliverText.innerText="Product will deliver within 12 minutes"

uiBox.append(successHeading,deliverText) ;
 box.append(uiBox);
}

// Decrement cart product
function eachProductDecrement(product, allProducts, totalItem, totalAmount, e) {
  let flag = false;
  allProducts.forEach((el) => {
    if (el.id === product.id) {
      el.eachProductCount = +el.eachProductCount - 1 + "";
      +el.eachProductCount === 0 ? (flag = true) : (flag = false);
      e.target.parentElement.children[1].innerText = el.eachProductCount;
    }
  });

  totalItem = +totalItem - 1 + "";

  totalAmount =
    totalAmount - (product.price - (product.price * product.offers) / 100);
  totalAmount = +totalAmount.toFixed(2);

  if (flag) {
    allProducts = allProducts.filter((el) => {
      return el.id !== product.id;
    });
  }

  updateCartProducts(allProducts, totalItem, totalAmount);
}

// Increment cart product
function eachProductIncrement(product, allProducts, totalItem, totalAmount, e) {
  allProducts.forEach((el) => {
    if (el.id === product.id) {
      el.eachProductCount = +el.eachProductCount + 1 + "";
      e.target.parentElement.children[1].innerText = el.eachProductCount;
    }
  });

  totalItem = +totalItem + 1 + "";
  totalAmount =
    totalAmount + (product.price - (product.price * product.offers) / 100);
  totalAmount = +totalAmount.toFixed(2);

  updateCartProducts(allProducts, totalItem, totalAmount);
}
// Update cart products
async function updateCartProducts(allProducts, totalItem, totalAmount) {
  try {
    let res = await fetch(`${cartUrl}/${cartEmail}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product: allProducts,
        totalItem: totalItem,
        totalAmount: totalAmount,
      }),
    });

    let data = await res.json();
    window.location.reload();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// empty cart
async function emptyCart(uiAfterRemovingProduct) {
  try {
    let res = await fetch(`${cartUrl}/${cartEmail}`, {
      method: "PUT",
      body: JSON.stringify({
        product: [],
        totalItem: "0",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("Cart data deleted successfully on the server.");
      uiAfterRemovingProduct();
    } else {
      console.log("Error deleting cart data on the server.");
    }
  } catch (error) {
    console.log(error);
  }
}

async function emptyCartForPlacingOrder(uiafterOrderPlace) {
  try {
    let res = await fetch(`${cartUrl}/${cartEmail}`, {
      method: "PUT",
      body: JSON.stringify({
        product: [],
        totalItem: "0",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("Cart data deleted successfully on the server.");
     
      uiafterOrderPlace();
    } else {
      console.log("Error deleting cart data on the server.");
    }
  } catch (error) {
    console.log(error);
  }
}


function uiAfterRemovingProduct() {
  let box = document.getElementById("container");
  box.innerHTML = "";
  let uiBox = document.createElement("div");
  uiBox.style.width = "100vw";
  uiBox.style.height = "100vh";
  uiBox.style.border = "1px solid white";

  let imageEmptyBag = document.createElement("img");
  imageEmptyBag.setAttribute(
    "src",
    "https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70"
  );
  imageEmptyBag.style.width = "5%";

  imageEmptyBag.style.margin = "150px auto 20px auto";
  imageEmptyBag.style.display = "block";

  let emptyText = document.createElement("h4");
  emptyText.innerText = "Your cart is empty";

  let innerBox = document.createElement("div");
  innerBox.style.display = "flex";
  innerBox.style.justifyContent = "center";

  let productBrowseDiv = document.createElement("div");

  let productBrowseBtn = document.createElement("button");
  productBrowseBtn.innerText = "Browse Products";
  productBrowseBtn.style.color = "rgb(255,50,105)";
  productBrowseBtn.style.border = "none";
  productBrowseBtn.style.backgroundColor = "rgb(245,241,247)";
  productBrowseBtn.style.fontWeight = "bold";

  productBrowseBtn.addEventListener("click", () => {
    // Replace with home url
    window.location.href = "http://127.0.0.1:5500/snapBasket/index.html";
  });

  emptyText.style.display = "flex";
  emptyText.style.justifyContent = "center";

  productBrowseDiv.append(productBrowseBtn);
  productBrowseDiv.style.display = "flex";
  productBrowseDiv.style.justifyContent = "center";
  productBrowseDiv.style.width = "8%";
  productBrowseDiv.style.border = "1px solid rgb(255,50,105)";
  productBrowseDiv.style.margin = "15px 3px 10px 3px";
  productBrowseDiv.style.padding = "10px 3px 10px 3px";
  productBrowseDiv.style.borderRadius = "5px";

  innerBox.append(productBrowseDiv);
  uiBox.append(imageEmptyBag, emptyText, innerBox);
  box.append(uiBox);
}

function updateItemTotal(productArr) {
  let itemTotal = 0;
  let itemActualTotal = 0;
  productArr.forEach((product) => {
    let { offers, price, eachProductCount } = product;
    itemActualTotal += price * eachProductCount;
    itemTotal += (price - (price * offers) / 100) * eachProductCount;
  });

  document.getElementById("actualTotal").innerText =
    "₹" + itemActualTotal.toFixed(2);
  document.getElementById("itemPrice").innerText = "₹" + itemTotal.toFixed(2);
  document.getElementById("toPayPrice").innerText =
    "₹" + (+itemTotal.toFixed(2) + 5.49).toFixed(2);
  document.getElementById("discountHeadingTop").innerText = (
    itemActualTotal - itemTotal
  ).toFixed(2);
}
