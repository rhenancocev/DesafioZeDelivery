const app = require ("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cadastro = require("./routes/cadastroParceiroRouter");
const consultaParceiro = require ("./routes/consultaParceiroRouter");
const buscaParceiro = require ("./routes/buscaParceiroRouter");
const index = require ("./controllers/indexController");

//preparando para receber e usar arquivo json, utilizando o body-parser
app.use(bodyParser.json());

//configuração do mongo db
mongoose.connect("mongodb+srv://rhenan:zedelivery@rhenan.jizhz.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Banco de dados conectado...");
});

//iniciando servidor
app.listen(8080, () => {
    console.log("API Rodando...");
});

//endpoint e cadastro de um parceiro
app.use("/api/cadastro", cadastro);
app.use("/api/consulta", consultaParceiro);
app.use("/api/busca", buscaParceiro);
app.use("/api", index);