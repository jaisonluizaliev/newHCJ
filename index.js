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