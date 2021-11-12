import {products} from "./products.js";

const wrapper = document.querySelectorAll("#wrapper")
const filter = document.querySelectorAll(".filter p span")

const cart = document.querySelector(".cart")
let totalCart = localStorage.getItem("totalPrice");


//--------------------------Local storage
function loadStorage(){
    if (totalCart == undefined || null) localStorage.setItem("totalPrice", 0)
    totalCart = parseInt(localStorage.getItem("totalPrice"))
    cart.textContent = `🛒 ${totalCart} $`
}
function saveStorage(key, attribute){
    localStorage.setItem(key, attribute)
}

//--------------------------Add to cart
const addToCart = (element,card) => {

    element.addEventListener("click", () => {
    totalCart += parseInt(card.price)
    saveStorage("totalPrice",totalCart)
    cart.textContent = `🛒 ${totalCart} $`
      
})}
//----------------------------Render
function render(array){

    wrapper[0].textContent= ""
    
    array.map( (card) => {
     const element = document.createElement("div");
     const imgElement = document.createElement("img");
     const imgFirstP = document.createElement("p");
     const imgSecondP = document.createElement("p");
     imgElement.src = card.image;
     imgElement.alt = card.title;
     imgElement.title = card.category;
     imgFirstP.textContent = card.title;
     imgSecondP.textContent = `${card.price} $`;
     element.className = "card";
     imgSecondP.setAttribute("id", "price")
     element.setAttribute("identify", card.id)
     element.appendChild(imgElement)
     element.appendChild(imgFirstP)
     element.appendChild(imgSecondP)
     wrapper[0].appendChild(element)
     addToCart(element, card)
     

   })
}
document.addEventListener("DOMContentLoaded", ()=>{
loadStorage()
render(products)
cart.textContent = `🛒 ${totalCart} $`
})