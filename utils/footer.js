export function togglerFooter() {
    const footer = document.getElementById("footer");
    let currentTime = new Date();
    const minutes = currentTime.getMinutes();
    const currentOpacity = window.getComputedStyle(footer).opacity;

    if ((minutes >= 15 && minutes <= 29) || (minutes >= 45 && minutes <= 59)) {
        if (currentOpacity !== "1") {
            footer.style.transition = "opacity 5s";
            footer.style.opacity = "1";
        }
    } else {
        if (currentOpacity !== "0") {
            footer.style.transition = "opacity 5s";
            footer.style.opacity = "0";
        }
    }
}


setInterval(togglerFooter, 1000);


