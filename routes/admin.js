const express=require('express');

const router=express.Router();

const adminControlller=require('../controllers/admin');

router.get('/add-product',adminControlller.adminControlller);
module.exports=router;