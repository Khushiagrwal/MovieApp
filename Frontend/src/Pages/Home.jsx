  import React from 'react';
  import { Link } from 'react-router-dom';
  import Slider from 'react-slick';
  import Header from '../Component/Header';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import "../../public/Css/style.css";
  import m1 from "../../public/Images/movie1.jpg";
  import m2 from "../../public/Images/movie2.jpg";
  import m3 from "../../public/Images/movie3.jpg";
  import m4 from "../../public/Images/movie4.jpg";
  import m5 from "../../public/Images/movie5.jpg";
  import m8 from "../../public/Images/movie8.jpg";
  import m9 from "../../public/Images/movie9.jpg";
  import m10 from "../../public/Images/movie10.jpg";
  
import Footer from '../Component/Footer';

  function Home() {
    const userId = localStorage.getItem('userId');

    const sliderImages = [
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww"
      ,
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWVzfGVufDB8fDB8fHww",m2,m3,m4,m5
    ];

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,         
      autoplaySpeed: 2000,   
    };

    return (
      <div className="home-container">
        <Header />

        <div className='slide'>
        <h3>Featured Movies</h3>
        <hr />
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`slider ${index}`} className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className='card'>
          <ol >
            <h5>Top Movies</h5>
            <hr />
            <li>Kingdom of the Planet of the Apes</li>
            <li>Civil War</li>
            <li>Godzilla x Kong: The New Empire</li>
            <li>The Garfield Movie</li>
          </ol>
          <ol>
            <h5>New Movies</h5>
            <hr />
            <li>Civil War</li>
            <li>Furiosa: A Mad Max Saga</li>
            <li>The Garfield Movie</li>
            <li>Inside Out 2</li>
            <li>Challengers</li>
          </ol>
          <ol>
            <h5>Just Added</h5>
            <hr />
            <li>Civil War</li>
            <li>Furiosa: A Mad Max Saga</li>
            <li>The Garfield Movie</li>
            <li>Inside Out 2</li>
            <li>Challengers</li>
          </ol>
        </div>
        <div className='movie-card'>
          <ol className='movie-ol'>
            <li><img className='img-ol' src={m10} alt="" /></li>
          </ol>
          <ol className='movie-ol'>
            <li><img className='img-ol' src={m8} alt="" /></li>
          </ol>
          <ol className='movie-ol'>
            <li><img className='img-ol' src={m9} alt="" /></li>
          </ol>
          <ol className='movie-ol'>
            <li><img className='img-ol' src={m1} alt="" /></li>
          </ol>
          <ol className='movie-ol'>
            <li><img className='img-ol' src={m2} alt="" /></li>
          </ol>

        </div>
        <div>
          
        </div>
        <Footer/>
      </div>
    );
  }

  export default Home;
