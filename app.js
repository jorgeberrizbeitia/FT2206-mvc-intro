// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
require("./db")
// ejecuta todo lo JS en ese archivo
// index.js está implicido como archivo principal


// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )

const logger = require("morgan")
app.use(logger("dev"))

const favicon = require("serve-favicon")
app.use(favicon((__dirname + "/public/images/favicon.ico")))

const DogApi = require('doggo-api-wrapper');
const myDog = new DogApi();

// Local Variables 
app.locals.appName = "Ghost Hunter" // una variable global accesible en TODAS las vistas

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes.js")
app.use("/", indexRoutes)

// To handle errors.
const errorHandling = require("./error-handling")
errorHandling(app)

module.exports = app


