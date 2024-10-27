const textInfo = [
  "CrossFit Bytom startuje. Hyrox Poznań 02-03/11",
  "Od 5 listopada zajęcia KettleBell Endurance odbędą się w każdy wtorek o godz. 17:30 zaś czwartek o 17. Zapraszamy",
  "CrossFit Intro: Wtorek/Czwartek o 17:30. Zapraszamy osoby, które chcą wejść do świata CrossFitu lub miały dłuższą przerwę w treningu!",
"sdfsdfsdf"
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
