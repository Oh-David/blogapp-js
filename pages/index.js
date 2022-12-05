import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postData = await API.graphql({
        query: listPosts,
      });
      console.log(postData);
      setPosts(postData.data.listPosts.items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((posts, index) => (
        <p>{posts.title}</p>
      ))}
    </div>
  );
}
