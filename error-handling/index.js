const errorHandling = (app) => {

  // el cliente fue a una ruta que no existe 404. 
  // Invoca esto SIEMPRE si no consigue una ruta que sea igual al request del cliente
  app.use((req, res) => {
    res.status(404).render("not-found.hbs")
  })
  
  // nuestro servidor dio un problema 500
  app.use((err, req, res, next) => {
    // express detecta que esta funcion tiene 4 parametros, y solo por eso sabe que es un error handler de tipo 500
    // esto lo ejecuta cuando hay algun tipo de error en mis rutas
    console.log(err)
    res.status(500).render("error.hbs")
  })

}

// ejemplo de como esta construido el parametro callback next
// function next(algo) {
//   if (algo === undefined) {
//     // sigue a la siguiente ruta
//   } else {
//     // se comporta como error 500. automaticamente salta al error handler 500
//   }
// }

module.exports = errorHandling

