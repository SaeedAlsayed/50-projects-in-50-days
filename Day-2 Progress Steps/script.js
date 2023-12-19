const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1
let widthSize = 0
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    widthSize += 31

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    widthSize -= 31
    update()
})

const update = () => {
    circles.forEach( (circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
            progress.style.width = `${widthSize}%`
            console.log(widthSize)
        }else {
            circle.classList.remove('active')
        }
    })
    if (currentActive === circles.length) {
        next.setAttribute('disabled','')
    }else{
        next.removeAttribute('disabled')
    }
    if (currentActive > 1){
        prev.removeAttribute('disabled')
    } else {
        prev.setAttribute('disabled','')
    }
}