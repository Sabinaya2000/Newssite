import React, { useEffect, useState } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


function Slider(props) {
  let [posts, setPost] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=53acb434b05e477cbedca9adf01fadc9`)
    
      .then((res) => res.json())
      .then((data) => setPost(data.articles));
  }, []);
  return (
    <>
 
               

 

      <div className='container py-3'>
      <div className='recentnews'>
            <h2 className='text-uppercase' ><b>{props.title}</b></h2>
            <h6 className='allrecentnews text-uppercase'><b>ALL {props.title} NEWS</b></h6>
            </div>
            <div className='row'>
            <OwlCarousel className='owl-theme' loop margin={10} nav items={4} >
      {posts.slice(0, 3).map((a) => {return (
        <div className='card'>
       <img className='w-100 ' src={a.urlToImage} />
       <div className='card-body'>
       
          <p className='fw-bold py-3'>{a.title}</p>
     
          </div>
        </div>
                  
                  )  })}
                  </OwlCarousel>     
                   
                    
                    
                    

                 

                   
                    </div>  
      </div>


     
      
    </>
  )
}

export default Slider