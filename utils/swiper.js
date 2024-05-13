import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export function mediaSlides(media) {
  const wrapper = document.getElementById("swiperWrapper");

  media.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    wrapper.appendChild(div);

    if (element.includes("http")) {
      if (element.includes(".mp4")) {
        const videoElement = document.createElement("video");
        videoElement.src = element;
        videoElement.muted = true;
        div.appendChild(videoElement);
      } else if (
        element.includes(".jpg") ||
        element.includes(".gif") ||
        element.includes(".jpeg")
      ) {
        const imageElement = document.createElement("img");
        imageElement.src = element;
        div.appendChild(imageElement);
      }
    } else {
      if (element.includes(".mp4")) {
        const videoElement = document.createElement("video");
        videoElement.src = `./media/${element}`;
        videoElement.muted = true;
        div.appendChild(videoElement);
      } else if (
        element.includes(".jpg") ||
        element.includes(".gif") ||
        element.includes(".jpeg")
      ) {
        const imageElement = document.createElement("img");
        imageElement.src = `./media/${element}`;
        div.appendChild(imageElement);
      } else {
div.innerHTML = element;

      }
    }
  });

  const mySwiper = new Swiper(".swiper", {
    // Ustawienia Swipera
    loop: true, // Zapętlaj slajdy
    autoplay: {
      delay: 10000, // Czas pomiędzy slajdami
      disableOnInteraction: false, // Nie zatrzymuj autoplay po interakcji użytkownika
    },
    speed: 800,
    effect: "fade", // Efekt fade podczas przewijania slajdów
    fadeEffect: {
      crossFade: true, // Włącz płynne przejścia pomiędzy slajdami
    },

    allowTouchMove: false,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    on: {
      slideChangeTransitionStart: function () {
        const currentSlide = this.slides[this.activeIndex];
        const video = currentSlide.querySelector("video");

        // Jeśli aktualny slajd zawiera wideo, restartuj je od początku i ustaw na nie nasłuchiwanie zdarzenia ended
        if (video) {
          video.currentTime = 0; // Restartuj wideo od początku
          video.play(); // Rozpocznij odtwarzanie wideo

          const swiperInstance = this;

          // Zatrzymaj automatyczne przewijanie tylko jeśli to wideo
          swiperInstance.autoplay.stop();

          // Nasłuchuj zdarzenia ended, aby przenieść się do następnego slajdu po zakończeniu odtwarzania wideo
          video.addEventListener("ended", function () {
            swiperInstance.autoplay.start(); // Wznów automatyczne przewijanie
            swiperInstance.slideNext(); // Przejdź do następnego slajdu
          });
        }
      },
    },
  });

  mySwiper.update();
}
