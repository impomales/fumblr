'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
	db.collection('posts').find().toArray()
		.then(posts => {
			const metadata = { count: posts.length };
			res.json({ _metadata: metadata, records: posts});
		}).catch(error => {
			console.log(error);
			res.status(500).json({
				message: `Internal Server Error: ${error}`
			});
		});
});

app.post('/api/posts', (req, res) => {
	const newPost = req.body;

	newPost.posted_by = 'impomales';
	newPost.notes = 0;

	db.collection('posts').insertOne(newPost)
		.then(result => db.collection('posts')
							.find({ _id: result.insertedId })
							.limit(1).next())
		.then(data => res.json(data))
		.catch(error => {
			console.log(error);
			res.status(500).json({
				message: `Internal Server Error: ${error}`
			});
		});
});

let db;

MongoClient.connect('mongodb://localhost:27017/fumblr')
	.then(connection => {
		db = connection;

		app.listen(process.env.PORT || 8080, () => console.log('App is listening'));
	}).catch(error => {
		console.log("Error: ", error);
	});