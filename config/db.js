const config=require("./config")
const mongoose= require("mongoose");
const bloodUrl=config.db.url

mongoose.connect(bloodUrl)
.then(()=>{
    console.log("mongodb atlas is connected")
})
.catch((error)=>{
    console.log("mongodb atlas is not connected",error)
})