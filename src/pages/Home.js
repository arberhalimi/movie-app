import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieCard from '../components/MovieCard';

function Home({movie}) {

  const noImage = "https://th.bing.com/th?id=OIP.cUUf67YH-hex_XPKWlnZ1QHaLF&w=204&h=305&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        headers: {
            'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        setMovies(response.data.results)
    }).catch(function (error) {
        console.error(error);
    });
}, [])


  // const imgs = {
  //   firstImg: "https://th.bing.com/th/id/OIP.Y6-UXDSDEJ5VV-PIObPUSQHaLR?pid=ImgDet&rs=1",
  //   secondImg: "https://th.bing.com/th/id/OIP.tih5KwN15rZGfWULRTcixgHaLH?pid=ImgDet&rs=1",
  //   thirdImage: "https://th.bing.com/th/id/OIP.-ikKttCpnTUq1QuSYXetuAHaK-?w=115&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
  // }
  return (
    <>
      <section>
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5">

          <div className="carousel-inner">
            {
              movies && movies.map((movie, index) => {
                if(movie.primaryImage !== null){
                  return (
                    <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={movie.id}>
                  <img src={movie.primaryImage.url } alt="..."/>
                </div>
                  )
                }
              })
            }
            {/* <div className="carousel-item active">
              <img src={movie.primaryImage !== null ? movie.primaryImage.url : noImage } alt="..."/>
            </div>
              <div className="carousel-item">
                <img src={movie.primaryImage !== null ? movie.primaryImage.url : noImage } className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={movie.primaryImage !== null ? movie.primaryImage.url : noImage } className="d-block w-100" alt="..."/>
              </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='latest-movies bg-light'>
        <div className='container'>
            <h1 className='title text-center py-3 mt-5'>Latest movie</h1>
            <div className='row'>
              {
                movies && movies.map((movie) => <div className="col-lg-3 col-md-4 col-sm-12 py-5 bg-color-light" key={movie.id} ><MovieCard  movie={movie} /></div>)  
              }
            </div>
        </div>
      </section>
      <footer className='footer mt-5'>
        <h3 className='text-center mb-5'>All rights reserved &copy;</h3>
      </footer>
    </>
  )
}

export default Home