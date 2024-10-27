export function intro() {
  const app = document.getElementById("cfbytom");
  const appletter = document.getElementById("lettersapp");
  const loading = document.getElementById("loading");
  const intro = document.getElementById("intro");

  app.addEventListener("animationend", function () {
    appletter.classList.remove("none");
    appletter.classList.add("anime");
  });

  appletter.addEventListener("animationend", function () {
    loading.classList.add("opain");
    loading.style.opacity = 1;
  });

  loading.addEventListener("animationend", function () {
    loading.classList.add("start-btn");
    loading.innerText = "START";
    loading.addEventListener("click", hideIntro);
 
  });

  function hideIntro() {
    const intro = document.getElementById("intro");
    const mainApp = document.getElementById("mainApp");
    intro.classList.add("opauot");

    intro.addEventListener("animationend", function () {
      intro.classList.add("none");
    });
  }
  
 
}
