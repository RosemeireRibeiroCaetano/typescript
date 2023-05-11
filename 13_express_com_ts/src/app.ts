/// 1- Iniciando projeto

// console.log("Express + Ts!!!")

// 2- Init express
import express from "express";

const app = express();

// Rota com Post
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Express!")
});

// 3 - Rota com Post
app.post("/api/product", (req, res) => {

  console.log(req.body)

  return res.send("Produto adicionando!");
});

// 4 - rota para todos verbos
app.all("/api/product/check", (req, res) => {

    // req.method = VERBO HTTP

    if(req.method === "POST") {
        return res.send("Inseriu algum registro!");
    } else if (req.method === "GET") {
        return res.send("Leu algum registro!");
    } else {
        return res.send("Não podemos realizar esta operação!");
    }

});

app.listen(3000, () => {
  console.log("Aplicação de Ts + Express funcionando!");
});