import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (
            <div className='navBar'>
                <ul >
                    <li >
                        <Link to='/'>Home
                        </Link>
                    </li>
                    <li >
                        <Link to='/add'>Add user
                        </Link>
                    </li>
                    <li >
                        <Link to='/contact'>Contact
                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Nav;