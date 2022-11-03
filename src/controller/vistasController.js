const path = require ("path");
module.exports = {
  main : (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/index.html"))
  }
}