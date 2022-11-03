const express = require("express")
const app = express()
const path=  require("path")
console.log(path.join(__dirname, '../public'));
app.use(express.static(path.join(__dirname, '../public')))
const rutaMain = require("./routes/main.js");

app.use('/',rutaMain)

app.listen(3050, ()=> {
  console.log("Lets GOOO");
});