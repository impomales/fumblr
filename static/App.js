"use strict";

var node = document.getElementById('app');

var NavBar = function NavBar(props) {
	return React.createElement(
		"div",
		{ id: "navBar" },
		React.createElement(
			"ul",
			null,
			React.createElement(
				"li",
				null,
				React.createElement(
					"h1",
					null,
					"F"
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement("input", { type: "text", name: "search", placeholder: "Search..." })
			),
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
		)
	);
};

var AddPost = function AddPost(props) {
	return React.createElement(
		"div",
		null,
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

var PostList = function PostList(props) {
	return React.createElement(
		"div",
		null,
		"List of posts will go here."
	);
};

var App = function App(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(NavBar, null),
		React.createElement(AddPost, null),
		React.createElement(PostList, null)
	);
};

ReactDOM.render(React.createElement(App, null), node);