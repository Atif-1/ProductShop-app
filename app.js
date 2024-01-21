const path=require('path');

const express=require('express');

const bodyParser=require('body-parser');

const adminRoute=require('./routes/admin.js');
const shopRoute=require('./routes/shop.js');
const contactRoute=require('./routes/contact.js');
const successFormRoute=require('./routes/successForm.js');

const errorController=require('./controllers/404.js'); 

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/admin',adminRoute);
app.use(contactRoute);
app.use(successFormRoute);
app.use(shopRoute);
app.use(errorController.errController);

app.listen(3000);
