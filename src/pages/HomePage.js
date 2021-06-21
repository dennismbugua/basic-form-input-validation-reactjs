import React from 'react'

export default function HomePage() {
	return (<div className="blog">
		<div className="content">
			<h1>Posts</h1>
			<ul><li><h2>Title</h2><p>content</p></li></ul>
		</div>
		<div className="sidebar"><div><h2>User Profile</h2><ul><li>Email:</li><li>Phone:</li><li>Website</li></ul></div><div><h2>Authors</h2></div></div>
	</div>)
}