const Student = require('../modal/student');
const Joi = require('joi');
const Mentor=require('../modal/mentor');

//joi validation
exports.postStudent = async (req, res, next) => {
  const schema = Joi.object({

    StudentName: Joi.string().required(),
    id: Joi.number().required(),
    MentorAssign: Joi.number().required()

  })    //validating 
  var { error } = await schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send({ msg: error.details[0].message })
  }

  //save data in db using mongoose
  const student = new Student({
    StudentName: req.body.StudentName,
    id: req.body.id,
    MentorAssign: req.body.MentorAssign
  });
  try {
    var response = await student.save();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
}


exports.getStudent = async (req, res, next) => {
  var response = await Student.find();
  res.send(response);
}

exports.updateStudent = async (req, res, next) => {
  const { id } = req.params
  var response = await Student.updateOne({id:id}, {

    MentorAssign:req.body.MentorAssign
  })
  res.send(response);
}

exports.deleteStudent = async (req, res, next) => {
  const { id } = req.params
  var response = await Student.deleteOne({ id: id });
  res.send(response);
}

exports.getMenTostud=async(req,res,next)=>{
  console.log("showing stuents with no mentor");
    const {MentorId}=req.params
  var response=await Student.find({MentorId})
  res.send(response);

}

exports.addstudentTomentor=async(req,res)=>{

 var mentor=await Mentor.find(req.params.MentorId);
 mentor.StudentsAssign=[
   StudentsAssign,
  req.body.StudentsAssign
 ];
console.log(Mentor.StudentsAssign)
 mentor.save();
 req.body.StudentsAssign.forEach(async(stud)=>{
   const s=await Student.find(stud);
   s.MentorAssign=req.body.MentorId;
   s.save();
 });
 res.send("mentor Added to Student");
   

}


