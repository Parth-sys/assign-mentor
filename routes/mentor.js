var express=require("express");
var router=express.Router();
var MentorModule=require('../module/Mentormodule');
//var Ment=require("../module/mentorStudent");

router.post('/saveMentor',MentorModule.postMentor);
router.get('/getMentor',MentorModule.getMentor);
router.patch('/updateMentor/:id',MentorModule.updateMentor);
router.delete('/deleteMentor/:id',MentorModule.deleteMentor);
router.get('/add/:id',MentorModule.addStudTomen)

module.exports=router; 