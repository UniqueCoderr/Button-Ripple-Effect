const butE = document.querySelector(".btn")

butE.addEventListener("mouseover",(event)=>{
    const x=(event.pageX -butE.offsetLeft)
    const y=(event.pageY -butE.offsetTop)

    butE.style.setProperty("--xPos", x + "px")
    butE.style.setProperty("--yPos", y + "px")
})