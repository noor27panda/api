const express = require("express")
const router = express.Router()
const itemcontroller = require("../controllers/itemscontroller")


router.get("/", itemcontroller.getallitems)
router.post("/", itemcontroller.createitem)
router.get("/:id", itemcontroller.getsingleitems)
router.delete("/:id", itemcontroller.deleteitem)




module.exports = router