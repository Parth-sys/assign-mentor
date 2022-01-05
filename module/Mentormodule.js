const Mentor=require('../modal/mentor');
const Student =require('../modal/student')

const Joi=require('joi');

//joi validation
exports.postMentor= async(req,res,next)=>{
  const schema=Joi.object({

      MentorName:Joi.string().required(),
      id:Joi.number().required(),
      MentorId:Joi.number().required(),
     StudentsAssign:Joi.array().required()

  })    //validating 
  var {error}=await schema.validate(req.body);
  if(error){
      console.log(error);
      return res.status(400).send({msg:error.details[0].message})
  }
  
  //save data in db using mongoose
  const mentor=new Mentor({
    MentorName:req.body.MentorName,
    id:req.body.id,
    MentorId:req.body.id,
    StudentsAssign:req.body.StudentsAssign
  
  });
  try{
  var response= await mentor.save();
  res.send(response);
  }catch(err){
    res.status(400).send(err);
  }
  }


  
  exports.getMentor = async (req, res, next) => {
    var response = await Mentor.find();
    res.send(response);
  }




  exports.updateMentor=async(req,res,next)=>{
    const {id}=req.params
    
      var response=await Mentor.updateOne({id:id},{
        MentorName :req.body.MentorName,
        MentorId:req.body.MentorId
      } ,{new:true})
    res.send(response);
  }

exports.deleteMentor= async(req,res,next)=>{
 const {id}=req.params
 var response=await Mentor.deleteOne({id:id});
 res.send(response);
}

exports.addStudTomen=async(req,res)=>{
  const{id}=req.params
  var response=await Mentor.find({id:id})

  var res2=await Student.find()
  var db=[]
  res2.map((m)=>{
    db.push(m.StudentName);
  })
  console.log(db)
  
  
}

