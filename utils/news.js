const textInfo = [
  "Wyprzedaż koszulek CFB w cenie 60zł/szt.!!! Oferta obowiązuje do 16.06 lub do wyczerpania zapasów",
  "Katarzyna Hendel zajmuje 3 miejsce w zawodach BestFit Games! Gratulujemy!!!",
  "Michał Szebestik zajmuje 5 miejsce w zawodach BestFit Games! Gratulujemy!!!",
  "Nasi klubowicze Gosia&Adam zajmują 7 miejsce w zawodach CROSS MIXED ZONE GDAŃSK 2024! GRATULUJEMY!!!",
  "Młodzi sztangiści „Start Bytom” przywożą medale z indywidualnych Mistrzostw Śląska U20 & U23",
  "MÓJ CATERING nowym partnerem CrossFit Bytom. Wejdź na stronę mojcatering.com.pl i zyskaj 15% rabatu z kodem: CFBYTOM15",
  "CrossFit Intro: wtorek/czwartek godz. 17:30. Zapraszamy!!!",
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
