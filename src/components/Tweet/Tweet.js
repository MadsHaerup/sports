import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Tweet() {
  const [tweets, setTweets] = useState([]);

  // ────────────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('./tweets.json')
      console.log(result.data)
      setTweets(result.data) // set your state hook
    };
    
    fetchData() // run the async fn
    }, [tweets])
// ────────────────────────────────────────────────────────────────────────────────


  return (
    <>
      {/* {tweets.map(tweet, ()=>{
        <div key={tweet.id}>
          <img src={tweet.image} alt="profile"/>
          <p>{tweet.name}</p>
          <p>{tweet.tweet}</p>
        </div>
      })} */}
    </>
  )
}
