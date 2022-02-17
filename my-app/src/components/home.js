import React, { useState, useEffect } from 'react';
import Form from "./Form";
import Table from "./Table"
import Message from './Message';
import Loading from './Loading';

const Home = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [userType, setUserType] = useState('')
    const [isLoading, setIsLoading] = useState(false)

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

    const dataIsChanged = () => {
        getUsers()
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
        }).then(() => {
            getUsers()
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
                    : isLoading ? <Loading /> :
                        <Table
                            filterData={filterData}
                            deleteUser={deleteUser}
                            dataIsChanged={dataIsChanged}
                        />
                }
            </div>
        </div>
    )
}

export default Home