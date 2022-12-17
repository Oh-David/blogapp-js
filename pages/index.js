import { API } from "aws-amplify";
import { useEffect, useState } from "react";
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
      <h1>asdjk;fhaklsjdfhasdkhjf</h1>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
}
