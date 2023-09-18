import React from 'react'
import './Results.scss'

function Results() {
  return (
    <div className="results-section">
        <h1 className="results-section__header">The results are in!</h1>
        <p className="results-section__text">Based on your answers, we’ve made your ideal skincare routine.</p>

        <div className="results-section__buttonWrapper">
            <button className="results-section__button">SHOW MY RESULTS</button>
        </div>
    </div>
  )
}

export default Results