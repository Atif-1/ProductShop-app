const Product = require('../models/product');
const Cart=require('../models/cart');
exports.getProducts = (req, res, next) => {
  Product.findAll().then((user)=>{
    res.render('shop/product-list', {
      prods: user,
      pageTitle: 'All Products',
      path: '/products'
    })
  }).catch(err=>console.log(err))
}

exports.getProduct=(req,res,next)=>{
  const prodId=req.params.productId;
  Product.findAll({WHERE:{id:prodId}}).then((user)=>{
    res.render('shop/product-detail',{product:user[0],pageTitle:user.title,path:'/product'});
  })
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then((user) => {
    res.render('shop/index', {
      prods: user,
      pageTitle: 'Shop',
      path: '/'
    })
  }).catch(err=>console.log(err))
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req,res,next)=>{
  const prodId=req.body.productId;
  Product.findAll({where:{id:prodId}},(user)=>{
  Cart.addProduct(prodId,user.price);
  });
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
