const express = require("express")
const router = express.Router()

router.get('/', (req, res, next) => {
  // next()
  res.status(200).render("home.hbs")
  // ejemplo de cambiar el status de respuesta (http code status)
})

router.get('/about', (req, res) => {
  res.render("about.hbs")
})

router.get('/my-hobbies', (req, res, next) => {
  
  myDog.getARandddomsDog()
  .then(data => {
    res.render("my-hobbies.hbs", {
      img: data.message
    })
  })
  .catch(err => {
    next(err)
  })
})

module.exports = router