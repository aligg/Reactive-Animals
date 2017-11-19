import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const dog = (<img src="http://placedog.com/" alt="woof" />)
const cat = (<img src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" alt="miau" />)
const llama = (<img src="https://assets.vogue.com/photos/5891c8b18c64075803ad28ac/master/pass/llamas-and-haircuts-llama-justin-bieber.jpg" alt="snort" />)


class Navbar extends React.Component {
    render() {
        const pages = ['about', 'home'];
        const navLinks = pages.map(page => {
            return(<a href={'/' + page}>   {page}</a>
                    );
        });
return (<nav> {navLinks} </nav>);
    }
}


class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { animal: cat };
        this.changeAnimal = this.changeAnimal.bind(this);
    }

    changeAnimal() {
        const newAnimal = this.state.animal === cat ? llama : cat;
        this.setState({ animal: newAnimal })
    }

    render() {
        return (<div onClick={this.changeAnimal}>
                {this.state.animal}
            </div>
            )
        
    }
}


class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click for miaus
      </button>
    );
  }
}


class Miauer extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 1000; i++) {
      speech += 'miau ';
    }
    alert(speech);
  }
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

// class Puppies extends React.Component {
//     render() {  
//         const puppies = ['Slinky', 'Buddy', 'Habibi'];
//         const puppyLis = puppies.map(puppy =>
//              <li>{puppy}</li>
//                         );

//         return (
//         <ul>
//         {puppyLis}
//         </ul>
//         );
//     }
// }


class ProfilePage extends React.Component {
    render() {
        return (<div>
            <Navbar />
            <h1>Random Cute</h1>
            <Toggler />
            <Miauer />
       

        </div>);
    }
}


ReactDOM.render(
    <ProfilePage />,
    document.getElementById('root')
);
