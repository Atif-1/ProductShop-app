const express=require('express');

const router=express.Router();

const successFormController=require('../controllers/successForm');

router.use('/success',successFormController.successController);
module.exports=router;		