import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddUserHooks = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: '',
        sureName: '',
        userType: '',
        date: '',
        city: '',
        adress: ''
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
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
            body: JSON.stringify(input)
        }).then(() => {
            //window.location.replace('/')
            navigate('/')

        }
        )
    }

    return (
        <div>
            <div>
                <form className="addForm">
                    <label className='label2'>
                        Name:
                        <input className="input2" name='name' type="text" value={input.name} onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        Surename:
                        <input className="input2" name='sureName' type="text" value={input.sureName} onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        User type:
                        <input className="input2" name='userType' type="text" value={input.userType} onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        Created at:
                        <input className="input2" name='date' type="text" value={input.date} onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        City:
                        <input className="input2" name='city' type="text" value={input.city} onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        Adress:
                        <input className="input2" name='adress' type="text" value={input.adress} onChange={handleInputChange} />
                    </label>
                    <button className='btn2' type="submit" onClick={saveUser}>Save</button>
                    <Link to="/">
                        <button className='btn' type="submit">Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default AddUserHooks