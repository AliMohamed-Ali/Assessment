import React from 'react'

function Pagination({postsPerPage , totalPosts ,paginate}) {
    const pageNumber =[];
    for (let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <nav>
    <ul className='pagination'>
            {pageNumber.map(num=>(
                <li className='page-item' key={num}>
                    <a href='!#' className='page-link' onClick={()=>paginate(num)}>{num}</a>
                </li>
            ))}

        </ul>
    </nav>
  )
}

export default Pagination
