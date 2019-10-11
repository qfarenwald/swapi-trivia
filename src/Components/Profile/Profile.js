import React from 'react';
import './Profile.css';

const Profile = ( { name, quote, status } ) => {
  return (
    <div>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{status}</p>
    </div>
  )
}

export default Profile;
