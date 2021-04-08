import React from 'react';
export default function Tweet({name, img, id, tweet}) {

  return (
    <div key={id}>
      <img src={img} alt="profile"/>
      <p>{name}</p>
      <p>{tweet}</p>
    </div>
  )
}
