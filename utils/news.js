const textInfo = [
  "15% kod rabatowy : CFBYTOM15 na www.mojcatering.pl",
  "Start CrossFit Intro: 11/06 Wtorek (17:30) ",
  "Challenge Murph All Week: 10/06 -15/06",
  "Lipiec: California 13/07 Sobota (10:00)",
  "Sierpień: Triple 3 17/08 Sobota (10:00) CrossFit Games Event na stadionie",
  "Crossfit Runners: #3 Wyjazd w Góry - 02/06 Niedziela (7:00)",
  "Piotr Komaniecki startuje w European Masters Throwdown (Budapeszt) - Piątek 31/06",
  "31/05-02/06 ostatnie eliminacje do CrossFit Games. Semifinals in RPA/Brazylia i USA. Oglądaj Live na crossfitgames.com",
];

let imgPath = "./img/cfb.svg";

const newsImg = new Image();
newsImg.src = imgPath;
newsImg.classList.add("news-logo");

textInfo.forEach((element, index) => {
  textInfo[index] = element + newsImg.outerHTML;
});

let allInfo = textInfo.join("");

// export function newsInfo(){
// const marquee = document.getElementById("marquee")
// const news = document.createElement("div");
// news.classList.add("spanek");
// news.innerHTML = allInfo;
// marquee.appendChild(news)
// }

export function newsInfo() {
  const news = document.getElementById("news");
  news.innerHTML = allInfo;
}
