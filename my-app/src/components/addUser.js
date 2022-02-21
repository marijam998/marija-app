import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AddUser = () => {
    const [data, setData] = useState([])
    const [user, setUser] = useState({
        name: '',
        sureName: '',
        userType: '',
        date: '',
        city: '',
        adress: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, []);
    const getUsers = () => {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                setData(content)
            })
            .catch(err => console.error(err))
    }
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const saveUser = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3001/person', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {
            navigate('/')
        }
        )
    }
    return (
        <div>
            <div><p>Add user</p></div>
            <form className="addForm">
                <label className='labelForm'>Name:</label>
                <input className="inputForm" name='name' type="text" value={user.name} required onChange={handleChange} />
                <label className='labelForm'>Surename:</label>
                <input className="inputForm" name='sureName' type="text" value={user.sureName} onChange={handleChange} />
                <label className='labelForm'>User type:</label>
                <select className='selectForm' name='userType' value={user.userType} onChange={handleChange}>
                    <option value=''>Choose type...</option>
                    {data.map((data) => {
                        return data.userType
                    }).filter((value, index) => {
                        return data.map((data) => {
                            return data.userType
                        }).indexOf(value) === index
                    }).map((userT, i) => { return <option key={`${data.id}${i}`} name='userType' value={userT}>{userT}</option> })
                    }
                </select>
                <label className='labelForm'>Created at:</label>
                <input className="inputForm" name='date' type="date" value={user.date} onChange={handleChange} />
                <label className='labelForm'>City:</label>
                <input className="inputForm" name='city' type="text" value={user.city} onChange={handleChange} />
                <label className='labelForm'>Adress:</label>
                <input className="inputForm" name='adress' type="text" value={user.adress} onChange={handleChange} />
                <div className='buttons'>
                    <button className='btnSaveAdd' type="submit" onClick={saveUser}>Save</button>
                    <Link to='/'>
                        <button className='btnBack' type="submit">Back</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddUser