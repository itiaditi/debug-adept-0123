const baseServerURL = `https://debug-adept-0123.onrender.com`;
let productUrl = `${baseServerURL}/Fruits`;

const tbody = document.getElementById("tbody");
//const tableBody =document.getElementById("tableBody");
tbody.style.overflow="auto";

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// let dashBtn = document.getElementById("dashboardBtn");
// let dashChange = document.getElementById("dashboard");
// dashBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     dashChange.style.display="block";
// })




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// menuBar.addEventListener('click', function () {
// 	sidebar.classList.toggle('hide');
// })







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
let darkModeToggle = document.getElementById("switch-mode");
darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
  });

//fetch data

async function fetchData(url, queryParamString="") {
    try {
        let res = await fetch(`${url}&${queryParamString}`);
  
        //to do pagination
  
        let TotalData = res.headers.get("X-Total-Count");
        let limit = 10;
        let TotalPage = Math.ceil(TotalData / limit);
        pagination(TotalPage,queryParamString);
        let data = await res.json();
        appendProductData(data);
        console.log(data);
  
    } catch (err) {
        console.log(err);
    }
  }
  
  fetchData(`${productUrl}?_page=1&_limit=10`)


  //product addition on setting
  let tableData=document.querySelector("table-data");

  async function deleteArt(id){
    try{
    
  let res = await fetch(`${productUrl}/${id}`,{
    method:"DELETE"
  });
  let data = await res.json();
  console.log(data);
  fetchData(`${productUrl}?_page=1&_limit=10`)
    }catch(err){
      console.log(err);
    }
  }
//   function createCard(obj){
//     let tr = document.createElement("tr");
//     tr.dataset.id = obj.id;
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     let td5 = document.createElement("td");
//     let  td6=document.createElement("td");
//     let td7 = document.createElement("td");
//     let img = document.createElement("img");
//     img.src = obj.imageLink;
//     td1.append(img);

//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('card-button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.dataset.id = obj.id;
//     deleteButton.addEventListener('click', ()=>{
//       deleteArt(obj.id)
//     });
//     const updateBtn = document.createElement('button');
//     deleteButton.classList.add('card-button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.dataset.id = obj.id;
//     deleteButton.addEventListener('click', ()=>{
//       deleteArt(obj.id)
//     });
//     td6.append(deleteButton);
//     td2.textContent=obj.productName;
//     td3.textContent=obj.quantity;
//     td4.textContent=obj.price;
//     td5.textContent=obj.offers;
//     tr.append(td1,td2,td3,td4,td5,td6);
//     return tr;    

//   }
function createCard(obj) {
    let tr = document.createElement("tr");
    tr.dataset.id = obj.id;

    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.src = obj.imageLink;
    td1.append(img);

    let td2 = document.createElement("td");
    td2.contentEditable = true; // Make the title editable
    td2.textContent = obj.productName;

    let td3 = document.createElement("td");
    td3.contentEditable = true; // Make the quantity editable
    td3.textContent = obj.quantity;

    let td4 = document.createElement("td");
    td4.contentEditable = true; // Make the price editable
    td4.textContent = obj.price;

    let td5 = document.createElement("td");
    td5.contentEditable = true; // Make the offers editable
    td5.textContent = obj.offers;
    let td6 = document.createElement("td");
    let updateButton = document.createElement('button');
    updateButton.classList.add('card-button');
    updateButton.textContent = 'Update';
    updateButton.dataset.id = obj.id;
    updateButton.addEventListener('click', () => {
        updateAllFields(obj.id);
    });
    td6.append(updateButton);

    let td7 = document.createElement("td");
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('card-button');
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.id = obj.id;
    deleteButton.addEventListener('click', () => {
        deleteArt(obj.id);
    });
    td7.append(deleteButton);

    tr.append(td1, td2, td3, td4, td5, td6,td7);
    return tr;
}

  let paginationWrapper = document.getElementById("pagination-wrapper");
 // let paginationWrapper1 = document.getElementById("pagination-wrapper1");
  function pagination(TotalPage,queryParamString){
    paginationWrapper.innerHTML="";
   // paginationWrapper1.innerHTML="";
    for(let i=1;i<=TotalPage;i++){
      let btn = document.createElement("button");
      btn.style.padding="10px";
      btn.style.margin="2px";
      btn.style.background="#54B227";
      btn.style.border="none";
      btn.style.borderRadius="4px";
      btn.style.color="white";
      btn.style.fontSize="20px";

      btn.innerText = i;
      btn.addEventListener("click",()=>{
  fetchData(`${productUrl}?_page=${i}&_limit=10`,queryParamString);
      });
      paginationWrapper.append(btn);
    //  paginationWrapper1.append(btn);
    }
  }

  async function updateAllFields(artId) {
    const tr = document.querySelector(`tr[data-id="${artId}"]`);
    if (!tr) return;

    const updatedArt = {
        productName: tr.querySelector('td:nth-child(2)').textContent,
        quantity: tr.querySelector('td:nth-child(3)').textContent,
        price: tr.querySelector('td:nth-child(4)').textContent,
        offers: tr.querySelector('td:nth-child(5)').textContent
        // Add more fields as necessary
    };

    try {
        // Make a PATCH request to update the art
        await fetch(`${productUrl}/${artId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedArt)
        });
        // Update the list without reloading the page
        fetchData(`${productUrl}?_page=1&_limit=5`);
    } catch (err) {
        console.error('Error updating art:', err);
    }
}

  let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");
const searchBySelect = document.getElementById("search-by-input")
  // Add event listener to search button
searchByButton.addEventListener('click', async () => {
    const searchBy = searchBySelect.value;
    const searchTerm = searchByInput.value;
    let queryParamString = '';
    if (searchTerm.trim() !== '') {
        queryParamString = `${searchBy}_like=${searchTerm}`;
    }
    try {
        const res = await fetchData(`${productUrl}?_page=1&_limit=10&${queryParamString}`);
        if (res.ok) {
            const data = await res.json();
            appendProductData(data);
        } else {
            console.error('Failed to search arts:', res.status);
        }
    } catch (err) {
        console.error('Error searching arts:', err);
    }
  });
  function appendProductData(data){
        tbody.innerHTML="";
        
        data.forEach(item=>{
          let card =createCard(item);
          tbody.append(card);
          
        })
        //to cleanup of data list wrapper
       
      
  }
//   function appendProductData(data){
//     tableBody.innerHTML="";
//     data.forEach(item=>{
//       let card =createCard(item);
//       tableBody.append(card);
      
//     })
    
   
  
//}
let productPage = document.getElementById("Product")
  let modify = document.getElementById("productPage");
  let modifyPage=document.getElementById("modification");
  modify.addEventListener("click",(e)=>{
    e.preventDefault();
productPage.style.display="none";
modifyPage.style.display="block";

  })


  let visitorRecords =
          JSON.parse(localStorage.getItem("visitorRecords")) || [];
        // Display the count of visitor records
        document.getElementById("visitorCount").textContent =
          visitorRecords.length;

          let logoutAdmin=document.getElementById("logoutAdmin");
          logoutAdmin.addEventListener("click",(e)=>{
            e.preventDefault();
            localStorage.removeItem("localAdminToken");
            window.location.href=`../index.html`;
          })