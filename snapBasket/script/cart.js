let cartEmail = "indrani@gmail.com";

async function getData() {
  try {
    let res = await fetch(`http://localhost:3000/cart/${cartEmail}`);
    let data = await res.json();

    const products = data.product;
    let totalItem = data.totalItem;
    let totalAmount = data.totalAmount;

    displayData(products, totalItem, totalAmount);
  } catch (err) {
    console.log(err);
  }
}

getData();

function displayData(productArr, totalItem, totalAmount) {
  let box = document.getElementById("container");

  // top Box
  let topBox = document.createElement("div");
  topBox.style.border = "1px solid green";
  topBox.style.width = "65%";
  topBox.style.height = "10vh";
  topBox.style.margin = "auto";
  topBox.style.display = "flex";
  topBox.style.justifyContent = "space-Between";
  topBox.style.alignItems = "center";

  let firstInnerBox = document.createElement("div");
  firstInnerBox.style.display = "flex";
  firstInnerBox.style.justifyContent = "space-between";
  firstInnerBox.style.alignItems = "center";
  firstInnerBox.style.width = "45%";
  firstInnerBox.style.border = "1px solid teal";
  let cartHeading = document.createElement("h3");
  cartHeading.innerText = "Cart(total items)";

  let priceDiv = document.createElement("div");
  priceDiv.style.display = "flex";
  priceDiv.style.width = "65%";
  priceDiv.style.borderRadius = "7px";
  priceDiv.style.justifyContent = "center";
  priceDiv.style.alignItems = "center";
  priceDiv.style.backgroundColor = "rgb(218,244,229)";

  let discountHeadingTop = document.createElement("h3");
  discountHeadingTop.innerText = "₹120"; //need to calculate discont price
  discountHeadingTop.style.fontWeight = "bold";
  discountHeadingTop.style.margin = "0px";

  let discountText = document.createElement("p");
  discountText.innerText = "saved on this order";
  discountText.style.marginTop = "9px";
  discountText.style.marginLeft = "10px";

  let emptyBtnDiv = document.createElement("div");
  emptyBtnDiv.style.height = "35%";
  emptyBtnDiv.style.border = "1px solid rgb(255,50,105)";
  emptyBtnDiv.style.padding = "5px";
  emptyBtnDiv.style.borderRadius = "5px";

  let emptyBtn = document.createElement("button");
  emptyBtn.innerText = "Empty cart";
  emptyBtn.style.border = "none";
  emptyBtn.addEventListener("click", () => {
    console.log("HI");
    // emptyCart(uiAfterRemovingProduct);
  });

  emptyBtnDiv.append(emptyBtn);
  priceDiv.append(discountHeadingTop, discountText);
  firstInnerBox.append(cartHeading, priceDiv);
  topBox.append(firstInnerBox, emptyBtnDiv);

  //mainBox
  let mainBox = document.createElement("div");
  mainBox.style.border = "1px solid green";
  mainBox.style.width = "65%";
  mainBox.style.height = "70vh";
  mainBox.style.margin = "20px auto";
  mainBox.style.display = "flex";
  mainBox.style.justifyContent = "space-between";
  mainBox.style.alignItems = "center";

  let leftBox = document.createElement("div");
  leftBox.style.height = "100%";
  leftBox.style.width = "58%";
  leftBox.style.border = "1px dashed red";
  leftBox.style.backgroundColor = "white";
  leftBox.style.borderRadius = "10px";

  let rightBox = document.createElement("div");
  rightBox.style.height = "100%";
  rightBox.style.width = "40%";
  rightBox.style.border = "1px dashed red";

  let firstInnerRightBox = document.createElement("div");
  firstInnerRightBox.style.display = "flex";
  // firstInnerRightBox.style.border='1px solid blue';
  firstInnerRightBox.style.width = "100%";
  firstInnerRightBox.style.height = "10vh";
  firstInnerRightBox.style.borderRadius = "10px";
  firstInnerRightBox.style.backgroundColor = "white";
  firstInnerRightBox.style.marginTop = "10px";
  firstInnerBox.style.display = "flex";

  let firstBoximage = document.createElement("img");
  firstBoximage.style.borderRadius = "50%";
  firstBoximage.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIWeQ3i6AWW1Bd0LhRJMjz0VrO_SUXNGbj2G52moiTfNwqYG7"
  );

  let firstBoxText = document.createElement("p");
  firstBoxText.innerText = "Avail Offers / Coupons";

  firstInnerRightBox.append(firstBoximage, firstBoxText);
  rightBox.append(firstInnerRightBox);

  let secondInnerRightBox = document.createElement("div");
  secondInnerRightBox.style.width = "100%";
  secondInnerRightBox.style.height = "20vh";
  secondInnerRightBox.style.borderRadius = "10px";
  secondInnerRightBox.style.backgroundColor = "white";
  secondInnerRightBox.style.marginTop = "10px";

  let totalItemDiv = document.createElement("div");
  totalItemDiv.style.display = "flex";

  let itemP = document.createElement("p");
  itemP.innerText = "Item Total";

  let itemPrice = document.createElement("p");
  totalItemDiv.append(itemP, itemPrice);

  let handChargeDiv = document.createElement("div");
  handChargeDiv.style.display = "flex";

  let handP = document.createElement("p");
  handP.innerText = "Handling Charge";
  let handChargePrice = document.createElement("p");
  handChargeDiv.append(handP, handChargePrice);

  let convenienceDiv = document.createElement("div");
  convenienceDiv.style.display = "flex";
  let convenienceP = document.createElement("p");
  convenienceP.innerText = "Convenience Fee";
  let conveniencePrice = document.createElement("p");
  convenienceDiv.append(convenienceP, conveniencePrice);

  let deliveryDiv = document.createElement("div");
  deliveryDiv.style.display = "flex";
  let deliveryP = document.createElement("p");
  deliveryP.innerText = "Delivery Fee";
  let deliveryPrice = document.createElement("p");
  deliveryDiv.append(deliveryP, deliveryPrice);

  let toPayDiv = document.createElement("div");
  toPayDiv.style.display = "flex";
  let toPayP = document.createElement("p");
  toPayP.innerText = "To Pay";
  let toPayPrice = document.createElement("p");
  toPayDiv.append(toPayP, toPayPrice);

  secondInnerRightBox.append(
    totalItemDiv,
    handChargeDiv,
    convenienceDiv,
    deliveryDiv,
    toPayDiv
  );

  rightBox.append(secondInnerRightBox);

  let thirdInnerRightBox = document.createElement("div");
  thirdInnerRightBox.style.display = "flex";
  // thirdInnerRightBox.style.border='1px solid blue';
  thirdInnerRightBox.style.width = "100%";
  thirdInnerRightBox.style.height = "20vh";
  thirdInnerRightBox.style.borderRadius = "10px";
  thirdInnerRightBox.style.backgroundColor = "white";
  thirdInnerRightBox.style.marginTop = "10px";
  rightBox.append(thirdInnerRightBox);

  mainBox.append(leftBox, rightBox);
  box.append(topBox, mainBox);

  //leftBox display data
  productArr.forEach((element) => {
    let parentBox = document.createElement("div");
    parentBox.style.display = "flex";
    parentBox.style.border = "1px solid green";
    parentBox.style.width = "90%";
    parentBox.style.margin = "30px auto 20px auto";
    let imageBox = document.createElement("div");
    imageBox.style.width = "20%";
    let imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", element.imageLink);
    imageProduct.style.width = "100%";
    let middleBox = document.createElement("div");

    let proName = document.createElement("p");
    proName.innerText = element.productName;

    let proQuantity = document.createElement("p");
    proQuantity.innerText = element.quantity;

    let proPrice = document.createElement("p");
    proPrice.innerText = element.price;

    let btnBox = document.createElement("div");
    btnBox.style.display = "flex";
    btnBox.style.border = "1px solid";
    btnBox.style.height = "25px";
    btnBox.style.width = "70px";
    btnBox.style.justifyContent = "space-between";
    btnBox.style.alignItems = "center";
    btnBox.style.borderRadius = "7px";
    btnBox.style.padding = "5px 10px";
    btnBox.style.backgroundColor = "rgb(255,50,105)";

    let decBtn = document.createElement("button");
    decBtn.innerText = "-";
    decBtn.style.border = "none";
    decBtn.style.background = "rgb(255,50,105)";
    decBtn.style.color = "white";
    decBtn.addEventListener("click", () => eachProductDecrement(element)); //decrement

    let quantityP = document.createElement("p");

    quantityP.innerText = element.eachProductCount; //total quantity key is not present on db now
    quantityP.style.color = "white";
    let incBtn = document.createElement("button");
    incBtn.innerText = "+";
    incBtn.style.border = "none";
    incBtn.style.background = "rgb(255,50,105)";
    incBtn.style.color = "white";
    incBtn.addEventListener("click", (e) => {
      e.preventDefault();
      eachProductIncrement(element, [...productArr], totalItem, totalAmount);
    }); //increment

    imageBox.append(imageProduct);
    middleBox.append(proName, proQuantity, proPrice);
    btnBox.append(decBtn, quantityP, incBtn);
    parentBox.append(imageBox, middleBox, btnBox);
    leftBox.append(parentBox);
  });
}

