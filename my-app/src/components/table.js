import React from "react";
import { useNavigate } from 'react-router-dom';

const Table = ({ filterData, deleteUser }) => {

    const navigate = useNavigate()

    const editClick = (ev, data) => {
        ev.preventDefault()
        navigate(`/edit/${data.id}`)
    }
    return (
        <div>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surename</th>
                            <th>User type</th>
                            <th>Created at</th>
                            <th>City</th>
                            <th>Adress</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.sureName}</td>
                                    <td>{data.userType}</td>
                                    <td>{data.date}</td>
                                    <td>{data.city}</td>
                                    <td>{data.adress}</td>
                                    <td>
                                        <button className='btnDelete' onClick={(ev) => { ev.preventDefault(); deleteUser(data.id) }}>delete</button>
                                        <button className='btnEdit' onClick={(event) => editClick(event, data)}>edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Table;