export const getCurrentTime = () => {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = `${hours}:${minutes}`;
  setTimeout(getCurrentTime, 500);

  let actualTime = document.getElementById("hour");
  actualTime.innerText = time;
};
