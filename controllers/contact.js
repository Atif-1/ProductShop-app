const path=require('path')

exports.contactController =(req, res, next) => {
	res.render('contact', {
	  pageTitle: 'Contact Us',
	  path: '/contactus'
  })
}