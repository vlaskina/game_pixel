const {Router} = require('express');
const mongoose = require('./fixtures/mongoose');
const Tasks = require('./fixtures/tasks');
const data = require('./fixtures/data');

const router = new Router();

router.get('/api/tasks', (req, res) => {
		return new Promise((resolve, reject) => {
			  resolve()
		  }).then(()=>{
			 return Tasks.remove({});
		  }).then(()=>{
			  async function createTask() {
				for (let i=0; i < data.length; i++) {
					await Tasks.create(data[i]);  
				}
			  }
			return createTask();
		  }).then(()=>{
			Tasks.find({}, function(err, results) {
			  res.header("Access-Control-Allow-Origin", "*");
		      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			  res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
			  res.setHeader('Content-Type', 'application/json');
			  res.send(JSON.stringify(results));
			  mongoose.disconnect();
			});

		  }).catch((err)=>{
			console.log(err);
			res.status(500).send("Something broke!");  
		  })
});

module.exports = router;
