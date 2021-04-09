import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import Carousel from 'react-grid-carousel';
import './Slider.scss';
export default function Slider() {
  const [tweets, setTweets] = useState([]);

useEffect(() => {
  axios.get('/tweets.json')
  .then(response => {
    console.log(response)
    setTweets(response.data);
  });

}, [setTweets])


  return (
    <>
    <div className="sliderContainer">
    <h2 className="sliderContainer__Heading">What Our Users Say</h2>
    <Carousel 
    cols={5} 
    rows={1} 
    gap={10} 
    loop 
    showDots={true}
    hideArrow={false}
    mobileBreakpoint={560}
    responsiveLayout={
      [
        { breakpoint: 1200, cols: 3, showDots:true},
        { breakpoint: 850, cols: 2, showDots:true },
        { breakpoint: 560, cols: 1, showDots:true, hideArrow:false },
        
      ]
    }
    >

      {tweets.map(tweet =>{
        return(
          <Carousel.Item>
            <Tweet 
            name={tweet.name}
            key={tweet.id}
            img={tweet.image}
            tweet={tweet.tweet}
            />
          </Carousel.Item>

        )
      })}
    </Carousel>
    </div>
    </>
  )
}
