import React from 'react'
import imgStepThree from '../../assets/horseStepThree.jpg'

const StepThree = () => {
  return (
    <div>
      <h3>Step 3: One more race to determin 2nd and 3rd</h3>
      <p>Per previous step, we know the winner (1A in image below)</p>
      <br />
      <p>We can eliminate columns D and E since A/B/C are all faster</p>
      <p>Same goes for rows 4 and 5</p>
      <p>We don't have to race 1A again since we know they are 1st</p>
      <p>We don't have to race 3B because we know 1A, 1B, and 2B must be faster than it</p>
      <p>We don't have to race 2C or 3C because we know 1A, 1B, and 1C must be faster than it</p>
      <p>This leaves us with only 5 horses left.  So we can race these five horses (2A, 3A, 1B, 2B, 1C) and the top two will be our 2nd and 3rd respectively. Hence, we now know the 1st, 2nd, and 3rd place horses.</p>
      <br />
      <p>This costs you <strong>1</strong> race, for a current tally of 7.</p>
      <img src={imgStepThree} />
    </div>
  )
}

export default StepThree;