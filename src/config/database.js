

const mongoose=require("mongoose")

const connectDb= async()=>{
       return await mongoose.connect('mongodb+srv://jainsaurav0503:t1eGlpImNaSQjYR7@eccomerce.ouvhlh1.mongodb.net/devTinder');
       
   
}
module.exports=connectDb
