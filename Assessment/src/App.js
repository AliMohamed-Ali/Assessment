import React, { useEffect,useState } from 'react';
import axios from 'axios'

import './App.css';
import Posts from './Component/Posts';
import Pagination from './Component/Pagination';
function App() {
  const [posts,setPosts] = useState([]);
  const [loading ,setLoading]= useState(false);
  const [currentPage ,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(3);


  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true)
      const result = await axios.get('https://assessment-edvora.herokuapp.com');
      setPosts(result.data);
      setLoading(false);

    } 
    fetchPosts();
  },[]);

  //Get Current post 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  //Change current page
  const paginate =(pageNummber)=>setCurrentPage(pageNummber);


  console.log(posts)
  return (
    <div className="container mt-5">
    <h1 className='text-primary mb-3'>My Blog</h1>
    <Posts posts={currentPosts} loading={loading}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      
    </div>
  );
}

export default App;
