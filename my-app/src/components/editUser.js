import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const EditUser = () => {
    const [editData, setEditData] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.state.id

    useEffect(() => {
        getUsers(id)
    }, [id])

    const getUsers = (id) => {
        fetch(`http://localhost:3001/person/${id}`)
            .then(response => response.json())
            .then(content => {
                setEditData(content)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleDataChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const saveEditData = (id) => {
        fetch(`http://localhost:3001/person/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div>
            <div>
                <form className="addForm">
                    <label className='label2'>
                        Name:
                        <input className="input2" name='name' type="text" defaultValue={editData.name} required="required" onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Surename:
                        <input className="input2" name='sureName' type="text" defaultValue={editData.sureName} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        User type:
                        <input className="input2" name='userType' type="text" defaultValue={editData.userType} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Created at:
                        <input className="input2" name='date' type="text" defaultValue={editData.date} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        City:
                        <input className="input2" name='city' type="text" defaultValue={editData.city} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Adress:
                        <input className="input2" name='adress' type="text" defaultValue={editData.adress} onChange={handleDataChange} />
                    </label>
                    <button className='btnAdd' type="submit" onClick={(ev) => { ev.preventDefault(); saveEditData(id) }}>Save</button>
                    <Link to="/">
                        <button className='btnBack' type="submit">Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )

}


export default EditUser