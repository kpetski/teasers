import React from 'react';
import Paper from 'material-ui/Paper';

const About = props => {

  return (
    <div>
      <h3>About this project</h3>
      <Paper style={{ width: 'calc(100% - 45px)', margin: 15, paddingLeft: 30, paddingBottom: 30 }} zDepth={2}>
        <div className="help">
          <h4>This Application (UI)</h4>
          <p>Walks through solution to the problem</p>
          <h4>Simulation of problems</h4>
          <p>JavaScript files will simulate the problem and the solution to better grasp the concept of the solution.
              The files can be run locally via node.</p>
        </div>
      </Paper>
    </div>
  )
}

export default About;