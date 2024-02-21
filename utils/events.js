import { countdown } from "./countdown.js";



export const crossfitBytomThrowdown = `<div class="swiper-slide">
  <div class="event-bg">
    <img id="bytomthd" src="./media/bytom.png" alt="" />
    <div class="countdown-wrapper">
      <div class="countdown-time"><span id="days"></span>Days</div>
      <div class="countdown-time">
        <span id="hours"></span>Hours
      </div>
      <div class="countdown-time">
        <span id="minutes"></span>Minutes
      </div>
      <div class="countdown-time">
        <span id="seconds"></span>Seconds
      </div>
    </div>
  </div>
</div>
`


const countdownThrowdown = setInterval(() => {
    const result = countdown("2024-03-23T09:45:00");
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
  
    days.innerText = result.days;
    hours.innerText = result.hours;
    minutes.innerText = result.minutes;
    seconds.innerText = result.seconds;
  }, 1000);
  
