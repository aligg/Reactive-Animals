import React from 'react';
import ReactDOM from 'react-dom';

const heading = (<div className="big">
        <h1>Learning ALL the things!</h1>
        <h2>{Math.PI.toFixed(20)}</h2>
    </div>
    );

const thelist = (
  <ul>
    <li>This</li>
    <li>is</li>
    <li>a</li>
    <li>list</li>
  </ul>
  );

const puppy = require('random-puppy');

puppy()
    .then(url => {
        console.log(url);
    })

ReactDOM.render(
    heading, 
    document.getElementById('root')
    );

// ReactDOM.render(thelist, document.getElementById('thingtwo'));