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
    let productDiv=document.createElement('div');
    let emptyBtn=document.createElement('button');
    emptyBtn.innerText='Empty cart';
    emptyBtn.style.border='1px solid hotpink';
    emptyBtn.addEventListener('click',emptyCart);
    // arr.forEach((element)=>{
        

    // })
    let box=document.getElementById('container');
    box.append(emptyBtn);
}
displayData(arr);




