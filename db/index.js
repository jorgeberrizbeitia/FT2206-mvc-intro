const mongoose = require("mongoose")

const MONGO_URI = "mongodb://localhost:27017/test-db"

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("conectados a la base de datos")
})
.catch((err) => {
  console.log(err)
})