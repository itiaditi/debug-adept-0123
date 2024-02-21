function changeURLWithoutRedirect(newUrl) {
    // Using the History API to push a new state to the browser history
    // This changes the URL without causing a full page reload
    window.history.pushState({}, "", newUrl);
  }

  document.addEventListener("DOMContentLoaded", function () {
    let url = `http://127.0.0.1:5501/debug-adept-0123/snapBasket/html/login.html/order`;
    let orders = document.getElementById("orders");
    orders.addEventListener("click", () => {
      changeURLWithoutRedirect(url);
    });
  });