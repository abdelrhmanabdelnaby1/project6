let userInfo =document.querySelector("#user-info")
let userData=document.querySelector("#user")
let links = document.querySelector("#links")

if( localStorage.getItem("username")){
links.remove()
userInfo.style.display ="flex"
userData.innerHTML= localStorage.getItem("username")
}

let logOutBtn= document.querySelector("#logout")

logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {
     window.location="login.html"
    } ,1500)
})

let allproducts2 = document.querySelector(".product2")
let products2 =[
    {
        id:9,
        tittle:"T-SHIRT",
        color:"color:WHITE,BLACK,GRAY",
        imageurl:"images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg",
        des:"t-shirt basic"
    },
    {
        id:10,
        tittle:"T-SHIRT",
        color:"color:WHITE,BLACK,GRAY,BLUE",
        imageurl:"images/faith-yarn-hgtWvsq5e2c-unsplash.jpg",
        des:"T-SHIRT"
    },
    {
        id:11,
        tittle:"SHOSE",
        color:"color: WHITE",
        imageurl:"images/trendest-studio-XZ3EmAIWuz0-unsplash.jpg",
        des:"WHITE SHOSE"
    },
    {
        id:12,
        tittle:" SHOSE",
        color:" color:BROWN",
        imageurl:"images/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
        des:"NIKE SHOSE"
    }
]

function draw2(){
    let y= products2.map((item)=>{
        return `
        <div class="product-item2">
        <img class="product-item-img2" src="${item.imageurl}" alt="">
        <div class="product-item-desc2">
            <h2> ${item.tittle}</h2>
            <p>${item.des}</p>
            <span>${item.color}</span>
        </div>
        <div class="product-item-action2">
            <button class="add-to-cart2" onClick="addtocart(${item.id})">Add to cart</button>
            <i class="fas fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allproducts2.innerHTML = y;
}
draw2()

let cartProuductDiv =document.querySelector(".carts-products div")
let badge = document.querySelector(".badge")


let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")): [];
if(addedItem){
    addedItem.map(item =>{
        cartProuductDiv.innerHTML += `<p>${item.tittle}</p>`;
        badge.style.display="block";
        badge.innerHTML = addedItem.lenght
     })
     
}

    if(localStorage.getItem=("username")){
        function  addtocart (id){ 
            let choosenItem = products2.find((item) => item.id ===id);

            cartProuductDiv.innerHTML += `<p>${choosenItem.tittle}</p>`;
            

            addedItem=[...addedItem , choosenItem]
            localStorage.setItem("productsInCart" ,JSON.stringify(addedItem))


            

        let cartProductsLenght =document.querySelectorAll(".carts-products div p")
        badge.style.display="block";
        badge.innerHTML=cartProductsLenght.length;
        }   
    }else{
        window.location="login.html"
    }

let shoppingCartIcon =document.querySelector(".shopping-cart")
let cartsProudcts = document.querySelector (".carts-products")
shoppingCartIcon.addEventListener("click", opencart)
function opencart(){
    if(cartProuductDiv.innerHTML !=""){
        if(cartsProudcts.style.display == "block"){
            cartsProudcts.style.display="none"
        }else{
            cartsProudcts.style.display="block"
        }
    }
}





