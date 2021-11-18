const csv = require("csv-parser")
const fs = require("fs")
const nombres = []
let existe = new Boolean

exports.checkName = function (nombre, listaNombres) {
    existe = listaNombres.some(element => nombre.toLowerCase() == element.toLowerCase())
    return existe
}

exports.getNames = function (fichero) {
    fs.createReadStream(fichero)
    .pipe(csv())
    .on('data', (data) => {
        if (data["nombre"] == undefined) {
            nombres.push(`${data["apellido"]}`)
        } else {
            nombres.push(`${data["nombre"]}`)
        }
    })
    .on('end', ()=>{
        console.log("Nombres totales: " + nombres.length)
    })
    
    return nombres
}