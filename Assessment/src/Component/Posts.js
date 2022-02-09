import React from 'react'

export default function Posts({posts , loading}) {
    if(loading){
        return <h1>Loading....</h1>
    }

  return (
   <ul className='list-group mb-4 '>
   {posts.map((post,indx)=>(
       <li key={indx} className='list-group-item '>{post.product_name}</li>
   ))}
   </ul>
  )
}
