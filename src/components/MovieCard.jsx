import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({img,slug}) => {
  return (
    <Link to={`/details/${slug}`}>
       <div className='w-84 flex '>
          <img src={img} alt="" className='w-full h-60 object-cover flex-grow rounded-lg'/>
        </div>
    </Link>
     

  )
}

export default MovieCard
