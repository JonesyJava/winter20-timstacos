let items  = [
{
  name: "Street Tacos",
  price: 8,
  img: "https://media.istockphoto.com/photos/spicy-homemade-beef-barbacoa-tacos-picture-id960337396?k=6&m=960337396&s=612x612&w=0&h=JHvHpv-7OmGIklZd1qWPsQ_OfwwKiheorszp143RVg8=",
  id: "gh4wyuigbt4uievrbgewu8prbi3"
},
{
  name: "Streeturrito",
  price: 14,
  img: "https://carneandpapas.com/wp-content/uploads/2014/04/carneburritofinal.jpg",
  id: "349pvrt3uiyVGR238WYIVGRYUIW"
},
{
  name: "Streetadilla",
  price: 20,
  img: "https://hips.hearstapps.com/hmg-prod/images/delish-cheese-crusted-quesadilla-still004-1555521419.jpg",
  id: "4euigbt32p9gbtr239ohbrtio3A"
}
]
let cart = JSON.parse(localStorage.getItem("cartData")) ||  []

// let itemArea =  document.getElementById("items")

function drawItems(){
  let template = ""
  //NOTE using a foreach instead of forLoop to build template
// items.forEach(f => template +=  `<div class="card text-left col-3">
// <img class="card-img-top"
//   src="${f.img}"
//   alt="">
// <div class="card-body">
//   <h4 class="card-title">${f.name}</h4>
//   <p class="card-text">${f.price}</p>
//   <button class="btn btn-primary" onclick="orderItem('${f.id}')"> Order</button>
// </div>
// </div> `)

for (let i = 0; i < items.length; i++) {
  const f = items[i];
  template +=  `<div class="card text-left col-3">
<img class="card-img-top"
  src="${f.img}"
  alt="">
<div class="card-body">
  <h4 class="card-title">${f.name}</h4>
  <p class="card-text">${f.price}</p>
  <button class="btn btn-primary" onclick="orderItem('${f.id}')"> Order</button>
</div>
</div> `
  
}
// console.log(template)
// itemArea.innerHTML = template

document.getElementById("items").innerHTML = template
// console.log(template)
}

function drawCart(){
  let template = ""
  let priceSum = 0
  for (let i = 0; i < cart.length; i++) {
    const f = cart[i];
    template += f.name + "\n"
    priceSum += f.price
  }
  document.getElementById("total").innerText = priceSum.toString()
  document.getElementById("cart").innerHTML = template
}


function orderItem(itemId){
  console.log(itemId)
  //NOTE using a find method to retrieve item from collection
  // let itemToAdd = items.find(f => f.id == itemId)

  let itemToAdd;
  for (let i = 0; i < items.length; i++) {
    const f = items[i];
    if(f.id ==  itemId){
      itemToAdd = f
    }
  }
  cart.push(itemToAdd);
  console.log(cart)
  drawCart()

  localStorage.setItem("cartData", JSON.stringify(cart))
}

function buyNow(){
  // cart = []
  cart.length = 0
  drawCart()
  
  let messageArea = document.getElementById("message")

  messageArea.innerText = "Thank you for your purchase"

  setTimeout(() => {
    messageArea.innerText = ""
  }, 5000);

  localStorage.setItem("cartData", JSON.stringify(cart))


}


let color ="primary"
function toggleBgs(){
let elems = document.querySelectorAll(`.bg-${color}`)
console.log(elems)
  for (let i = 0; i < elems.length; i++) {
    const element = elems[i];
   element.classList.remove(`bg-${color}`)
   if(color == "primary"){
     color = "success"
   } else {
     color = "primary"
   }
   element.classList.add(`bg-${color}`)
  }
}

let toggleInterval = setInterval(toggleBgs, 500)

setTimeout(() => {
  clearInterval(toggleInterval)
}, 5000);

// setInterval(() => {
//   let elems = document.querySelectorAll(`.bg-${color}`)
// console.log(elems)
//   for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//    element.classList.remove(`bg-${color}`)
//    if(color == "primary"){
//      color = "success"
//    } else {
//      color = "primary"
//    }
//    element.classList.add(`bg-${color}`)
//   }
// }, 500);


function hotSauce(){
  let cards = document.querySelectorAll(`.card`)
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.classList.add("fa-spin")
    // @ts-ignore
    document.getElementById("song").play()
    setTimeout(()=>{
      card.classList.remove("fa-spin")
    // @ts-ignore
    document.getElementById("song").pause()

    }, 15000)
  }
}


drawItems()
drawCart()
toggleBgs()