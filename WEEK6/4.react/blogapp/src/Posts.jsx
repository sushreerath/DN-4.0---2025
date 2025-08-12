import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      
      
      const postObjects = data.map(
        (p) => new Post(p.userId, p.id, p.title, p.body)
      );

      this.setState({ posts: postObjects });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  
  componentDidMount() {
    this.loadPosts();
  }

 
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.error(info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
