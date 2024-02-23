let cartData=[
                {userid:1,total_price:250,
                 product:[{ "id": 1,
                                "img":"https://cdn.zeptonow.com/production///tr:w-450,ar-450-450,pr-true,f-webp,q-80/inventory/product/b2ca1889-4554-40be-b289-a9d8c7a05f95-image_file.jpeg",
                                "title": "Mango Totapuri",
                                "price": "₹123",
                                "price2":"₹151",
                                "weight":"1 kg (Approx. 4pcs - 5pcs)",
                                "quantity":2},  
                                
                             { "id": 2,
                                "img":"https://cdn.zeptonow.com/production///tr:w-450,ar-500-500,pr-true,f-webp,q-80/inventory/product/01e5ea5f-9b18-42e1-8c16-b00ea2af2f18-f8e39466-1999-455e-be70-395c295d9280.jpeg",
                                "title": "Mango Banganapalli",
                                "price": "₹137",
                                "price2":"₹166",
                                "weight":"1 kg (Approx. 3pcs - 4pcs)",
                                "quantity":2},
                            
                                { "id": 3,
                                "img":"https://cdn.zeptonow.com/production///tr:w-450,ar-500-500,pr-true,f-webp,q-80/inventory/product/7f2c9b0c-39d4-4ddd-893c-ea36e60e7633-48fb2ac1-2a7b-49bf-b83f-3d29c802a465.jpeg",
                                "title": "Grapes Black Seedless",
                                "price": "₹57",
                                "price2":"₹68",
                                "weight":"500 g",
                                "quantity":4
                                }],
                total_item:8,},
                {userid:2,total_price:500,
                    product:[{ "id": 4,
                                "img":"https://cdn.zeptonow.com/production///tr:w-450,ar-450-450,pr-true,f-webp,q-80/inventory/product/b2ca1889-4554-40be-b289-a9d8c7a05f95-image_file.jpeg",
                                "title": "Mango Totapuri",
                                "price": "₹123",
                                "price2":"₹151",
                                "weight":"1 kg (Approx. 4pcs - 5pcs)",
                                 "quantity":2},
                                 { "id": 6,
                                   "img":"https://cdn.zeptonow.com/production///tr:w-450,ar-770-627,pr-true,f-webp,q-80/inventory/product/306bb6cd-b9a4-46bb-a7c0-8f7c781c0420-image_file.jpeg",
                                   "title": "Orange Nagpur (Santara)",
                                   "price": "₹47",
                                   "price2":"₹57",
                                   "weight":"500 g",
                                   "quantity":5}],
                    total_item:7}]
                                 
                    // console.log(cartData[0].product);
                    let arr=cartData[1].product;

let uId=cartData[1].product.userid;

