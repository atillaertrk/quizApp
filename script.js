const ui = new UI();
opt1ons = ui.options[0].children;
var time;
var soru_sayac = 0;
var dogru_cevap_sayac = 0;

function counter() {
  time = 10.0;
  var uzunluk = 0;
  return (timer = setInterval(function () {
    time -= 0.1;
    time = Number(time.toFixed(2));
    document.querySelector(".time span b").innerHTML = time;
    uzunluk += 1;
    document
      .querySelector(".bar")

      .setAttribute("style", `width:${uzunluk}%`);

    if (time == 0) {
      clearInterval(timer);
      for (let i = 0; i < ui.options[0].children.length; i++) {
        ui.options[0].children[i].classList.add("disabled");
      }
    }
  }, 100));
}

ui.button_start.addEventListener("click", function () {
  counter();
  soru_sayac += 1;
  soru_sayi();
  ui.card.classList.add("show");
  ui.first_screen.classList.add("hidden");
  ui.question.innerHTML = quiz.SoruGetir().soruMetni;
  for (let i in quiz.SoruGetir().secenekler) {
    let cevaplar = `<span class="option"><b>${i}</b> : ${
      quiz.SoruGetir().secenekler[i]
    }</span>`;
    ui.options[0].insertAdjacentHTML("beforeend", cevaplar);
  }
  for (secenekler of opt1ons) {
    secenekler.setAttribute("onclick", "tikla(this)");
  }
});
ui.next_question.addEventListener("click", function () {
  ui.options[0].innerHTML = ``;

  clearInterval(timer);
  soru_sayac += 1;
  soru_sayi();
  counter();

  if (sorular.length - 1 != quiz.soruIndex) {
    quiz.soruIndex++;
    ui.question.innerHTML = quiz.SoruGetir().soruMetni;
    for (let i in quiz.SoruGetir().secenekler) {
      let cevaplar = `<span class="option"><b>${i}</b> : ${
        quiz.SoruGetir().secenekler[i]
      }</span>`;
      ui.options[0].insertAdjacentHTML("beforeend", cevaplar);
    }
  } else {
    ui.question.innerHTML = ``;
    let soru_bitti = `<h2 class=" finish-title text-center">Sorular Bitti</h2> <p class="text-center">${
      soru_sayac - 1
    } sorudan ${dogru_cevap_sayac} tanesini doğru cevapladınız`;
    ui.options[0].insertAdjacentHTML("beforeend", soru_bitti);
    ui.next_question.classList.add("hidden");
    ui.btn_yeniden.classList.remove("hidden");
    clearInterval(timer);
    ui.sure.innerText = "";
    document.querySelector(".anliksoru").innerHTML = soru_sayac - 1;
    document
      .querySelector(".bar")

      .setAttribute("style", `width:100%`);
  }
  for (secenekler of opt1ons) {
    secenekler.setAttribute("onclick", "tikla(this)");
  }
});
let score = 0;
function tikla(opt1ons) {
  clearInterval(timer);
  if (
    opt1ons.querySelector("span b").textContent == quiz.SoruGetir().dogruCevap
  ) {
    dogru_cevap_sayac += 1;
    opt1ons.classList.add("correct");
    correct_icon = `<i class="fa-solid fa-check fa-option"></i>`;
    opt1ons.insertAdjacentHTML("beforeend", correct_icon);
    score += 10;
  } else {
    opt1ons.classList.add("incorrect");
    incorrect_icon = `<i class="fa-solid fa-xmark fa-option"></i>`;
    opt1ons.insertAdjacentHTML("beforeend", incorrect_icon);
    score -= 10;
  }
  for (let i = 0; i < ui.options[0].children.length; i++) {
    ui.options[0].children[i].classList.add("disabled");
  }
  document.querySelector(".score span b").innerHTML = score;
}
function yenile() {
  window.location.reload(false);
}
function soru_sayi() {
  document.querySelector(".toplamsoru").innerHTML = sorular.length;
  quiz.SoruGetir;
  document.querySelector(".anliksoru").innerHTML = soru_sayac;
}
