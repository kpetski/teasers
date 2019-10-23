import React from 'react'
import imgStepTwo from '../../assets/horseStepTwo.jpg'

const StepTwo = () => {
  return (
    <div className="help">
      <h3>Step 2: Race the first place horse from your first set of races.</h3>
      <p>You now know the winner of this race is the 1st place horse. (1A in image below)</p>
      <br />
      <p>Below the horses are grouped by where they came in on their first race, and then ordered by the results of this race. </p>
      <br />
      <p>This costs you <strong>1</strong> race, for a current tally of 6.</p>
      <img src={imgStepTwo} />
    </div>
  )
}

export default StepTwo;