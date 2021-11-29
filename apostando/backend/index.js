const app = require("./app");
const cors = require("cors");
const csv = require("./csv_func");
const listas = ["history_1985-2012.csv", "history_2013-2021.csv"];
const arrayDatos = []
const resultadoFinal = []
let leidos = 0

app.use(cors());

function callback(){
    leidos++
    if (leidos === listas.length) {
        for (let index = 0; index < 7; index++) {
            resultadoFinal.push(csv.masRepetido(arrayDatos, index))
        }    
    }
}

function addData(datos) {
  arrayDatos.push(datos);
}

listas.forEach((element) => {
  csv.getResults(element, addData, callback);
});

app.get("/resultados", (req, res) => {
  res.json(resultadoFinal);
});

app.get("/", (req, res) => {
  let fecha = new Date();
  res.send(fecha);
});

app.listen(4000, () => {
  console.log("Iniciado en puerto 4000");
});
