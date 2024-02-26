
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
let h4 =document.querySelector(".h4");
h4.textContent = localStorage.getItem("localAccessToken");
let logoutAdmin=document.getElementById("logoutCustomer");
logoutAdmin.addEventListener("click",(e)=>{
  e.preventDefault();
  localStorage.removeItem("localAccessToken");
  window.location.href=`../index.html`;
})


///***************************** */
let support = document.getElementById("support");
window.onload = function () {
  // Get the popup element
  var popup = document.getElementById("popup");
  support.style.display = "none";
  orders.style.background = "white";
  orders.style.color = "green";
  // Show the popup if it's not hidden in localStorage
  if (!localStorage.getItem("popup_hidden")) {
    popup.style.display = "block";
  }

  // Hide the popup when the user clicks anywhere
  window.onclick = function () {
    popup.style.display = "none";
    // Store in localStorage that popup is hidden
    localStorage.setItem("popup_hidden", true);
  };
};
customer.addEventListener("click", () => {
  orderDetail.style.display = "none";
  orders.style.background = "green";
  orders.style.color = "white";
  support.style.display = "block";
});
// function changeURLWithoutRedirect(newUrl) {
//   window.history.pushState({}, "", newUrl);
//   //  localStorage.setItem("current_url", newUrl);
// }
let orderDetail = document.getElementById("orderDetail");
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = localStorage.getItem("current_url");
  if (currentUrl) {
    window.history.replaceState({}, "", currentUrl);
  }

  let orders = document.getElementById("orders");
  orders.addEventListener("click", () => {
    // let url = `http://127.0.0.1:5500/index2.html`;
    // changeURLWithoutRedirect(url);
    orderDetail.style.display = "block";
    orders.style.background = "white";
    orders.style.color = "green";
    support.style.display = "none";
    customer.style.background = "green";
   customer.style.color = "white";
  });

  let customer = document.getElementById("customer");
  customer.addEventListener("click", () => {
    let url = `http://127.0.0.1:5500/account/customer-support`;
   // changeURLWithoutRedirect(url);
  customer.style.background = "white";
   customer.style.color = "green";
//    support.style.display = "none";
  });

  // Add event listeners for other items similarly
});

function logout() {
    // Clear any user authentication data
   // localStorage.removeItem('userAuthToken');
    localStorage.removeItem('userId');

    // Redirect to the login page or perform any other necessary actions
    window.location.href = '../index.html';
}