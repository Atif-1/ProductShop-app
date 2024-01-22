const express=require('express');

const router=express.Router();

const contactController=require('../controllers/contact');

router.get('/contactus',contactController.contactController);

module.exports=router;