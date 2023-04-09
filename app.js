let modelBtn = document.querySelector('.modelBtn')
let overlay = document.querySelector('.overlay')
let btnBox = document.querySelector('.btnBox')
let closeBtn = document.querySelector('.closeBtn')
let modelOverlay = document.querySelector('.model-overlay')

modelBtn.addEventListener('click',() => {
    btnBox.classList.add("hidden")
    overlay.classList.add("showDisplay")
    modelOverlay.classList.add("showModel")
})

closeBtn.addEventListener('click', () => {
    btnBox.classList.remove("hidden")
    overlay.classList.remove("showDisplay")
    modelOverlay.classList.remove("showModel")
})