const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nikhil:CbwUUyHXF7pWawDt@cluster0.3k4g8.mongodb.net/nikhil',
{
	useNewUrlParser : true,
	useUnifiedTopology : true
}).then(()=>{
	console.log('successfully connected');
}).catch((error)=>{
	console.log(error);
})s