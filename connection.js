const mongoose=require("mongoose");

exports.connect=()=>{
    try{
        const url=process.env.url;
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("db connected")
    }catch(err){
        console.log(err);
        process.exit();
    }
}