import React from 'react';

class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul >
                    <li >
                        <a className='active' href="http://localhost:3000/">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">About</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;