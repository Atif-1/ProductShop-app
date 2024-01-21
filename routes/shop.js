const express=require('express');

const router=express.Router();

const shopController=require('../controllers/shop');

router.use('/shop',shopController.shopController);

module.exports=router;