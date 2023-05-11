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

app.listen(3000, () => {
  console.log("Aplicação de Ts + Express funcionando!");
});