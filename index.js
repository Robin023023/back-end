const config=require('./config/config')
const app=require("./app");
const port=config.app.port

app.listen(port,()=>{
  console.log(`app is running on http://localhost:${port}`);
})