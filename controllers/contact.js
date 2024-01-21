const path=require('path')

const rootDir=require('../helper/utitl/rootpath');

exports.contactController=(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','contact.html'));
}