// export function marquee() {
//     // Pobieramy element z tekstem
//     const marqueeText = document.getElementById("marqueeText");
//     const textContent = marqueeText.innerHTML;
    
//     // Obliczamy czas trwania animacji na podstawie długości tekstu
//     const textLength = marqueeText.offsetWidth;
//     const animationDuration = textLength / 100; // Stała prędkość przewijania: 100px na sekundę
    
//     // Tworzymy kopie tekstu do zapewnienia ciągłości przewijania
//     let newTextContent = "";
//     const copies = Math.ceil(window.innerWidth / textLength) + 1;
//     for (let i = 0; i < copies; i++) {
//         newTextContent += textContent + " ";
//     }
    
//     // Aktualizujemy tekst w kontenerze
//     marqueeText.innerHTML = newTextContent;
    
//     // Dodajemy animację CSS z dostosowanym czasem trwania
//     marqueeText.style.animation = `marquee ${animationDuration}s linear infinite`;
//     };