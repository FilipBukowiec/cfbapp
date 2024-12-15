const textInfo = [
  "CrossFit Intro: Wtorek/Czwartek o 17:30. Zapraszamy osoby, które chcą wejść do świata CrossFitu lub miały dłuższą przerwę w treningu!",
    "Zajęcia Kettlebell dla początkujących: każdy wtorek godz. 17:30, czwartek godz: 17:00. Zapraszamy!",
    

];

let imgPath = "./img/cfb.svg";

const newsImg = new Image();
newsImg.src = imgPath;
newsImg.classList.add("news-logo");

textInfo.forEach((element, index) => {
  textInfo[index] = element + newsImg.outerHTML;
});

let allInfo = textInfo.join("");

export function newsInfo() {
  const news = document.getElementById("news");
  news.innerHTML = allInfo;
}
