const express = require("express")
const router = express.Router()

const path = require("path")
const indexPage = path.join(__dirname, "../template/index.html")

router.get("/", (req, res) => {
    res.status(200)
    res.type("text/html")
    res.sendFile(indexPage)
})

router.get("/home", (req, res) => {
    res.status(200)
    res.type("text/html")
    res.sendFile(indexPage)
})

router.get("/product/:id", (req, res) => {
    const productID = req.params.id
    if (productID >= 1 && productID <= 6) {
        res.sendFile(path.join(__dirname, `../template/product${productID}.html`))
    } else {
        res.send('404 Not Found');
    }
})

module.exports = router;