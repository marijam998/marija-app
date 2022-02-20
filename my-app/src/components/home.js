import React, { useState, useEffect } from 'react';
import Form from "./Form";
import Table from "./Table"
import Message from './Message';
import Loading from './Loading';

const Home = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('')

    useEffect(() => {
        getUsers()
    }, []);
    const getUsers = () => {
        setIsLoading(true)
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                setData(content)
                setFilterData(content)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.error(err)
            })
    }
    const changeName = (e) => {
        setName(e)
    }
    const changeUserType = (e) => {
        setUserType(e)
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
    const clearFilter = () => {
        setName('')
        setUserType('')
        setFilterData(data)
    }
    const deleteUser = (id) => {
        fetch(`http://localhost:3001/person/${id}`, {
            method: 'DELETE'
        }).then(() => {
            getUsers()
        })
    }
    return (
        <div className="body">
            <Form name={name}
                data={data}
                userType={userType}
                changeName={changeName}
                changeUserType={changeUserType}
                filterUsers={filterUsers}
                clearFilter={clearFilter}
            />
            {filterData.length === 0
                ? <Message />
                : isLoading ? <Loading /> :
                    <Table
                        filterData={filterData}
                        deleteUser={deleteUser}
                    />
            }
        </div>
    )
}

export default Home