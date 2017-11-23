"use strict";

var node = document.getElementById('app');

var posts = [{
	id: 1,
	title: "Post One"
}, {
	id: 2,
	title: "Whatever"
}, {
	id: 3,
	title: "Happy Thanksgiving!"
}];

var NavBar = function NavBar(props) {
	return React.createElement(
		"div",
		{ id: "navBar" },
		React.createElement("img", { id: "logo", src: "./photos/fumblr.png", alt: "logo" }),
		React.createElement("input", { id: "search", type: "text", name: "search", placeholder: "Search Fumblr" }),
		React.createElement(
			"ul",
			null,
			React.createElement(
				"li",
				null,
				"Dashboard"
			),
			React.createElement(
				"li",
				null,
				"Explore"
			),
			React.createElement(
				"li",
				null,
				"Messages"
			),
			React.createElement(
				"li",
				null,
				"Chat"
			),
			React.createElement(
				"li",
				null,
				"Activity"
			),
			React.createElement(
				"li",
				null,
				"Account"
			),
			React.createElement(
				"li",
				null,
				"Make a post"
			)
		),
		React.createElement("div", { className: "clearBoth" })
	);
};

var AddPost = function AddPost(props) {
	return React.createElement(
		"div",
		{ className: "panel" },
		React.createElement(
			"form",
			null,
			React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
			React.createElement("input", { type: "text", name: "data", placeholder: "Your text here..." }),
			React.createElement("input", { type: "text", name: "tags", placeholder: "#tags" }),
			React.createElement("hr", null),
			React.createElement(
				"button",
				null,
				"Close"
			),
			React.createElement(
				"button",
				null,
				"Post"
			)
		)
	);
};

var Post = function Post(props) {
	return React.createElement(
		"div",
		{ className: "panel" },
		React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"...username here..."
			)
		),
		React.createElement(
			"h1",
			null,
			props.title
		),
		React.createElement(
			"div",
			null,
			"...post body here..."
		),
		React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				"notes"
			),
			React.createElement(
				"p",
				null,
				"share"
			),
			React.createElement(
				"p",
				null,
				"reblog"
			),
			React.createElement(
				"p",
				null,
				"like"
			)
		)
	);
};

var PostList = function PostList(props) {
	var postRows = props.posts.map(function (post) {
		return React.createElement(Post, { key: post.id, title: post.title });
	});
	return React.createElement(
		"div",
		null,
		postRows
	);
};

var Footer = function Footer(props) {
	return React.createElement(
		"a",
		{ href: "#" },
		"About"
	);
};

var App = function App(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(NavBar, null),
		React.createElement(AddPost, null),
		React.createElement(PostList, { posts: posts }),
		React.createElement(Footer, null)
	);
};

ReactDOM.render(React.createElement(App, null), node);