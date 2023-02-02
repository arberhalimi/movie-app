import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
    const noImage = "https://th.bing.com/th?id=OIP.cUUf67YH-hex_XPKWlnZ1QHaLF&w=204&h=305&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
  return (
    <div className="card">
        <img src={movie.primaryImage !== null ? movie.primaryImage.url : noImage } className="card-img-top" style={{height: "220px"}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{movie.titleText.text}</h5>
            <p className="card-text">Release Year {movie.releaseYear.year}</p>
            <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
        </div>
    </div>
  )
}

export default MovieCard
