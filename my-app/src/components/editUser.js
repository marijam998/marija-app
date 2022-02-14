import React, { useState, useEffect } from 'react';

const EditUser = () => {

    const [editData, setEditData] = useState({
        id: '',
        name: '',
        sureName: '',
        userType: '',
        date: '',
        city: '',
        adress: ''
    })

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                console.log(content)
                setEditData(content)
            })
            .catch(err => console.error(err))
    }

    const handleDataChange = (e) => {
        e.preventDefault()
        console.log(e)
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        console.log(editData)
    }
    const saveEdit = (ev, editData) => {
        ev.preventDefault()
        fetch(`http://localhost:3001/person/${editData}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        }).then(() => {
            window.location.replace('/')

        })
    }

    return (
        <div>
            <div>
                <form className="addForm">
                    <label className='label2'>
                        ID:
                        <input className="input2" name='id' type="text" defaultValue={editData.id} required="required" placeholder={editData.id} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Name:
                        <input className="input2" name='name' type="text" defaultValue={editData.name} required="required" placeholder={editData.name} onChange={handleDataChange} />
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
                    <button className='btnAdd' type="submit" onClick={(ev) => saveEdit(ev, editData.id)}>Save</button>
                </form>
            </div>
        </div>
    )

}


export default EditUser