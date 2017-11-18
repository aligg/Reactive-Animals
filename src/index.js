import React from 'react';
import ReactDOM from 'react-dom';


class Navbar extends React.Component {
    render() {
        const pages = ['work', 'adventure', 'contact'];
        const navLinks = pages.map(page => {
            return(<a href={'/' + page}>{page}
                    </a>
                    )
        });
return <nav> {navLinks} </nav>;
    }
}


class Kitty extends React.Component {
    render() {
        function makeDoggy(e) {
            e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
            e.target.setAttribute('alt', 'doggy');
                                };
        const kitty = (
                <img onClick={makeDoggy}
                src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
                alt="kitty"
                height="400" />
);
        return (<div>
            {kitty}
            </div>
            );
    }
}


class Puppies extends React.Component {
    render() {  
        const puppies = ['Slinky', 'Buddy', 'Habibi'];
        const puppyLis = puppies.map(puppy =>
             <li>{puppy}</li>
                        );

        return (
        <ul>{puppyLis}</ul>
        );
    }
}


class ProfilePage extends React.Component {
    render() {
        return (<div>
            <Navbar />
            <h1> Learning ALL the things!</h1>
            <Kitty />
            <Puppies />

        </div>);
    }
}


ReactDOM.render(
    <ProfilePage />,
    document.getElementById('root')
);
