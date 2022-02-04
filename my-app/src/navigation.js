import './App.css';
import React from 'react';

class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul >
                    <li >
                        <a href="http://localhost:3000/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;