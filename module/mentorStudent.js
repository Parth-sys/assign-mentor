const Student = require('../modal/student');
const Mentor=require('./mentormodule');


//const router=require('express').Router();

/*

router.post("/mentorTostud",async(req,res,next)=>{
try

    {

  const mentor= await Mentor.findById(req.body.MentorId);
   mentor.MentorId=[
       ...mentor.MentorId,
       ...req.body.studentArray
   ]
mentor.save();


req.body.studetArray.forEach( async(stud) => {
    const temp=await Student.findById(stud);
    temp.mentorAs=req.body.MentorId;
    temp.save()
  
  
    )}
    
    
    
  res.send("Mentor assigned to student");
}   catch(e){
    console.log(error);
    
}   


}

*/




exports.postStudenttomentor = async (req, res, next) => {
    const schema = Joi.object({
  
      StudentName: Joi.string().required(),
      MentorName:req.body.MentorName,
      MentorId: Joi.number().required()
  
    })    //validating 
    var { error } = await schema.validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send({ msg: error.details[0].message })
    }
  
     var db=[];

     const men=await Mentor.findById(req.body.MentorId)
    


    //save data in db using mongoose
    const mentorTostudent = new Mentostud({
      StudentName: req.body.StudentName,
      MentorName: req.body.id,
      MentorId: req.body.MentorId
    });
    try {
      var response = await mentorTostudent.save();
      res.send(response);
    } catch (err) {
      res.status(400).send(err);
    }
  }

