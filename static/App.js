"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = document.getElementById('app');

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
				props.posted_by
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
			props.data
		),
		React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				props.notes
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
		return React.createElement(Post, { key: post.id,
			title: post.title,
			posted_by: post.posted_by,
			data: post.data,
			notes: post.notes });
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

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = { posts: [] };
		return _this;
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.loadData();
		}
	}, {
		key: "loadData",
		value: function loadData() {
			var _this2 = this;

			fetch('/api/posts').then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("Total number of records: " + data._metadata.count);
				_this2.setState({ posts: data.records });
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(NavBar, null),
				React.createElement(AddPost, null),
				React.createElement(PostList, { posts: this.state.posts }),
				React.createElement(Footer, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), node);