var express=require("express");
var router=express.Router();
var StudentModule=require('../module/Studentmodule');

router.post('/saveStudent',StudentModule.postStudent);
router.post('/addstudentToMen/:id',StudentModule.addstudentTomentor);
router.get('/getStudent',StudentModule.getStudent);
router.patch('/updateStudent/:id',StudentModule.updateStudent);//updating mentor
router.delete('/deleteStudent/:id',StudentModule.deleteStudent);
router.get('/menTostud/:id',StudentModule.getMenTostud);
router.get('/addmento/:id',StudentModule.addstudentTomentor);
module.exports=router; 