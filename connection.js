const mongoose=require("mongoose");

exports.connect=()=>{
    try{
        mongoose.connect('mongodb+srv://Parth:Parth123@cluster0.cxpc1.mongodb.net/studentMentor',{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("db connected")
    }catch(err){
        console.log(err);
        process.exit();
    }
}