const express=require("express")
const router =require("./router")

const PORT = 8080
const app = express()

app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use("/api/productos",router)

const server = app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

server.on("error",(error)=>{
    console.log(`error corriendo en el servidor${error}`);
})