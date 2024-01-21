const express=require('express');
const path = require('path');

const rootDir=require('../helper/utitl/rootpath');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','addProduct.html'));
})
module.exports=router;