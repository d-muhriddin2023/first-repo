const heading = document.querySelector(".heading")
const btn = document.querySelector(".btn")

let toggle = false

btn.addEventListener("click", toggleModal)

function toggleModal() {
  toggle = !toggle
  if (toggle) {
    heading.classList.add("active")
  } else {
    heading.classList.remove("active")
  }
}