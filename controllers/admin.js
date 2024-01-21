const path=require('path');
const rootDir=require('../helper/utitl/rootpath');
exports.adminControlller=(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','addProduct.html'));
}