/// 1- Iniciando projeto

// console.log("Express + Ts!!!")

// 2- Init express
import express, {Request, Response} from "express";

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

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces");
});

// 6 - Enviando json
app.get("/api/json", (req: Request, res: Response) => {

    return res.json({
      name: "Shirt",
      price: 30.00,
      color: "Blue",
      size: ["P", "M", "G"],
    });
});


// 7 -router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);
 
  const id = req.params.id
  
  if(id === "1") {

    const product = {
      id: 1,
      name: "Boné",
      price: 10,
    };

    return res.json(product);
  } else {
    return res.send("Produto não encontrado!");
  }
});

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id
    const reviewId = req.params.reviewId

    return res.send(`Acessando a review ${reviewId} do  produto ${productId}`);
});

app.listen(3000, () => {
  console.log("Aplicação de Ts + Express funcionando!");
});