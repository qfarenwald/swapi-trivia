import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

const Profile = ( { name, quote, status } ) => {
  return (
    <section className="profile">
      <p className="profile-p"><span className="bold-text">NAME </span>{name}</p>
      <p className="profile-p"><span className="bold-text">QUOTE </span>{quote}</p>
      <p className="profile-p"><span className="bold-text">STATUS </span>{status}</p>
    </section>
  )
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  status: PropTypes.string
}
