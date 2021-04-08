import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tweet from './Tweet';

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
    <div>
      {tweets.map(tweet =>{
        return(
          <Tweet 
          name={tweet.name}
          key={tweet.id}
          img={tweet.image}
          tweet={tweet.tweet}
          />
        )
      })}
    </div>
  )
}
