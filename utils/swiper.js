import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export function mediaSlides(media) {
  const wrapper = document.getElementById("swiperWrapper");

  // Wyczyść zawartość wrappera przed dodaniem nowych slajdów
  wrapper.innerHTML = '';

  media.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    wrapper.appendChild(div);

    if (element.includes("http")) {
      if (element.includes(".mp4")) {
        const videoElement = document.createElement("video");
        videoElement.src = element;
        videoElement.muted = true;
        videoElement.setAttribute("playsinline", ""); // Ważne dla autoplay na mobilnych urządzeniach
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
        videoElement.setAttribute("playsinline", ""); // Ważne dla autoplay na mobilnych urządzeniach
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
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,
    on: {
      slideChangeTransitionStart: function () {
        const currentSlide = this.slides[this.activeIndex];
        const video = currentSlide.querySelector("video");

        if (video) {
          video.currentTime = 0;
          video.play();

          const swiperInstance = this;

          swiperInstance.autoplay.stop();

          video.addEventListener("ended", function () {
            swiperInstance.autoplay.start();
            swiperInstance.slideNext();
          }, { once: true }); // Dodaj { once: true }, aby nasłuchiwacz był wywołany tylko raz
        }
      },
    },
  });

  mySwiper.update();
}
