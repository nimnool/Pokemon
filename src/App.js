import './App.css';
import './styles/App.scss'
import {useEffect, useState} from "react";
import {getAllPosts} from "./API/PostService";
import PostList from "./components/PostList";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPost] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    setIsPostLoading(true)
    const posts = await getAllPosts();
    setPost(posts);
    setIsPostLoading(false)
  }
  return (
    <div className="App">
      {isPostLoading
          ? <Loader/>
          : <PostList posts={posts} listTitle={'Post Title'}/>
      }
    </div>
  );
}

export default App;
