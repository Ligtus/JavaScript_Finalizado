const app = require("./app");
const csv = require("./csv_func")
const listas = ['history_1985-2012.csv', 'history_2013-2021.csv']
const resultados = []

listas.forEach(element => {
    resultados.push(csv.getNames(element))
});

app.get('/resultados',(req,res)=>{
    res.send(resultados)
})

app.get('/', (req,res)=>{
    let fecha = new Date()
    res.send(fecha)
})

app.listen(4000, ()=>{
    console.log("Iniciado en puerto 4000")
})