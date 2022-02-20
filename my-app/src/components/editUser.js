import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Message from './Message';

const EditUser = () => {
    const [editData, setEditData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getUsers(id)
    }, [id]);

    const getUsers = () => {
        fetch(`http://localhost:3001/person/${id}`)
            .then(response => response.json())
            .then(content => {
                setEditData(content)
                console.log(content)
            })
            .catch(err => {
                console.log('error', err)
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
            {Object.keys(editData).length === 0 ? <Message /> :
                <div>
                    <div><p>Edit user</p></div>
                    <form className="addForm">
                        <label className='labelForm'>
                            Name: </label>
                        <input className="inputForm" name='name' type="text" defaultValue={editData.name} required="required" onChange={handleDataChange} />

                        <label className='labelForm'>
                            Surename: </label>
                        <input className="inputForm" name='sureName' type="text" defaultValue={editData.sureName} onChange={handleDataChange} />

                        <label className='labelForm'>
                            User type: </label>
                        <input className="inputForm" name='userType' type="text" defaultValue={editData.userType} onChange={handleDataChange} />

                        <label className='labelForm'>
                            Created at: </label>
                        <input className="inputForm" name='date' type="text" defaultValue={editData.date} onChange={handleDataChange} />

                        <label className='labelForm'>
                            City: </label>
                        <input className="inputForm" name='city' type="text" defaultValue={editData.city} onChange={handleDataChange} />

                        <label className='labelForm'>
                            Adress: </label>
                        <input className="inputForm" name='adress' type="text" defaultValue={editData.adress} onChange={handleDataChange} />

                        <div className='buttons'>
                            <button className='btnSave' type="submit" onClick={(ev) => { ev.preventDefault(); saveEditData(id) }}>Save</button>
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