function displayData(arr)
{
    let box=document.getElementById('container');

    // top Box
    let topBox=document.createElement('div');
    topBox.style.border="1px solid green";
    topBox.style.width='65%';
    topBox.style.height='10vh';
    topBox.style.margin='auto';
    topBox.style.display='flex';
    topBox.style.justifyContent='space-Between';
    topBox.style.alignItems='center';

    let firstInnerBox=document.createElement('div');
    firstInnerBox.style.display='flex';
    firstInnerBox.style.justifyContent='space-between'
    firstInnerBox.style.alignItems='center';
    firstInnerBox.style.width='45%';
    firstInnerBox.style.border='1px solid teal';
    let cartHeading=document.createElement('h3');
    cartHeading.innerText='Cart(total items)';

    let priceDiv=document.createElement('div');
    priceDiv.style.display='flex';
    priceDiv.style.width='65%';
    priceDiv.style.borderRadius='7px';
    priceDiv.style.justifyContent='center';
    priceDiv.style.alignItems='center';
    priceDiv.style.backgroundColor='rgb(218,244,229)';

    let discountHeadingTop=document.createElement('h3');
    discountHeadingTop.innerText='₹120'; //need to calculate discont price
    discountHeadingTop.style.fontWeight='bold';
    discountHeadingTop.style.margin='0px'

    let discountText=document.createElement('p');
    discountText.innerText='saved on this order';
    discountText.style.marginTop='9px';
    discountText.style.marginLeft='10px';

    let emptyBtnDiv=document.createElement('div');
    emptyBtnDiv.style.height='35%';
    emptyBtnDiv.style.border='1px solid rgb(255,50,105)';
    emptyBtnDiv.style.padding='5px';
    emptyBtnDiv.style.borderRadius='5px'


    let emptyBtn=document.createElement('button');
    emptyBtn.innerText='Empty cart';
    emptyBtn.style.border='none';
    emptyBtn.addEventListener('click',()=>{
        console.log('HI');
        emptyCart(uiAfterRemovingProduct)
    } );
  
    emptyBtnDiv.append(emptyBtn);
    priceDiv.append(discountHeadingTop,discountText);
    firstInnerBox.append(cartHeading,priceDiv)
    topBox.append(firstInnerBox,emptyBtnDiv);
  



    //mainBox
    let mainBox=document.createElement('div');
    mainBox.style.border="1px solid green";
    mainBox.style.width='65%';
    mainBox.style.height='60vh';
    mainBox.style.margin='auto';
    mainBox.style.display='flex';
    mainBox.style.justifyContent='space-between'
    mainBox.style.alignItems='center';
   

    let leftBox=document.createElement('div');
    leftBox.style.height='100%';
    leftBox.style.width='58%';
    leftBox.style.border='1px dashed red';

    let rightBox=document.createElement('div');
    rightBox.style.height='100%';
    rightBox.style.width='40%';
    rightBox.style.border='1px dashed red';
   

    let firstInnerRightBox=document.createElement('div');
    firstInnerRightBox.style.display='flex';
    // firstInnerRightBox.style.border='1px solid blue';
    firstInnerRightBox.style.width='100%';
    firstInnerRightBox.style.height='10vh';
    firstInnerRightBox.style.borderRadius='10px';
    firstInnerRightBox.style.backgroundColor='white';
    firstInnerRightBox.style.marginTop='10px';
    firstInnerBox.style.display='flex';
   
    

    let firstBoximage=document.createElement('img')
    firstBoximage.style.borderRadius='50%';
    firstBoximage.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIWeQ3i6AWW1Bd0LhRJMjz0VrO_SUXNGbj2G52moiTfNwqYG7');

    let firstBoxText=document.createElement('p');
    firstBoxText.innerText='Avail Offers / Coupons';


    firstInnerRightBox.append(firstBoximage,firstBoxText);
    rightBox.append(firstInnerRightBox);

    let secondInnerRightBox=document.createElement('div');
    secondInnerRightBox.style.width='100%';
    secondInnerRightBox.style.height='20vh';
    secondInnerRightBox.style.borderRadius='10px';
    secondInnerRightBox.style.backgroundColor='white';
    secondInnerRightBox.style.marginTop='10px';

    let totalItemDiv=document.createElement('div');
    totalItemDiv.style.display='flex';
 
    let itemP=document.createElement('p');
    itemP.innerText='Item Total';

    let itemPrice=document.createElement('p');
    totalItemDiv.append(itemP,itemPrice);

    let handChargeDiv=document.createElement('div');
    handChargeDiv.style.display='flex';
   
    let handP=document.createElement('p');
    handP.innerText='Handling Charge';
    let handChargePrice=document.createElement('p');
    handChargeDiv.append(handP,handChargePrice);

    let convenienceDiv=document.createElement('div');
    convenienceDiv.style.display='flex';
    let convenienceP=document.createElement('p');
    convenienceP.innerText='Convenience Fee';
    let conveniencePrice=document.createElement('p');
    convenienceDiv.append(convenienceP,conveniencePrice);

    let deliveryDiv=document.createElement('div');
    deliveryDiv.style.display='flex';
    let deliveryP=document.createElement('p');
    deliveryP.innerText='Delivery Fee';
    let deliveryPrice=document.createElement('p');
    deliveryDiv.append(deliveryP,deliveryPrice);

    let toPayDiv=document.createElement('div');
    toPayDiv.style.display='flex';
    let toPayP=document.createElement('p');
    toPayP.innerText='To Pay';
    let toPayPrice=document.createElement('p');
    toPayDiv.append(toPayP,toPayPrice);


    secondInnerRightBox.append(totalItemDiv,handChargeDiv,convenienceDiv,deliveryDiv,toPayDiv);




















    rightBox.append(secondInnerRightBox);



    let thirdInnerRightBox=document.createElement('div');
    thirdInnerRightBox.style.display='flex';
    // thirdInnerRightBox.style.border='1px solid blue';
    thirdInnerRightBox.style.width='100%';
    thirdInnerRightBox.style.height='20vh';
    thirdInnerRightBox.style.borderRadius='10px';
    thirdInnerRightBox.style.backgroundColor='white';
    thirdInnerRightBox.style.marginTop='10px';
    rightBox.append(thirdInnerRightBox);

    mainBox.append(leftBox,rightBox);
    box.append(topBox,mainBox);


}
displayData(arr);



 //empty cart 
async function emptyCart(uiAfterRemovingProduct)
{
    try {
        let res= await fetch('url', {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            console.log('Cart data deleted successfully on the server.');
            localStorage.removeItem('cart');
        } else {
            console.log('Error deleting cart data on the server.');
        }
    } catch (error) {
        console.log( error);
    }
    uiAfterRemovingProduct();
}

function uiAfterRemovingProduct()
{
    let box=document.getElementById('container');
    box.innerHTML="";
    let uiBox=document.createElement('div');
    uiBox.style.width='100vw';
    uiBox.style.height='100vh';
    uiBox.style.border='1px solid yellow';

    let imageEmptyBag=document.createElement('img');
    imageEmptyBag.setAttribute('src','https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70');
    imageEmptyBag.style.width='3%';
   
    imageEmptyBag.style.margin='100px auto auto auto';
    imageEmptyBag.style.display='block'

    let emptyText=document.createElement('h4');
    emptyText.innerText='Your cart is empty';
    
   
    let innerBox=document.createElement('div');
    innerBox.style.display='flex';
    innerBox.style.justifyContent='center';

    let productBrowseDiv=document.createElement('div');

    let productBrowseBtn=document.createElement('button');
    productBrowseBtn.innerText='Browse Products';
    productBrowseBtn.style.color='rgb(255,50,105)';
    productBrowseBtn.style.border='none';
    productBrowseBtn.style.backgroundColor="rgb(245,241,247)";
    productBrowseBtn.style.fontWeight='bold';

   
    emptyText.style.display='flex';
    emptyText.style.justifyContent='center';

    productBrowseDiv.append(productBrowseBtn);
    productBrowseDiv.style.display='flex';
    productBrowseDiv.style.justifyContent='center';
    productBrowseDiv.style.width='8%';
    productBrowseDiv.style.border='1px solid rgb(255,50,105)';
    productBrowseDiv.style.padding='10px 3px 10px 3px';
    productBrowseDiv.style.borderRadius='5px'

    innerBox.append(productBrowseDiv);
    uiBox.append(imageEmptyBag,emptyText,innerBox);
    box.append(uiBox);
}






 




