import React from "react";
import { Link } from 'react-router-dom'

const Form = ({ name, data, userType, onChangeName, onChangeUserType, onFilterUsers, onClearFilter }) => {

    const changeName = (e) => {
        onChangeName(e.target.value)
    }
    const changeUserType = (e) => {
        onChangeUserType(e.target.value)
    }
    const filterUsers = (ev) => {
        ev.preventDefault()
        onFilterUsers()
    }
    const clearFilter = (ev) => {
        ev.preventDefault()
        onClearFilter()
    }
    return (
        <div>
            <form className='form'>
                <label className='label'>
                    Name:
                    <input className="input" placeholder="Type name..." type="text" value={name} onChange={changeName} />
                </label>
                <label className='label'>
                    User type:
                    <select className='select' value={userType} onChange={changeUserType}>
                        <option value=''>Choose type...</option>
                        {data.map((data) => {
                            return data.userType
                        }).filter((value, index) => {
                            return data.map((data) => {
                                return data.userType
                            }).indexOf(value) === index
                        }).map((userT) => { return <option value={userT}>{userT}</option> })
                        }
                    </select>
                </label>
                <button className='btn' type="submit" onClick={filterUsers}>Search</button>
                <button className='btn' onClick={clearFilter}>Clear</button>
                <Link to="/add">
                    <button className='btnAddUser' type="submit" >Add User</button>
                </Link>

            </form>
        </div>
    )
}

export default Form