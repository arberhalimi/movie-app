import React, { useState } from 'react'
import axios  from 'axios'
import MovieCard from '../components/MovieCard'


function Movies() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState()
  const [releaseYear, setReleaseYear] = useState()
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
        'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  const searchByTitle = (e) => {
      setTitle(e.target.value)

      switch(e.keyCode) {
        case 13:
            axios.request(options).then(function (response) {
                const sMovies = response.data.results.filter(movie => movie.titleText.text.includes(title) )
                setMovies(sMovies)
                e.target.value = ''
            }).catch(function (error) {
                console.error(error);
            });
            break;
    }
  }

  const searchByReleaseYear = (e) => {
    setReleaseYear(e.target.value)

    switch(e.keyCode) {
      case 13:
        axios.request(options).then(function (response) {
            const sMovies = response.data.results.filter(movie => movie.releaseYear.year == releaseYear)
            setMovies(sMovies)
            e.target.value = ''
        }).catch(function (error) {
            console.error(error);
        });
      break;
    }
  }


  return (
    <>
    <section className='searchby-4'>
      <div className='container py-4'>
        <input type="text" placeholder='Enter your movie title'
        onKeyUp={searchByTitle} className="col-4"></input>
        <input type="text" placeholder='Enter your movie title'
        onKeyUp={searchByReleaseYear} className="col-4 ms-5"></input>
      </div>
    </section >
    <section className='movies bg-light py-4'>
      <div className='container'>
      <div className='row'>
              {
                movies && movies.map((movie) => <div className="col-lg-3 col-md-4 col-sm-12 py-5 bg-color-light" key={movie.id} ><MovieCard  movie={movie} /></div>)  
              }
            </div>
      </div>
    </section>
    </>
  )
}

export default Movies