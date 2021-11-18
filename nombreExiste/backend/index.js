const app = require("./app");
const csv = require("csv-parser")
const fs = require("fs")
let nombres = []
let resp = []

app.get('/existe/:nombre', (req,res)=>{
    const {nombre} = req.params
    let existe = false
    fs.createReadStream('hombres.csv')
    .pipe(csv())
    .on('data', (data) => {
        nombres.push(`${data["nombre"]}`)
    })
    .on('end', () => {
        nombres.forEach(element => {
            if (nombre.toLowerCase() == element.toLowerCase()) {
                existe = true
                return
            }
        });
        res.send(existe)
        console.log("done")
    });
})

app.get('/nombres', (req,res)=>{
    fs.createReadStream('hombres.csv')
    .pipe(csv())
    .on('data', (data) => {
        nombres.push(`${data["nombre"]}`)
    })
    .on('end', () => {
        res.send(nombres)
        console.log("done")
    });
})

app.get('/', (req,res)=>{
    let fecha = new Date()
    res.send(fecha)
})

app.listen(4000, ()=>{
    console.log("Iniciado en puerto 4000")
})