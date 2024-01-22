const express=require('express');

const router=express.Router();
 
const successFormController=require('../controllers/successForm');

router.post('/contactus',successFormController.success)

module.exports=router;

