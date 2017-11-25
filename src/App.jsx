const node = document.getElementById('app');

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

const User = (props) => (
	<div>
		<h1>User Blog Title</h1>
		<h2>username</h2>
		<p>desc</p>
		<ul>
			<li>Posts</li>
			<li>Likes</li>
			<li>Following</li>
			<li>Ask me anything</li>
			<li>Archive</li>
		</ul>
	</div>
);

const Post = (props) => (
	<div className="panel">
		<div>
			<p>{props.posted_by}</p>
		</div>
		<h1>{props.title}</h1>
		<div>{props.data}</div>
		<div>
			<p>{props.notes}</p>
			<p>share</p>
			<p>reblog</p>
			<p>like</p>
		</div>
	</div>
)

const PostList = (props) => {
	const postRows = props.posts.map((post) => (
		<Post 	key={post.id} 
				title={post.title}
				posted_by={post.posted_by}
				data={post.data}
				notes={post.notes}/>)
	);
	return (
		<div>{postRows}</div>
	);
};

const Footer = (props) => (
	<a href="#">About</a>
);

class App extends React.Component {
	constructor() {
		super();

		this.state = { posts: [] };
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		fetch('/api/posts')
			.then(response => response.json())
			.then(data => {
				console.log("Total number of records: " + data._metadata.count);
				this.setState({ posts: data.records });
			}).catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<NavBar />
				<AddPost />
				<PostList posts={this.state.posts}/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, node);