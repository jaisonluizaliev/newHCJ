/*
* DropDown=============================
*/
const btn = document.querySelector(".btn")
const drop = document.querySelector(".dropdown")

btn.addEventListener('click', () => {
  drop.classList.toggle("hidden")
})

window.addEventListener("click", (event) => {
  if(event.target !== btn) {
    drop.classList.add("hidden")
  }
})

btn.addEventListener('click', () => {
  if(drop.getAttribute() === "hidden") {
    drop.classList.remove("hidden")
  }
})

/*
* Burguer=============================
*/
const btnMenu = document.querySelector('.btn-menu')
const menuId = document.querySelector('#menu')

btnMenu.addEventListener('click', () => {
    menuId.classList.toggle('hidden')
})

// window.addEventListener("click", (event)=> {
//   if(!event.target.classList.contains("btn-menu")) {
//     menuId.classList.add("hidden")
//   }
// })