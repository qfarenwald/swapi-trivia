import React from 'react';
import './ScrollingText.css';

const ScrollingText = ( props ) => {

  return (
    <section className="scrolling-text">
      <div className="crawl">
        <div className="title">
          <p>{this.props.episode_id}</p>
          <h1>{this.props.title}</h1>
        </div>
        <p>{this.props.opening_crawl}</p>
      </div>
      
    </section>
  )
}

export default ScrollingText;