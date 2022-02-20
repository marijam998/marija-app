import React from "react";
import { Link } from 'react-router-dom'

const Form = ({ name, data, userType, changeName, changeUserType, filterUsers, clearFilter }) => {
    return (
        <div>
            <form className='searchForm'>
                <label className='label'>
                    Name:
                    <input className="inputName" placeholder="Type name..." type="text" value={name} onChange={(e) => changeName(e.target.value)} />
                </label>
                <label className='label'>
                    User type:
                    <select className='select' value={userType} onChange={(e) => changeUserType(e.target.value)}>
                        <option className='select' key="default" value=''>Choose type...</option>
                        {data.map((data) => {
                            return data.userType
                        }).filter((value, index) => {
                            return data.map((data) => {
                                return data.userType
                            }).indexOf(value) === index
                        }).map((userT, i) => { return <option className='select' key={`${data.id}${i}`} value={userT}>{userT}</option> })
                        }
                    </select>
                </label>
                <button className='btnSearch' type="submit" onClick={(ev) => { ev.preventDefault(); filterUsers() }}>Search</button>
                <button className='btnClear' onClick={(ev) => { ev.preventDefault(); clearFilter() }}>Clear</button>
                <Link to="/add">
                    <button className='btnAddUser' type="submit">Add User</button>
                </Link>
            </form>
        </div>
    )
}

export default Form