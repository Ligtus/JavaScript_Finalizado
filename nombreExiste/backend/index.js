const app = require("./app");
const csv = require("./csv_func")
const listas = ['./hombres.csv', './mujeres.csv', './apellidos.csv', './apellidos-20.csv']
const nombres = []

listas.forEach(element => {
    nombres.push(csv.getNames(element))
});

app.get('/existe/:nombre',(req,res)=>{
    const {nombre} = req.params
    let existe = nombres.some(element => csv.checkName(nombre, element))
    console.log("Alguien ha buscado " + nombre + ", " + existe)
    res.send(existe)
})

app.get('/nombres',(req,res)=>{
    res.send(nombres)
})

app.get('/', (req,res)=>{
    let fecha = new Date()
    res.send(fecha)
})

app.listen(4000, ()=>{
    console.log("Iniciado en puerto 4000")
})