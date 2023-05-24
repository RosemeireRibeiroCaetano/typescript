import express from "express"
import config from "config"
import router from "./router";

const app = express();

// JSON middleware
app.use(express.json());

//router
app.use("/api", router);

// app port
const port = config.get<number>("port");

app.listen(port, async() => {
  console.log(`Aplicação está funcionando na porta: ${port}`)
});