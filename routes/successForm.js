const express=require('express');

const router=express.Router();

router.use('/success',(req,res,next)=>{
	res.send('<html><body><h2>Form successfuly filled</h2></body></html>');
})
module.exports=router;		