const textInfo = [
  "Intro Kettlebell Endurance Zajęcia dla początkujących Trening Optymalny Start: Wtorek 08/10 , Godzina: 17:00",
  "Sukces naszych sztangistek w Ogólnopolskiej Olimpiadzie Młodzieży w podnoszeniu ciężarów! Wiktoria Kruk zajęła 6. miejsce w kategorii do 55 kg, zaś Oliwia Wittig uplasowała się na 4. miejscu w kategorii do 64 kg! Gratulujemy naszym zawodniczkom i życzymy dalszych sukcesów!!!",
  "MÓJ CATERING nowym partnerem CrossFit Bytom. Wejdź na stronę mojcatering.com.pl i zyskaj 15% rabatu z kodem: CFBYTOM15",
  "CrossFit Intro: wtorek/czwartek godz. 17:30. Zapraszamy!!!",
  "GAMINATE partnerem CrossFit Bytom. Zgarnij 10% rabatu na zakupy w sklepie gaminate.pro z kodem crossfitbytom"
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
