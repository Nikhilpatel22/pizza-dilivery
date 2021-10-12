function homeController(){
	return{
		 index(req, res){
		 	res.render('customer/home')
		 }
	}
}
module.exports = homeController;