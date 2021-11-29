const csv = require("csv-parser");
const fs = require("fs");
const resultados = [];

exports.getNames = function (fichero) {
  fs.createReadStream(fichero)
    .pipe(
      csv({headers: false, skipLines : 1})
    )
    .on("data", (data) => {
        numeros = []
        numeros.push(`${data[1]}`)
        numeros.push(`${data[2]}`)
        numeros.push(`${data[3]}`)
        numeros.push(`${data[4]}`)
        numeros.push(`${data[5]}`)
        numeros.push(`${data[6]}`)
        resultados.push(`${data[0]}`);
        resultados.push(numeros);
    })
    .on("end", () => {
      console.log("Resultados totales: " + resultados.length);
    });

  return resultados;
};
