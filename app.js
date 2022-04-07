const express = require("express");
const cors = require('cors');
const config = require('./config')
const Airbrake = require('@airbrake/node');

new Airbrake.Notifier({
  projectId: 409521,
  projectKey: '61400a91f2262e4f0de0b481f666da05',
  environment: 'production'
});

//Inicializar la libreria
const app = express();
app.use(express.json());

//Implementación de CORS
app.use(cors());

//Información que se obtendrá en nuestra URL principal.
app.get("/", (req, res) => {
  res.send("API Proyecto IPM");
});

//Importar las rutas con los endpoints especificos
const rutas_compromisos = require("./routes/Crear_compromiso");
const rutas_espacios = require("./routes/Registro_espacio");
const rutas_integrantes = require("./routes/Registro_integrantes_espacio");
const rutas_investigadores = require("./routes/Registro_investigadores");
const rutas_archivos = require("./routes/Anexar_Archivo")
app.use(rutas_compromisos, rutas_espacios, rutas_integrantes, rutas_investigadores, rutas_archivos);

//Puerto
const PORT2 = config.PORT;

//Levantar el servidor para escuchar los puertos
app.listen(PORT, () => {
  console.log(`Escuchando API en http://localhost:${PORT}`);
});

module.exports = app;