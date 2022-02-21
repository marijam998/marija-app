import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Message from './Message';

const EditUser = () => {
    const isEqual = require("react-fast-compare");

    const [user, setUser] = useState({})
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getUser(id)
    }, [id]);

    const getUser = (id) => {
        fetch(`http://localhost:3001/person/${id}`)
            .then(response => response.json())
            .then(content => {
                setUser(content)
                setData(content)
            })
            .catch(err => {
                console.log('error', err)
            })
    }
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const saveEditData = (id) => {
        fetch(`http://localhost:3001/person/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div>
            {Object.keys(user).length === 0 ? <Message /> :
                <div>
                    <div><p>Edit user</p></div>
                    <form className="addForm">
                        <label className='labelForm'>Name:</label>
                        <input className="inputForm" name='name' type="text" defaultValue={user.name} required="required" onChange={handleChange} />
                        <label className='labelForm'>Surename:</label>
                        <input className="inputForm" name='sureName' type="text" defaultValue={user.sureName} onChange={handleChange} />
                        <label className='labelForm'>User type:</label>
                        <input className="inputForm" name='userType' type="text" defaultValue={user.userType} onChange={handleChange} />
                        <label className='labelForm'> Created at:</label>
                        <input className="inputForm" name='date' type="date" defaultValue={user.date} onChange={handleChange} />
                        <label className='labelForm'>City:</label>
                        <input className="inputForm" name='city' type="text" defaultValue={user.city} onChange={handleChange} />
                        <label className='labelForm'>Adress:</label>
                        <input className="inputForm" name='adress' type="text" defaultValue={user.adress} onChange={handleChange} />
                        <div className='buttons'>
                            <button className='btnSave' type="submit" disabled={isEqual(user, data)} onClick={(ev) => { ev.preventDefault(); saveEditData(id) }}>Save</button>
                            <Link to='/'>
                                <button className='btnBack' type="submit">Back</button>
                            </Link>
                        </div>
                    </form>
                </div>}
        </div>
    )
}


export default EditUser