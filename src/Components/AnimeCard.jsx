import React from 'react'

const AnimeCard = (props) => {
  return (

    <div className='border border-gray-400 p-3 rounded-lg w-[220px] m-2 transition-all duration-300 
    hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/40'>

      <img
        src={props.anime.images.jpg.large_image_url}
        alt={props.anime.title}
        className='w-full h-[300px] object-cover rounded-md'
      />

      <h1 className='mt-2 font-bold'>
        {props.anime.title}
      </h1>

      <p>
        ⭐ {props.anime.score}
      </p>

      <p>
        Episodes: {props.anime.episodes}
      </p>

    </div>
  )
}

export default AnimeCard