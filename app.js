import {products} from "./products.js";
const wrapper = document.querySelectorAll("#wrapper")
const cart = document.querySelector(".cart")
const filter = document.querySelectorAll(".filter p span")

let TotalCart= 0;
function createEl(array){

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
     element.appendChild(imgElement)
     element.appendChild(imgFirstP)
     element.appendChild(imgSecondP)
     wrapper[0].appendChild(element)
     element.addEventListener("click", () => {
         TotalCart += card.price
         cart.lastElementChild.innerText = `🛒${TotalCart} $`
         
     })
   })
}
document.addEventListener("DOMContentLoaded", ()=>{
createEl(products)
})
cart.firstElementChild.addEventListener("click", ()=> alert(`stai spendendo : ${TotalCart}`))
function SortingArrayByName(){ alert("ordino per nome")}
function SortingArrayByPrice(){ alert("ordino per prezzo")}

filter.forEach((e)=>{
    console.log(e)
    e.addEventListener("click", (event)=> {
        if (event.target.outerText === "nome, ") SortingArrayByName()
        if (event.target.outerText === "prezzo") SortingArrayByPrice()
    })
})
//Da terminare sorting by name e price




