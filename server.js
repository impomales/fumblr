const express = require('express');
const app = express();

const posts = [
	{
		id: 1,
		title: "First Post",
		data: "blah blah blah",
		posted_by: "impomales",
		notes: 23
	},
	{
		id: 2, 
		title: "Whatever",
		data: "...",
		posted_by: "nycafana",
		notes: 100
	},
	{
		id: 3,
		title: "Happy Thanksgiving",
		data: "Turkey DAY YAAAASS!!!!",
		posted_by: "impomales",
		notes: 500
	}
];

app.use(express.static('static'));

app.get('/api/posts', (req, res) => {
	const metadata = { count: posts.length };
	res.json({ _metadata: metadata, records: posts});
});

app.listen(process.env.PORT || 8080, () => console.log('App is listening on port 8080'));