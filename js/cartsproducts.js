let productsInCart =localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products")
if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}
function drawCartProducts(products){
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
            <button class="add-to-cart" onClick="removeFromCart(${item.id})">remove from cart</button>
        </div>
    </div>  
        `
    })
    allproducts.innerHTML = y ;
}




let productsInCart2 =localStorage.getItem("productsInCart")
let allproducts2 = document.querySelector(".products2")
if(productsInCart2){
    let item = JSON.parse(productsInCart2);
    drawCartProducts2(item)
}
function drawCartProducts2(products2){
    let y = products2.map((item)=>{
        return `
        <div class="product-item2">
        <img class="product-item-img2" src="${item.imageurl}" alt="">
        <div class="product-item-desc2">
            <h2> ${item.tittle}</h2>
            <p>${item.des}</p>
            <span>${item.color}</span>
        </div>
        <div class="product-item-action2">
            <button class="add-to-cart" onClick="removeFromCart(${item.id})">remove from cart</button>
        </div>
    </div>  
        `
    })
    allproducts2.innerHTML = y ;
}








function removeFromCart(id){
    let productBtn = document.querySelector(".add-to-cart")
    let choosenItem = JSON.parse(localStorage.getItem("productsInCart"));
    choosenItem =choosenItem.filter((item)=> item.id !==id);
    localStorage.setItem("productsInCart",JSON.stringify(choosenItem));
    allproducts.innerHTML="";
for ( let item of choosenItem){
    allproducts.innerHTML += `
    <div class="product-item">
    <img class="product-item-img" src="${item.imageurl}" alt="">
    <div class="product-item-desc">
        <h2> ${item.tittle}</h2>
        <p>${item.des}</p>
        <span>${item.color}</span>
    </div>
    <div class="product-item-action">
        <button class="add-to-cart" onClick="removeFromCart(${item.id})">remove from cart</button>
    </div>
</div>  
    `;
}
}





