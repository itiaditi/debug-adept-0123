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
function changeURLWithoutRedirect(newUrl) {
  window.history.pushState({}, "", newUrl);
  //  localStorage.setItem("current_url", newUrl);
}
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
  });

  let customer = document.getElementById("customer");
  customer.addEventListener("click", () => {
    let url = `http://127.0.0.1:5500/account/customer-support`;
    changeURLWithoutRedirect(url);
  });

  // Add event listeners for other items similarly
});