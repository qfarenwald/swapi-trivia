import React from 'react';
import './ScrollingText.css';
import PropTypes from 'prop-types';

const ScrollingText = ( props ) => {
  let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  let romanEpisodeID = romanNumerals[parseInt(props.movieData.episode_id) - 1]

  return (
    <article>
      <section className="scrolling-text">
        <div className="crawl">
          <div className="title">
           <p>Episode {romanEpisodeID}</p>
            <h4 className="movie-title">{props.movieData.title}</h4>
          </div>
          <p>{props.movieData.opening_crawl}</p>
        </div>
      </section>
    </article>
  )
}

export default ScrollingText;

ScrollingText.propTypes = {
  moveData: PropTypes.object
}