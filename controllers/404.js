const path=require('path');
const rootDir=require('../helper/utitl/rootpath');
exports.errController=(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','404.html'));
}