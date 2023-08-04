let username= document.querySelector("#username")
let passwordf= document.querySelector("#password")
let loginrbtn=document.querySelector("#sign-in")

let getusername=localStorage.getItem("username")
let getuserpassword=localStorage.getItem("password")

loginrbtn.addEventListener("click",function(e){
e.preventDefault()
if (username.value ==="" ||  password.value ==="" ){
    alert("enter your  data")
}else {
    if (getusername&&getusername.trim()===username.value.trim() &&getuserpassword===password.value)
    setTimeout( () =>{
        window.location="index.html"
    })
    else {
        alert("username or password is wrong ")
    }
} 
    


})