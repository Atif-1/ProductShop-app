const path=require('path');

const express=require('express');

const rootDir=require('../helper/utitl/rootpath');
const router=express.Router();

router.use('/shop',(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports=router;