import express from "express" //llamamos server
import hbs from "hbs" //llamamos plantilla
import path from "path" //importe de handlebars para plantillas
import { fileURLToPath } from "url" //convertir url en ruta

const servidor = express ()

//configuracion de ruta y motor de plantillas
const __filename = fileURLToPath (import.meta.url) //obtine la ruta del archivo actual
const __dirname = path.dirname(__filename) //obtiene el directorio del archivo actual

const pagina = path.join(`${__dirname}/views,`); //construye la ruta a la carpeta views

servidor.use(express.static(pagina))
servidor.set ("view engine", "hbs") //configurar con el motor de plantilla "hbs"
//servidor.set("views") //especifica la ubicacion de la plantilla
hbs.registerPartials(`${pagina}/partials`)

servidor.listen(80) //puerto 80 protocolo http

export {
    servidor
};