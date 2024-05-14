import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";


export function mediaSlides(media) {
  const wrapper = document.getElementById("swiperWrapper");

  media.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    wrapper.appendChild(div);

    // if (typeof element === 'function') {
    //   // Jeśli element jest funkcją, dodaj wynik jej wywołania do div
    //   div.innerHTML = element();
    //   console.log(element())
    // } else
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

  // Po utworzeniu wszystkich elementów DOM wywołujemy createCountdown()

  const mySwiper = new Swiper(".swiper", {
    // Ustawienia Swipera
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
          });
        }
      },
    },
  });

  mySwiper.update();
}
