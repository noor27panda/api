const express = require("express")
const router = express.Router()
const categorycontoller = require("../controllers/categorycontoller")


router.get("/", categorycontoller.getallcategories)
router.post("/", categorycontoller.createcategory)





module.exports = router