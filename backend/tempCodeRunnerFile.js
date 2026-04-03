const mongoose = require ("mongoose")

const express = require ("express")
const app = express()
const cors = require ("cors")
app.use(cors())
app.use(express.json())
const port=6000
mongoose.connect("mongodb+srv://shalinipaps_db_user:shalini123@cluster0.qyiafjm.mongodb.net/connection")
.then( res => console.log("mongo db connected")).catch(err => console.log(err,"connection failed"))

const personcheme = new mongoose.Schema({

   email:String,
   password:String,
})
const person = mongoose.model("person",personcheme)


app.get("/",express.json(),(req,res)=>{
   res.send("hello")
})

app.post("/post",(req,res)=>{
   try{
      const user = req.body
      const newuser =  person.create(user)
      res.send("data successfully")
   }catch (err){
      console.log(err);
      res.send("failed")
      
   }
})


app.put("/post/:id",async (req,res)=>{
  try{

    const user = req.body
   await person.findByIdAndUpdate(req.params.id, req.body)
   res.send("person update successfully")
  } catch (err) {
   console.log(err)
   res.send("error deleting data")
  }
})






app.delete("/post/id",async (req,res)=>{
  try{
   await person.findByIdAndDeleted(req.params.id)
   res.send("person deleted successfully")
  } catch (err) {
   console.log(err)
   res.send("error deleting data")
  }
})


app.listen(6000,()=>{
console.log("server created");
})









































