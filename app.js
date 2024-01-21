const path=require('path');

const express=require('express');

const bodyParser=require('body-parser');

const adminRoute=require('./routes/admin.js');
const shopRoute=require('./routes/shop.js');
const contactRoute=require('./routes/contact.js');
const successFormRoute=require('./routes/successForm.js');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/admin',adminRoute);
app.use(contactRoute);
app.use(successFormRoute);
app.use(shopRoute);
app.use((req,res,next)=>{
	res.sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