// function eachProductDecrement(product) {
//   console.log(product);
// }

// async function decrementPatch(val) {
//   try {
//     let res = await fetch(`http://localhost:3000/cart/${cartEmail}`, {
//       method: "PATCH",
//       body: JSON.stringify({
//         product: [{ eachProductCount: "val" }],
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (res.ok) {
//       console.log("Cart data deleted successfully on the server.");
//       localStorage.removeItem("cart");
//     } else {
//       console.log("Error deleting cart data on the server.");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }




// Increment cart product
function eachProductIncrement(product, allProducts, totalItem, totalAmount) {
  allProducts.forEach((el) => {
    if (el.id === product.id) {
      el.eachProductCount = +el.eachProductCount + 1 + "";
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
  // console.log("Hello");
  // return;
  try {
    let res = await fetch(`http://localhost:3000/cart/${cartEmail}`, {
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
    console.log(data);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// document.getElementById("update_btn").addEventListener("click", () => {updateData(cartUserId)});

// //delete Data function
// async function deleteData(cartid)
// {
//   try{
//     let res=await fetch(`http://localhost:3000/cart/${cartid}`,{method:'DELETE'});
//     console.log(res);
//   }
//   catch(error)
//   {
//     console.log(error);
//   }
// }

// document.getElementById('delete_btn').addEventListener('click',()=>{deleteData(cartid)});

// empty cart
// async function emptyCart() {
//   try {
//     let res = await fetch(`http://localhost:3000/cart/${cartEmail}`, {
//       method: "PATCH",
//       body: JSON.stringify({
//         product: [],
//         totalItem: "0",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (res.ok) {
//       console.log("Cart data deleted successfully on the server.");
//       localStorage.removeItem("cart");
//     } else {
//       console.log("Error deleting cart data on the server.");
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   uiAfterRemovingProduct();
// }

// function uiAfterRemovingProduct() {
//   console.log("mimi");
//   let box = document.getElementById("container");
//   box.innerHTML = "";
//   let uiBox = document.createElement("div");
//   uiBox.style.width = "100vw";
//   uiBox.style.height = "100vh";
//   uiBox.style.border = "1px solid yellow";

//   let imageEmptyBag = document.createElement("img");
//   imageEmptyBag.setAttribute(
//     "src",
//     "https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70"
//   );
//   imageEmptyBag.style.width = "3%";

//   imageEmptyBag.style.margin = "100px auto auto auto";
//   imageEmptyBag.style.display = "block";

//   let emptyText = document.createElement("h4");
//   emptyText.innerText = "Your cart is empty";

//   let innerBox = document.createElement("div");
//   innerBox.style.display = "flex";
//   innerBox.style.justifyContent = "center";

//   let productBrowseDiv = document.createElement("div");

//   let productBrowseBtn = document.createElement("button");
//   productBrowseBtn.innerText = "Browse Products";
//   productBrowseBtn.style.color = "rgb(255,50,105)";
//   productBrowseBtn.style.border = "none";
//   productBrowseBtn.style.backgroundColor = "rgb(245,241,247)";
//   productBrowseBtn.style.fontWeight = "bold";

//   emptyText.style.display = "flex";
//   emptyText.style.justifyContent = "center";

//   productBrowseDiv.append(productBrowseBtn);
//   productBrowseDiv.style.display = "flex";
//   productBrowseDiv.style.justifyContent = "center";
//   productBrowseDiv.style.width = "8%";
//   productBrowseDiv.style.border = "1px solid rgb(255,50,105)";
//   productBrowseDiv.style.padding = "10px 3px 10px 3px";
//   productBrowseDiv.style.borderRadius = "5px";

//   innerBox.append(productBrowseDiv);
//   uiBox.append(imageEmptyBag, emptyText, innerBox);
//   box.append(uiBox);
// }
