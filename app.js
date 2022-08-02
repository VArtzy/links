window.addEventListener("DOMContentLoaded", () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color2: 0xff00f0,
        wingSpan: 40.0,
        separation: 100.0,
        alignment: 77.0,
        cohesion: 5.0,
        quantity: 1.0,
    })
    let count = 0
    const links = document.querySelectorAll("li")
    setInterval(() => {
        if (count === 4) {
            count = 0
        } else {
            if (count === 0) {
                links[3].classList.remove("animate__swing")
            } else {
                links[count - 1].classList.remove("animate__swing")
            }
            links[count].classList.add("animate__swing")
            count++
        }
    }, 5000)
    setTimeout(() => {
        const main = document.querySelector("main")
        const footer = document.querySelector("footer")
        main.style.opacity = 1
        main.style.filter = "blur(0px)"
        footer.style.opacity = 1
        footer.style.filter = "blur(0px)"
        footer.style.transform = "translateY(0)"
    }, 1000)
})
