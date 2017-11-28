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

class AddPost extends React.Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let form = document.forms.makePost;

		const tagArr = form.tags.value.split(',');

		this.props.addPost({
			title: form.title.value,
			data: form.data.value,
			tags: tagArr
		})

		form.title.value = "";
		form.data.value = "";
		form.tags.value = "";
	}

	render() {
		return (
			<div className="panel">
				<form name="makePost" onSubmit={this.handleSubmit}>
					<input type="text" name="title" placeholder="Title" />
				{/* this will vary depending on post type */}
					<input type="text" name="data" placeholder="Your text here..." />
					<input type="text" name="tags" placeholder="#tags" />
					<hr />
					<button type="submit">Post</button>
				</form>
				<button>Close</button>
			</div>
		);
	}
}
	
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
		<div>{props.tags}</div>
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
		<Post 	key={post._id} 
				title={post.title}
				posted_by={post.posted_by}
				data={post.data}
				tags={post.tags.join(',')}
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

		this.addPost = this.addPost.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		fetch('/api/posts')
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						console.log("Total number of records: " + data._metadata.count);

						this.setState({ posts: data.records });
					});
				} else {
					response.json().then(err => {
						alert(err.message);
					});
				}
			}).catch(err => {
				alert(err.message);
			});
	}

	addPost(newPost) {
		fetch('/api/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(newPost)
		})
		.then(response => {
			if (response.ok) {
				response.json().then(data => {
					const updatedList = this.state.posts.concat(data);
					this.setState({ posts: updatedList });
				});
			} else {
				response.json().then(err => {
					alert(err.message);
				});
			}
		}).catch(err => {
			alert(err.message);
		})
	}

	render() {
		return (
			<div>
				<NavBar />
				<AddPost addPost={this.addPost}/>
				<PostList posts={this.state.posts}/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, node);