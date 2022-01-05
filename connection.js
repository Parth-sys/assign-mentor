const mongoose=require("mongoose");

exports.connect=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/b262ecommerce',{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("db connected")
    }catch(err){
        console.log(err);
        process.exit();
    }
}