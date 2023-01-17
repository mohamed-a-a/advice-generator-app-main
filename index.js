const contain = document.querySelector(".container")
const adid = document.getElementById("adviceid")
const advice = document.querySelector(".advice")

const btn = document.querySelector(".btn")

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")


    const data = await res.json()

    adid.innerHTML = data.slip.id

    advice.innerHTML = data.slip.advice



}





btn.addEventListener("click", function () {

    getAdvice()



})











