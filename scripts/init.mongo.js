const db = new Mongo().getDB('fumblr');


db.posts.remove({});

db.posts.insert([
	{
		title: "First Post",
		data: "blah blah blah",
		tags: ["#first"],
		posted_by: "impomales",
		notes: 23
	},
	{
		title: "Whatever",
		data: "...",
		posted_by: "nycafana",
		tags: ["#Afana", "#NYC"],
		notes: 100
	},
	{
		title: "Happy Thanksgiving",
		data: "Turkey DAY YAAAASS!!!!",
		tags: ["#Thanksgiving", "#Isaias"],
		posted_by: "impomales",
		notes: 500
	}
]);

db.posts.createIndex({ tags: 1 });