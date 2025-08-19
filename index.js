import {servidor} from "./config.js"

//GET (obtener) POST (enviar) PUT(actualizar) DELETE (eliminar)
//RUTA , funcion ()=>{ }
//req envia y res responde
servidor.get ("/", (req,res)=>{    
    res.render("index.hbs")

})