import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [editData, setEditData] = useState(location.state.prop)


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
                    {/* <label className='label2'>
                        ID:
                        <input className="input2" name='id' type="text" defaultValue={location.state.prop.id} required="required" onChange={handleDataChange} />
                    </label> */}
                    <label className='label2'>
                        Name:
                        <input className="input2" name='name' type="text" defaultValue={location.state.prop.name} required="required" onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Surename:
                        <input className="input2" name='sureName' type="text" defaultValue={location.state.prop.sureName} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        User type:
                        <input className="input2" name='userType' type="text" defaultValue={location.state.prop.userType} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Created at:
                        <input className="input2" name='date' type="text" defaultValue={location.state.prop.date} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        City:
                        <input className="input2" name='city' type="text" defaultValue={location.state.prop.city} onChange={handleDataChange} />
                    </label>
                    <label className='label2'>
                        Adress:
                        <input className="input2" name='adress' type="text" defaultValue={location.state.prop.adress} onChange={handleDataChange} />
                    </label>
                    <button className='btnAdd' type="submit" onClick={(ev) => { ev.preventDefault(); saveEditData(location.state.id) }}>Save</button>
                </form>
            </div>
        </div>
    )

}


export default EditUser