const node = document.getElementById('app');

const posts = [
	{
		id: 1,
		title: "Post One"
	},
	{
		id: 2,
		title: "Whatever"
	},
	{
		id: 3,
		title: "Happy Thanksgiving!"
	}
]

const NavBar = (props) => (
	<div id="navBar">
		<img id="logo" src="./photos/fumblr.png" alt="logo" />
		<input id="search" type="text" name="search" placeholder="Search Fumblr" />
		<ul>
			<li>Dashboard</li>
			<li>Explore</li>
			<li>Messages</li>
			<li>Chat</li>
			<li>Activity</li>
			<li>Account</li>
			<li>Make a post</li>
		</ul>
		<div className="clearBoth"></div>
	</div>
);

const AddPost = (props) => (
	<div className="panel">
		<form>
			<input type="text" name="title" placeholder="Title" />
		{/* this will vary depending on post type */}
			<input type="text" name="data" placeholder="Your text here..." />
			<input type="text" name="tags" placeholder="#tags" />
			<hr />
			<button>Close</button>
			<button>Post</button>
		</form>
	</div>
);

const Post = (props) => (
	<div className="panel">
		<div>
			<p>...username here...</p>
		</div>
		<h1>{props.title}</h1>
		<div>...post body here...</div>
		<div>
			<p>notes</p>
			<p>share</p>
			<p>reblog</p>
			<p>like</p>
		</div>
	</div>
)

const PostList = (props) => {
	const postRows = props.posts.map((post) => (<Post key={post.id} title={post.title}/>));
	return (
		<div>{postRows}</div>
	);
};

const Footer = (props) => (
	<a href="#">About</a>
);

const App = (props) => (
	<div>
		<NavBar />
		<AddPost />
		<PostList posts={posts}/>
		<Footer />
	</div>
);

ReactDOM.render(<App />, node);