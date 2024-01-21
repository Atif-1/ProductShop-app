const path=require('path');

const rootDir=require('../helper/utitl/rootpath');

exports.shopController=(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','shop.html'));
}