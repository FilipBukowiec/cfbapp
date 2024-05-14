// export class EventCountdown {
//   constructor(eventDate, backgroundFile) {
//     this.slide = document.createElement("div");
//     this.background = document.createElement("div");
//     this.wrapper = document.createElement("div");
//     this.eventDate = eventDate;
//     this.backgroundFile = backgroundFile;
//   }

//   createSlide() {
//     this.slide.classList.add("swiper-slide");

//     // Ustawienie tła
//     this.background.style.backgroundImage = `url(./media/${this.backgroundFile})`;
//     this.background.classList.add("event-bg");

//     // Dodanie diva countdown-wrapper
//     const countdownWrapper = document.createElement("div");
//     countdownWrapper.classList.add("countdown-wrapper");

//     // Dodanie czasów odliczania wraz z etykietami
//     const countdownTimes = ["Days", "Hours", "Minutes", "Seconds"];
//     countdownTimes.forEach((label) => {
//       const cdDiv = document.createElement("div");
//       cdDiv.classList.add("countdown-time");

//       // Dodanie etykiety
//       const labelSpan = document.createElement("span");
//       labelSpan.textContent = label;
//       cdDiv.appendChild(labelSpan);

//       // Dodanie wartości odliczania
//       const valueSpan = document.createElement("span");
//       valueSpan.id = label.toLowerCase(); // Ustawianie id na małe litery, tak aby pasowało do formatu HTML
//       cdDiv.appendChild(valueSpan);

//       countdownWrapper.appendChild(cdDiv);
//     });

//     this.wrapper.appendChild(countdownWrapper);
//     this.background.appendChild(this.wrapper);
//     this.slide.appendChild(this.background);

//     return this.slide; // Zwracamy utworzony slajd
//   }

//   createCountdown() {
//     const updateCountdown = () => {
//       const currentTime = new Date();
//       const eventObj = new Date(this.eventDate);
//       const difference = eventObj - currentTime;

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((difference / (1000 * 60)) % 60);
//       const seconds = Math.floor((difference / 1000) % 60);

//       // Aktualizacja wartości odliczania w elemencie span
//       document.getElementById("days").textContent = days;
//       document.getElementById("hours").textContent = hours;
//       document.getElementById("minutes").textContent = minutes;
//       document.getElementById("seconds").textContent = seconds;
//     };

//     updateCountdown(); // Wywołanie od razu, aby zaktualizować wartości

//     // Aktualizacja co sekundę
//     setInterval(updateCountdown, 1000);
//   }
// }

export function eventCountdown(eventBackground) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  const background = document.createElement("div");

  background.style.backgroundImage = `url(./media/${eventBackground})`;
  background.classList.add("event-background");
  slide.appendChild(background);

  return slide.outerHTML;
}