const app = require("./app");
const cors = require("cors");
const fetch = require("node-fetch");
const datos = []

app.use(cors());


app.get("/url/:pagina", (req, res) => {
  const {pagina} = req.params
  fetch('https://wallhaven.cc/api/v1/search?page=' + pagina)
    .then(res => res.json())
    .then(text => res.send(text["data"]))
    .catch(error => console.log(error));
});

app.get("/", (req, res) => {
  res.sendFile(__dirname+"\\frontend\\index.html")
});

app.listen(4000, () => {
  console.log("Iniciado en puerto 4000");
});

