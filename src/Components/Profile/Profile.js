import React from 'react';
import './Profile.css';

const Profile = ( { name, quote, status } ) => {
  return (
    <section className="profile">
      <p><span className="bold-text">NAME </span>{name}</p>
      <p><span className="bold-text">QUOTE </span>{quote}</p>
      <p><span className="bold-text">STATUS </span>{status}</p>
    </section>
  )
}

export default Profile;
