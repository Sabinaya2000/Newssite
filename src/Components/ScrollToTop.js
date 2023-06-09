import React, { useEffect, useState } from 'react'

function ScrollToTop() {
    const [scrollToTop,setScrollToTop] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    },[])

    const scrollUp = () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth"

         })
    }
  return (
    <>
   <div className='scrolltotop'>
    {scrollToTop && (
        <button onClick={scrollUp}>^</button>
    )}
    </div>
    </>
  )
}

export default ScrollToTop