import './App.css';
import './styles/App.scss'
import {useEffect, useState} from "react";
import PostService from "./API/PostService";
import PostList from "./components/PostList";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPost] = useState([]);
  const [isPostLoading, setItPostsLoading] = useState(false)

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    setItPostsLoading(true)
    const posts = await PostService.getAll();
    setPost(posts)
    setItPostsLoading(false)
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
