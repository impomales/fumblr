const node = document.getElementById('app');

const NavBar = (props) => (
	<div>
		<ul>
			<li><h1>F</h1></li>
			<li><input type="text" name="search" placeholder="Search..." /></li>
			<li>Dashboard</li>
			<li>Explore</li>
			<li>Messages</li>
			<li>Chat</li>
			<li>Activity</li>
			<li>Account</li>
			<li>Make a post</li>
		</ul>
	</div>
);

const AddPost = (props) => (
	<div>
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

const PostList = (props) => (
	<div>List of posts will go here.</div>
);

const App = (props) => (
	<div>
		<NavBar />
		<AddPost />
		<PostList />
	</div>
);

ReactDOM.render(<App />, node);