import React from 'react';
import ReactDOM from 'react-dom';


class TheHeadingClass extends React.Component {
    render() {
        return (<div className="big">
        <h1>Learning ALL the things!</h1>
        <h2>{Math.PI.toFixed(20)}</h2>
    </div>
    );
    }
}


///display list of puppies using map()////
// class ThePuppyClass extends React.Component {
//     render() {  return (
//         <h1>sup</h1>)

//     }
// }

//const puppies = ['Slinky', 'Buddy', 'Habibi'];
// const puppyLis = puppies.map(puppy =>
//     <li>{puppy}</li>
//     );


// ReactDOM.render(<ul>{puppyLis}</ul>, 
//       document.getElementById('root'));



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



// ////use ternary operator to randomly generate a dog or cat/////

// function coinToss () {
//   // Randomly return either 'heads' or 'tails'.
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

// const pics = {
//   kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
//   doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
// };

// const img = <img src={pics[coinToss() ==='heads' ? 'kitty' : 'doggy']} height="400"/>;

ReactDOM.render(
    <TheHeadingClass />,
    //<ThePuppyClass />,
    document.getElementById('root')
);
