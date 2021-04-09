import React from 'react';
import './FeatureItem.scss';

export default function FeatureItem({icon, text}) {
  return (
    <div className="featureItem">
      <div className="featureItem__icon">{icon}</div>
      <li className="featureItem__text">{text}</li>
    </div>
  )
}
