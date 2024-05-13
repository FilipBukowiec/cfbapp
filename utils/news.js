const textInfo = [
  "Już wkrótce zawody Crossfit Bytom Throwdown 2024",
  "Zachęcamy do kupna gadżetów oraz odzieży z kolekcji All In",
  "Zapraszamy na nowy Fanpage FB Start Bytom",
  "W najbliższy piątek zajęcia Crossfit masters są odwołane. Idziemy na piwo",
  "Grzegorz Lichwa zakupił Licencję CF na 15 kolejnych lat. To wielki skok dla Bytomia",
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
