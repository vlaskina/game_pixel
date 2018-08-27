const express = require('express');
const router = require('./routes');
const port = 3000;

const app = express();
	
app.get('/api/tasks', router);

app.use((req, res, next)=>{
	console.log(req.url);
	next()
})



app.listen(port)