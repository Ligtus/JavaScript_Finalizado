const csv = require("csv-parser");
const fs = require("fs");
const numeros = [];
const resultadoFinal = [];

exports.getResults = function (fichero, addData, callback) {
  fs.createReadStream(fichero)
    .pipe(csv({ headers: false, skipLines: 1 }))
    .on("data", (data) => {
      addData([
        `${data[1]}`,
        `${data[2]}`,
        `${data[3]}`,
        `${data[4]}`,
        `${data[5]}`,
        `${data[6]}`,
        `${data[7]}`,
      ]);
    })
    .on("end", () => {
      /*for (let index = 0; index < 7; index++) {
        resultadoFinal.push(masRepetido(numeros, index));
      }*/
      callback()
    });
};

exports.masRepetido = function(listaNum, index) {
  let masRepeticiones = 1;
  let repeticiones = 0;
  let numero;
  for (var i = 0; i < listaNum.length; i++) {
    for (var j = i; j < listaNum.length; j++) {
      if (listaNum[i][index] == listaNum[j][index]) repeticiones++;
      if (masRepeticiones < repeticiones) {
        masRepeticiones = repeticiones;
        numero = listaNum[i][index];
      }
    }
    repeticiones = 0;
  }
  return numero;
};
