import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserHooks = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [input, setInput] = useState({
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
                setData(content)
            })
            .catch(err => console.error(err))
    }

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
                        <input className="input2" name='name' type="text" value={input.name} required onChange={handleInputChange} />
                    </label>
                    <label className='label2'>
                        Surename:
                        <input className="input2" name='sureName' type="text" value={input.sureName} onChange={handleInputChange} />
                    </label>
                    <label className='label2' >
                        User type:
                        <select className='select' name='userType' value={input.userType} onChange={handleInputChange}>
                            <option value=''>Choose type...</option>
                            {data.map((data) => {
                                return data.userType
                            }).filter((value, index) => {
                                return data.map((data) => {
                                    return data.userType
                                }).indexOf(value) === index
                            }).map((userT) => { return <option name='userType' value={userT}>{userT}</option> })
                            }
                        </select>
                    </label> <br />
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
                    <button className='btnAdd' type="submit" onClick={saveUser}>Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddUserHooks