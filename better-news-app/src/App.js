import React from 'react';
import virus from './virus.jpg';
import './App.css';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <p>Welcome to Viral Growth!</p>
        <img src={virus} className="Virus-logo" alt="irus" height = "200px" />
        <p>
          Please log in to get started!
        </p>
        <button type="button" class="btn btn-danger">Get Started!</button>
        <br />
        <button type="button" class="btn btn-info">Login!</button>
        <br />
        <p>Hello User!</p>
        <p>What would you like to do today?</p>
        <button type="button" class="btn btn-warning">Health and Fitness!</button>
        <br />
        <button type="button" class="btn btn-light">Children's Corner!</button>
        <br />
        <button type="button" class="btn btn-dark">Art and Creativity!</button>
        <br />
        <button type="button" class="btn btn-success">Professional!</button>
        <br />
        <button type="button" class="btn btn-warning">Home Improvements!</button>
        <br />
        <button type="button" class="btn btn-light">Social and Staying Connected!</button>
        <br />
        <button type="button" class="btn btn-dark">Self-Help and Mindfulness!</button>
        <br />
        <button type="button" class="btn btn-success">Jump Right In!</button>
        <br />
        <button type="button" class="btn btn-warning">Make a Custom Challenge!</button>
        <br />
        <br />
        <button type="button" class="btn btn-info">Connect with Friends!</button>
        <br />
        <br />
        <button type="button" class="btn btn-danger">View Leaderboards!</button>     
        <br />
        <br />  
                      </header>
    </div>
  );
}

export default App;
