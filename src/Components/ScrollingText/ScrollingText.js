import React from 'react';
import './ScrollingText.css';

const ScrollingText = ( props ) => {

  return (
    <section className="scrolling-text">
      <div className="crawl">
        <div className="title">
          <p>Episode {props.movieData.episode_id}</p>
          <h2>{props.movieData.title}</h2>
        </div>
        <p>{props.movieData.opening_crawl}</p>
      </div>
    </section>
  )
}

export default ScrollingText;