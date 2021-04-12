import React from 'react';
import './UserFriendly.scss';
import score from './score.svg';
export default function UserFriendly() {
  return (
    <div className="score">
      <div className="score__content">
        <h2 className="score__content__smallheading">Get started</h2>
        <h1 className="score__content__heading">User-friendly Interface</h1>
        <p className="score__content__text">The in-game goal clips from every Premier League match
        are available to Guardian TV customers with a Guardian subscription.</p>
        <p className="score__content__text">So, if you’re not a subscriber, now’s the time to make that savvy call. If that’s a step too far for you, you can still watch loads of firecracker
        Premier League action as long as you sign in with a free Guardian iD.</p>
        <a className="score__content__link" href="/learnmore">Learn more</a>
      </div>

      <div className="score__bg">
        <img className="score__bg__img" src={score} alt="showing the score"/>
      </div>

    </div>
  )
}
