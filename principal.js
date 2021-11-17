const biblioteca = require("./biblioteca");
const Pessoa = require("./Pessoa");

console.log(biblioteca.falarVerdade("Verdade"));
console.log(biblioteca.somar(100, 900));

const Hobson = new Pessoa("Hobson Breno Moreira do Nascimento", 18);
console.log(Hobson.getNome());
console.log(Hobson.getIdade());

if (Hobson.getIdade() > 30) {
  console.log("um rapaz experiente!");
} else {
  console.log("Um rapaz novo!");
}

let mensagem =
  Hobson.getIdade() > 30 ? "um rapaz experiente!" : "Um rapaz novo!";
console.log(mensagem);

const linguagensEsperadas = ["js", "php", "python"];
const linguagens = ["js", "php", "python"];

linguagens.forEach(function (valor, indice) {
  if (linguagensEsperadas[indice] == valor) {
    console.log("È igual");
  } else {
    console.log("È diferente");
  }
});

const politico = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Mentira!");
  }, 5);
});

politico.then(function (texto) {
  console.log(texto);
});
