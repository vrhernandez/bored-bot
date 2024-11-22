import { colorList } from "/colors.js"
const body = document.querySelector("body")
const btn = document.getElementById("btn")
const activityText = document.getElementById("activity-text")


btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityText.textContent = data.activity
            body.style.background = getRandomColor()
        })
})

function getRandomColor() {
    let random = Math.floor(Math.random()*colorList.length)
    console.log(random)
    return colorList[random]
}