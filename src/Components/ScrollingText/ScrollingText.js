import React from 'react';
import './ScrollingText.css';

const ScrollingText = ( props ) => {

  return (
    <article>
      <section className="scrolling-text">
        <div className="crawl">
          <div className="title">
           <p>Episode {props.movieData.episode_id}</p>
            <h4 className="movie-title">{props.movieData.title}</h4>
          </div>
          <p>{props.movieData.opening_crawl}</p>
        </div>
      </section>
    </article>
  )
}

export default ScrollingText;