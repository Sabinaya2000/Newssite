import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Category() {
  let {id}=useParams()
  let [posts, setPost] = useState([])
 useEffect(() => {
   fetch(`https://newsapi.org/v2/top-headlines?category=${id}&apiKey=53acb434b05e477cbedca9adf01fadc9`)
   
     .then((res) => res.json())
     .then((data) => setPost(data.articles));
 }, []);

 
  return (
    <>
    <div className='categorypage'>
    <div className='container py-2'>
      <h2 className='text-uppercase'>{id} </h2>
      <div className='row'>
      {posts.map((a) => {return (
          <div className='col-lg-4'>
        <div className='card-body py-3'>
       <img className='w-100 ' src={a.urlToImage} />
       <div className='card-body'>
       
          <p className='fw-bold py-3'>{a.title}</p>
          </div>
        </div>
        </div>
                  )  })}
       
        
      
                 
                </div>
     
              </div>        
                    
                   
              </div>   
                    
                    

                 

            
    
    </>
  )
}

export default Category