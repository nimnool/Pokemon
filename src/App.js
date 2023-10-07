import './App.css';
import './styles/App.scss'
import {useEffect, useState} from "react";
import PostService from "./API/PostService";
import PostList from "./components/PostList";

function App() {
  const [posts, setPost] = useState([]);
  const [isPostLoading, setItPostsLoading] = useState(false)

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    setItPostsLoading(true)
    const posts = await PostService.getAll();
    console.log(posts)
    setPost(posts)
    setItPostsLoading(false)
  }
  return (
    <div className="App">
      {isPostLoading
          ? <h1>LOAD</h1>
          : <PostList posts={posts} listTitle={'Post Title'}/>
      }
    </div>
  );
}

export default App;
