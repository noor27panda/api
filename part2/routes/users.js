const express = require("express")
const router = express.Router()
const controllers = require("../controllers/usercontroller")

router.post("/", controllers.createUser)





module.exports = router