import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../movies'
import ReactPlayer from 'react-player'
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";
import MovieCard from '../components/MovieCard';
import {Link} from 'react-router-dom'

const Details = () => {
 let[volume,setVolume]=useState(false)

 function changeVolume()
 {
  setVolume(prev=>!prev)
 }

  let {slug}=useParams()

  let movie=data.find((movie)=>
  {
    return movie.slug==slug
  })

  let genreSuggestion=data.filter((suggestion)=>
  {
      return suggestion.genre==movie.genre
  })

  return (
    <>
    <div className='relative w-full h-[80vh] overflow-hidden'>
      <ReactPlayer url={movie.youtube_trailer} width="100vw" height="80vh " className="md:scale-[1.45]" muted={!volume} playing="true" loop="true"/>
      <div className="absolute bottom-4 m-5 text-white md:w-[500px] md:left-16 md:bottom-5 backdrop-blur-sm p-3 rounded-lg mb-3">
        <p className='text-2xl md:text-5xl mb-2'>{movie.title}</p>
        <p className='text-sm md:text-lg'>{movie.description}</p>
        <div className='bg-orange-500 inline-block text-sm py-2 px-5 mt-2 rounded-md '>
          IMDB Ratings {movie.imdb_rating}
        </div>
      </div>
      <div className="absolute text-white right-10 top-10">
        <button className='text-2xl border rounded-full border-white p-2' onClick={changeVolume}>
          {
            !volume?<FaVolumeXmark/> :<FaVolumeUp />
          }
        </button> 
      </div>
      <Link to='/'>
      <div className='absolute top-12 left-10'>
        <button className='border border-white px-4 py-1 rounded-md'>Go Back</button>
        </div>
      </Link>
      
    </div>
    <div className='mt-10 w-[90%] mx-auto'>
        <h1 className='text-2xl  text-white font-bold mb-5'>Movies You will Like</h1>
        <div className='flex  flex-wrap gap-4 mx-auto justify-start'>
        {
            genreSuggestion.map((movieSuggestion)=>
            {
                return <MovieCard img={movieSuggestion.img} slug={movieSuggestion.slug}/>
            })
        }
        </div>
        
      </div>
    </>
  )
}

export default Details
