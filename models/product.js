const { json } = require('body-parser');
const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFrpmFile=((cb)=>{
		fs.readFile(p,(err,fileContent)=>{
			if(err){
				return cb([]);
			}
			cb(JSON.parse(fileContent));
		});
	});
module.exports=class Product {
	constructor(title){//ttile in parameter we get from request
		this.title=title;
	}
	save(){//function without function keyword
		getProductsFrpmFile(products=>{
			products.push(this);
			fs.writeFile(p,JSON.stringify(products),(err)=>{
				if(err){
					console.log(err);
				}
				})
		});
	}
	static fetchAll(cb){
		getProductsFrpmFile(cb);
	}
};