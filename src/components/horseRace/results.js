import React from 'react'

const Results = (props) => {
  let userAnswer = props.userAnswer ? props.userAnswer.trim() : null
  let correct = !!userAnswer && userAnswer === '7'
  return (
    <div className="help">
        {userAnswer && <span className="mainHeader">{`Your answer of ${userAnswer} ${correct ? 'correct' : 'incorrect'}`}</span>}
        {!userAnswer && <h3>You didn't want to take a guess? Here is the answer anyways...</h3>}
        {(!correct || !userAnswer) && <h3>The correct answer is <strong>7</strong></h3>}
        <p>Click Next to get more detials on why this is the answer</p>
      </div>
  )
}

export default Results;