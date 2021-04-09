import React from 'react';
import './Team.scss';
import Buttons from '../Buttons/Buttons';
import bg from './mobilepreview.svg';

export default function Team() {
  return (
    <div className="team">
      <div className="team__bg">
        <img className="team__bg__img" src={bg} alt=""/>
      </div>
      <div className="team__container">
        <h2 className="team__container__heading">Get Up Close With Your Team</h2>
        <p className="team__container__text">If you’re interested in the scores of more than one team 
        (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and 
        competitions that matter to you using the ‘My Scores’ section. 
        So, make sure you’re a top-flight football fan by downloading the Football Score Centre now.
        It’s got all this:</p>
        <div className="team__container__btn">
        <Buttons/>
        </div>
      </div>
    </div>
  )
}
