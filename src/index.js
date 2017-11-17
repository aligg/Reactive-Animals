import React from 'react';
import ReactDOM from 'react-dom';

// const heading = (<div className="big">
//         <h1>Learning ALL the things!</h1>
//         <h2>{Math.PI.toFixed(20)}</h2>
//     </div>
//     );

// const thelist = (
//   <ul>
//     <li>This</li>
//     <li>is</li>
//     <li>a</li>
//     <li>list</li>
//   </ul>
//   );

// const puppy = require('random-puppy');

// puppy().then(url => {
//         console.log(url);
//     })

// ReactDOM.render(
//     heading, 
//     document.getElementById('root')
//     );

// // ReactDOM.render(thelist, document.getElementById('thingtwo'));

// function makeDoggy(e) {
//   // Call this extremely useful function on an <img>.
//   // The <img> will become a picture of a doggy.
//   e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
//   e.target.setAttribute('alt', 'doggy');
// }

// const kitty = (
//     <img onClick={makeDoggy}
//         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
//         alt="kitty"
//         height="400" />
// );

// ReactDOM.render(kitty, document.getElementById('root'));



////use ternary operator to randomly generate a dog or cat/////

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() ==='heads' ? 'kitty' : 'doggy']} height="400"/>;

ReactDOM.render(
    img, 
    document.getElementById('root')
);
