import React from 'react';
import './Tweet.scss';
import { FaTwitter } from 'react-icons/fa';

export default function Tweet({name, img, id, tweet}) {
  return (
    <div className="tweet" key={id}>
      <img className="tweet__image"  src={img} alt="profile"/>
      <p className="tweet__userName">{name}</p>
      <div className="tweet__twitterIcon"><FaTwitter/></div>
      <p className="tweet__tweetContent">{tweet}</p>
    </div>
  )
}
