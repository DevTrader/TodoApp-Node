// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	let db = client.db('TodoApp');
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: 'false'
	// }, (err, res)=>{
	// 	if (err){
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	//Insert new doc into users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Nicolas',
	// 	age: 24,
	// 	location: 'Los Angeles'
	// }, (err, res) => {
	// 	if(err){console.log('No user added.', err)};
	// 	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
	// })

	

	client.close();
});