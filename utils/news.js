const textInfo = [
  "Nasza trenerka Monia wygrywa kategorię K-20 Dychy na Jeleni Skok podczas festiwalu Bieg Rzeźnika",
  "Młodzi sztangiści „Start Bytom” przywożą medale z indywidualnych Mistrzostw Śląska U20 & U23",
  "MÓJ CATERING nowym partnerem CrossFit Bytom. Wejdź na stronę mojcatering.com.pl i zyskaj 15% rabatu z kodem: CFBYTOM15",
  "Start CrossFit Intro: 11/06 Wtorek godz. 17:30",
  "Challenge Murph All Week: 10/06 - 15/06",
  "Lipiec: California 13/07 Sobota (10:00)",
  "Sierpień: Triple 3 17/08 Sobota (10:00) CrossFit Games Event na stadionie",
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
