const { required, array } = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const Mentorschema=new Schema({
    MentorName:{
        type:String,
        required:true,
      
        
    },
    id:{
        type:Number,
        required:true
    },
    
    MentorId:{
        type:Number,
        required:true
   },
   StudentsAssign:{
       type:[],
       required:true
   }

}) 

const Mentor=mongoose.model('Mentor',Mentorschema,'MentorCollection')
module.exports=Mentor;