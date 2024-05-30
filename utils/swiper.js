import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export function mediaSlides(media) {
  const wrapper = document.getElementById("swiperWrapper");

  // Wyczyść zawartość wrappera przed dodaniem nowych slajdów
  wrapper.innerHTML = '';

  const loadPromises = media.map((element) => {
    return new Promise((resolve, reject) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      wrapper.appendChild(div);

      if (element.includes("http")) {
        if (element.includes(".mp4")) {
          const videoElement = document.createElement("video");
          videoElement.src = element;
          videoElement.muted = true;
          videoElement.setAttribute("playsinline", ""); // Ważne dla autoplay na mobilnych urządzeniach
          videoElement.setAttribute("poster", "path/to/placeholder.jpg"); // Dodaj poster
          videoElement.setAttribute("preload", "metadata");

          videoElement.onloadeddata = resolve;
          videoElement.onerror = reject;

          div.appendChild(videoElement);
        } else if (
          element.includes(".jpg") ||
          element.includes(".gif") ||
          element.includes(".jpeg")
        ) {
          const imageElement = document.createElement("img");
          imageElement.src = element;

          imageElement.onload = resolve;
          imageElement.onerror = reject;

          div.appendChild(imageElement);
        }
      } else {
        if (element.includes(".mp4")) {
          const videoElement = document.createElement("video");
          videoElement.src = `./media/${element}`;
          videoElement.muted = true;
          videoElement.setAttribute("playsinline", ""); // Ważne dla autoplay na mobilnych urządzeniach
          videoElement.setAttribute("poster", "../media/bg.jpg"); // Dodaj poster
          videoElement.setAttribute("preload", "metadata");

          videoElement.onloadeddata = resolve;
          videoElement.onerror = reject;

          div.appendChild(videoElement);
        } else if (
          element.includes(".jpg") ||
          element.includes(".gif") ||
          element.includes(".jpeg")
        ) {
          const imageElement = document.createElement("img");
          imageElement.src = `./media/${element}`;

          imageElement.onload = resolve;
          imageElement.onerror = reject;

          div.appendChild(imageElement);
        } else {
          div.innerHTML = element;
          resolve();
        }
      }
    });
  });

  Promise.all(loadPromises).then(() => {
    const mySwiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 15000,
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
              swiperInstance.slideNext();
              swiperInstance.autoplay.start();
            }, { once: true }); // Dodaj { once: true }, aby nasłuchiwacz był wywołany tylko raz
          }
        },
      },
    });

    mySwiper.update();
  }).catch((error) => {
    console.error("Błąd podczas ładowania mediów:", error);
  });
}
