import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (
            <div className='navBar'>
                <h1 className="app-header">Application</h1>
                <ul>
                    <li className='active'>
                        <Link to='/'>Home
                        </Link>
                    </li>
                    <li className='not-active'>
                        <Link to='/add'>Add user
                        </Link>
                    </li>
                    <li className='not-active'>
                        <Link to='/edit'>Edit user
                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Nav;