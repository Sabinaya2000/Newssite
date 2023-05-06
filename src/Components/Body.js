import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Body() {
  let [posts, setPost] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=53acb434b05e477cbedca9adf01fadc9`)
      .then((res) => res.json())
      .then((data) => setPost(data.articles));
  }, []);
  return (
    <>
      <div className='vra'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 py-5'>

              <img className='w-100 girlinavr' src='https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080' />
              <h3 className='py-3'><b>VR Is the Use of Computer Technology to Create a Simulated Environment.</b></h3>

              <p className='nameofauthor'>By Ashley Graham</p>
            </div>
            <div className='col-lg-6 py-5'>
              <div className='recentnews'>
                <h2 >Recent News</h2>
                <h6 className='allrecentnews'><b>ALL RECENT NEWS</b></h6>

              </div>
              <div className='row'>
                {posts.slice(0, 4).map((a) => {
                  return (

                    <div className='allinone'>
                      <div className='col-lg-3 py-4'>
                        <img className='w-100 firstimage' src={a.urlToImage} />
                      </div>
                      <div className='col-lg-9 py-4'>
                        <p className='food'><b>FOOD</b></p>
                        <h3 className='crispyair'><b>{a.title}</b></h3>
                        <p className='nameofauthor'>By {a.author}</p>

                      </div>
                    </div>

                  )

                })}


              </div>

            </div>

            {/* <div className='col-lg-3 py-5'>
                  <div className='row'>
                    <h2>Recent News</h2>
                  </div>
                </div>
                <div className='col-lg-3 py-5 allrecentnews'>
                  <div className='row'>
                    <h6><b>ALL RECENT MEWS</b></h6>
                  </div>
                </div> */}
          </div>
        </div>
      </div>

      <div className='topstories'>
        <div className='container'>
          <div className='recentnews'>
            <h2 >Recent News</h2>
            <h6 className='allrecentnews'><b>ALL RECENT NEWS</b></h6>

          </div>
          <div className='row py-5'>
            <div className='col-lg-8'>
              <img className='w-100 maninhislaptops ' src={require('../images/post_10.jpg')} />
              <div className='maninhislaptop'>
                <p className='food1'><b>TRAVEL</b></p>
                <h3 className='worldtravelholdings'>< a href=''>World Travel Holdings will be honored <br></br>Alongside
                  other Recepients</a></h3>
                <p className='nameofauthor py-2'>By Ashley Graham . Jun 02 2022. 1k views. 210 shares</p>

              </div>
            </div>
            <div className='col-lg-4'>
              <div className='firstpart'>
                <img className='w-100 lady ' src={require('../images/post_12.jpg')} />

                <p className='beauty1'><b>BEAUTY</b></p>
                <div className='beauty'>
                  <h6 className='beauty2'>< a href=''> Unmatched Toner  Cartidge<br></br> Quality 20 less than Oem Price</a></h6>
                  <p className='beauty3'>By Amachea Jajah</p>



                </div>
              </div>

              <div className='firstpart'>
                <img className='w-100 lady ' src={require('../images/post_13.jpg')} />

                <p className='beauty1'><b>BEAUTY</b></p>
                <div className='beauty'>
                  <h6 className='beauty2'>< a href=''> Unmatched Toner  Cartidge<br></br> Quality 20 less than Oem Price</a></h6>
                  <p className='beauty3'>By Amachea Jajah</p>



                </div>
              </div>


            </div>

          </div>
        </div>


      </div>


      <div className='trendingStories mb-5'>
        <div className='container'>
          <div className='recentnews'>
            <h2 >Trending Stories</h2>
            <h6 className='allrecentnews'><b>ALL Trending Stories</b></h6>

          </div>
          <div className='row'>
            {posts.slice(0, 8).map((a) => {
              return (
                <div className='col-lg-6'>

                  <div className='allinone'>
                    <div className='col-lg-3 '>
                      <img className='w-100 firstimage' src={a.urlToImage} />
                    </div>
                    <div className='col-lg-6 '>
                      <p className='food2'><b>FOOD</b></p>
                      <h3 className='crispyair'><b>{a.title}</b></h3>
                      <p className='nameofauthor'>By {a.author}</p>

                    </div>
                  </div>

                </div>

              )

            })}


          </div>
        </div>
      </div>

      <div className='videos'>
        <div className='container'>
          <div className='recentnews1'>
            <h2 className=' py-5' >VIDEOS</h2>
            <h6 className='allrecentnews1 py-5'><b>ALL VIDEOS</b></h6>

          </div>

          <div className='row'>
            <div className='col-lg-8'>
              <img className='w-100 maninhislaptopss ' src={require('../images/post_21.jpg')} />
              <div className='maninhislaptop'>
                <p className='food1'><b>TRAVEL</b></p>
                <h3 className='worldtravelholdings'>< a href=''>World Travel Holdings will be honored <br></br>Alongside
                  other Recepients</a></h3>
                <p className='nameofauthor py-2'>By Ashley Graham . Jun 02 2022. 1k views. 210 shares</p>

              </div>
              <i class="fa-regular fa-circle-play playvideo"></i>
            </div>
            <div className='col-lg-4'>
              {posts.slice(0, 4).map((a) => {
                return (
                  <div className='fitinonepage'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <img className='w-100 videoimage' src={a.urlToImage} />
                        <i class="fa-regular fa-circle-play playvideo1"></i>
                      </div>

                      <div className='col-lg-8'>
                        <div className='island'>
                          <p className='purple'>Travel  </p>
                          <h6 className='maui' ><a href=''><b>{a.title}</b></a></h6>
                          <p className='whowrotethisarticle'>By {a.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

        </div>
      </div>


      <div className='ads'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='ads1'>
                <img className='w-100' src={require('../images/clientbanner.jpg')} />
              </div>
              <div className='row'>
                {posts.slice(0, 8).map((a) => {
                  return (
                    <div className='computertechnology'>
                      <div className='col-lg-4'>
                        <img className='w-100 py-5 girlinavr' src={a.urlToImage} />
                      </div>
                      <div className='col-lg-7'>
                        <div className='vristheuse'>
                          <p className='food'><b>FOOD</b></p>
                          <h6 className='maui1' ><a href=''><b>{a.title}</b></a></h6>

                          <p>{a.content}</p>
                          <p className='whowrotethisarticle1'>By {a.author}</p>
                        </div>
                      </div>
                    </div>

                  )
                })}


              </div>
            </div>
            <div className='col-lg-4 '>
              <img className='w-100' src={require('../images/clientbanner2.jpg')} />

              <div className='subscribe py-5'>
                <div className='share ms-4 '>
                  <i class="fa-sharp fa-solid fa-paper-plane"></i>
                </div>
                <h5 className=' ms-4'><b>Subscribe To Our<br></br> Weekly Newsletter</b></h5>
                <p className=' ms-4'>No spam, notifications only about new products, updates.</p>
                <input className=' ms-4' type='email' placeholder='Enter Email Address '></input>
                <div className='button  ms-4'>
                  <button type="button" class="btn  btn-lg"><b>SUBSCRIBE</b></button>
                </div>





              </div>

              <div className='categories py-2'>
                <h3 className='py-3'><b>MOST VIEWED</b></h3>
                <div className='row'>
                  {posts.slice(0,6).map((a)=>{return(
                    <div className='card py-5'>
                      <div className='row'>
                  <div className='col-lg-5'>
                    <img className='w-100 text-center' src={a.urlToImage}/>
                  </div>
                  <div className='col-lg-7'>
                    <p><b>{a.title}</b></p>
                  </div>
                  </div>
                 
                 </div>
                  )})}
                 
                </div>
                

             


              </div>


            </div>
          </div>
        </div>
      </div>

      <div className='foodanddrinks '>
        <div className='container '>
        <div className='recentnews'>
            <h2 ><b>Food & Drink</b></h2>
            <h6 className='allrecentnews'><b>ALL FOOD & DRINK</b></h6>
            </div>
           
            <div className='row py-5'>
           
            <OwlCarousel className='owl-theme' loop margin={10} nav items={4}>
            <div className='col-lg-3  gap'>
                <div className='photo'>
              <img className='ladys' src={require('../images/post_7.jpg')} />
              </div>
             <div className='crispy'>
             <h5 className='airfryer'><b>Crispy Air Fryer Parmesan And <br></br> Thyme Roasted...</b></h5>
              <p className='jianhong'>By Xu Jianhong</p>
             </div>
              </div>
              <div className='col-lg-3 '>
                <div className='photo'>
              <img className='ladys' src={require('../images/post_18.jpg')} />
              </div>
             <div className='crispy'>
             <h5 className='airfryer'><b>Crispy Air Fryer Parmesan And <br></br> Thyme Roasted...</b></h5>
              <p className='jianhong'>By Xu Jianhong</p>
             </div>
              </div>
              <div className='col-lg-3'>
                <div className='photo'>
              <img className='ladys' src={require('../images/post_21.jpg')} />
              </div>
             <div className='crispy'>
             <h5 className='airfryer'><b>Crispy Air Fryer Parmesan And <br></br> Thyme Roasted...</b></h5>
              <p className='jianhong'>By Xu Jianhong</p>
             </div>
              </div>
              <div className='col-lg-3 '>
                <div className='photo'>
              <img className='ladys' src={require('../images/post_19.jpg')} />
              </div>
             <div className='crispy'>
             <h5 className='airfryer'><b>Crispy Air Fryer Parmesan And <br></br> Thyme Roasted...</b></h5>
              <p className='jianhong'>By Xu Jianhong</p>
             </div>
              </div>
             
             

            </OwlCarousel>
            <div>
 

</div>

             

            
             

            </div>
            
            
          

          
        </div>

      </div>


     

      
    </>
  )
}

export default Body