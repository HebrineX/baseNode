const express = require("express")
const router = express.Router()

const vistas = require('../controller/vistasController')

router.get("/" , vistas.main)



module.exports = router;