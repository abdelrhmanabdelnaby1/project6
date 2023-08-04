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



let allproducts = document.querySelector(".product")
let products =[
    {
        id:1,
        tittle:"iphone 14 pro max",
        color:"black",
        imageurl:"images/download (3).jpg",
        des:"new mobile 256g"
    },
    {
        id:2,
        tittle:"samsung s23 ultra",
        color:"black",
        imageurl:"images/download (1).jpg",
        des:"new mobile 256g"
    },
    {
        id:3,
        tittle:"apple watch series 8",
        color:"white",
        imageurl:"images/download (2).jpg",
        des:"apple watch"
    },
    {
        id:4,
        tittle:"samsung watch 4",
        color:"gray",
        imageurl:"images/download (4).jpg",
        des:"samsung watch"
    },
    {
        id:5,
        tittle:"playstation 5",
        color:"white",
        imageurl:"images/charles-sims-QHha7JOJYnw-unsplash.jpg",
        des:"playstation 5 1 terabyte"
    },
    {
        id:6,
        tittle:"TV",
        color:"color:BLACK",
        imageurl:"images/marques-kaspbrak-5wThjqG6HBU-unsplash.jpg",
        des:"samsung curve 65"
    },
    {
        id:7,
        tittle:"Macbook",
        color:"color:WHITE,BLACK,GRAY",
        imageurl:"images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg",
        des:"Macbook 265G"
    },
    {
        id:8,
        tittle:"SONY",
        color:"color: WHITE,BLACK",
        imageurl:"images/kiran-ck-7KMhZqylgss-unsplash.jpg",
        des:"Sony headphones"
    }
]
function draw (){
    let y = products.map((item)=>{
        return `
        <div class="product-item">
        <img class="product-item-img" src="${item.imageurl}" alt="">
        <div class="product-item-desc">
            <h2> ${item.tittle}</h2>
            <p>${item.des}</p>
            <span>${item.color}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onClick="addtocart(${item.id})">Add to cart</button>
            <i class="fas fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allproducts.innerHTML = y ;
}
draw()



// let allproducts2 = document.querySelector(".product2")
// let products2 =[
//     {
//         id:9,
//         tittle:"T-SHIRT",
//         color:"color:WHITE,BLACK,GRAY",
//         imageurl:"images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg",
//         des:"t-shirt basic"
//     },
//     {
//         id:10,
//         tittle:"T-SHIRT",
//         color:"color:WHITE,BLACK,GRAY,BLUE",
//         imageurl:"images/faith-yarn-hgtWvsq5e2c-unsplash.jpg",
//         des:"T-SHIRT"
//     },
//     {
//         id:11,
//         tittle:"SHOSE",
//         color:"color: WHITE",
//         imageurl:"images/trendest-studio-XZ3EmAIWuz0-unsplash.jpg",
//         des:"WHITE SHOSE"
//     },
//     {
//         id:12,
//         tittle:" SHOSE",
//         color:" color:BROWN",
//         imageurl:"images/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
//         des:"NIKE SHOSE"
//     }
// ]

// function draw2(){
//     let y= products2.map((item)=>{
//         return `
//         <div class="product-item2">
//         <img class="product-item-img2" src="${item.imageurl}" alt="">
//         <div class="product-item-desc2">
//             <h2> ${item.tittle}</h2>
//             <p>${item.des}</p>
//             <span>${item.color}</span>
//         </div>
//         <div class="product-item-action2">
//             <button class="add-to-cart2" onClick="addtocart(${item.id})">Add to cart</button>
//             <i class="fas fa-heart fav"></i>
//         </div>
//     </div>
//         `
//     })
//     allproducts2.innerHTML = y;
// }
// draw2()


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
            let choosenItem = products.find((item) => item.id ===id);

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


