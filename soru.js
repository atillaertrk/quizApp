function Soru(soruMetni, secenekler, dogruCevap) {
  this.soruMetni = soruMetni;
  this.secenekler = secenekler;
  this.dogruCevap = dogruCevap;
}
Soru.prototype.cevapKontrol = function (cevap) {
  return cevap === this.dogruCevap;
};
let sorular = [
  new Soru(
    "Aşağıdakilerden hangisi birincidir?",
    { a: "birinci", b: "ikinci", c: "ucuncu" },
    "a"
  ),
  new Soru(
    "Aşağıdakilerden hangisi üçünçü ikidir?",
    { a: "birinci2", b: "ikinci2", c: "ucuncu2", d: "bilmemki" },
    "c"
  ),
  new Soru(
    "Aşağıdakilerden hangisi ikinci üçtür?",
    { a: "birinci3", b: "ikinci3", c: "ucuncu3" },
    "b"
  ),
];
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.SoruGetir = function () {
  return (this.sorular = sorular[this.soruIndex]);
};
const quiz = new Quiz(sorular);
