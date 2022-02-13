import React, { useState, useEffect } from 'react';
import Form from "./form";
import Table from "./table"
import Message from './Message';


const Home = () => {

    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [userType, setUserType] = useState([])

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                setData(content)
                setFilterData(content)
            })
            .catch(err => console.error(err))
    }
    const changeName = (e) => {
        setName(e)
    }
    const changeUserType = (e) => {
        setUserType(e)
    }
    const clearFilter = () => {
        setName('')
        setUserType('')
        setFilterData(data)
    }
    const filterUsers = () => {
        setFilterData(
            data.filter((data) => {
                if (name && userType) {
                    return data.name.toLowerCase().startsWith(name.toLowerCase())
                        && data.userType === userType
                }
                if (name) {
                    return data.name.toLowerCase().startsWith(name.toLowerCase())
                }
                if (userType) {
                    return data.userType === userType
                }
                return data
            })
        )
    }
    const deleteUser = (id) => {
        fetch(`http://localhost:3001/person/${id}`, {
            method: 'DELETE'
        })
            .then((result) => {
                result.json()
                    .then((response) => {
                        console.warn(response)
                        getUsers()
                    })
            })
    }

    return (
        <div>
            <div className="body">
                <Form name={name}
                    data={data}
                    userType={userType}
                    onChangeName={changeName}
                    onChangeUserType={changeUserType}
                    onFilterUsers={filterUsers}
                    onClearFilter={clearFilter}
                />
                {filterData.length === 0
                    ? <Message />
                    : <Table
                        filterData={filterData}
                        onDelete={deleteUser}

                    />
                }
            </div>
        </div>
    )
}

export default Home