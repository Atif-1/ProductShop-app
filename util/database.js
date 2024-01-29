const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','at_DB#333111',{dialect:'mysql' , host:'localhost'});

module.exports=sequelize; 