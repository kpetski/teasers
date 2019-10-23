import React from 'react'
import imgHorse from '../../assets/horseRace.jpg'

const Question = () => {
  return (
    <div>
      <div className="help">
        <h4>Problem:</h4>
        <p>There are 25 horses among which you need to find out the fastest 3 horses. You can conduct race among at most 5 to find out their relative speed. At no point you can find out the actual speed of the horse in a race. Find out how many races are required to get the top 3 horses.</p>
        <br />
        <img src={imgHorse} />
      </div>
    </div>
  )
}

export default Question;