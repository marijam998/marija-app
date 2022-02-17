import React from "react";
import TableRow from "./TableRow";
import { useNavigate } from 'react-router-dom';

const Table = ({ filterData, deleteUser }) => {

    const navigate = useNavigate()

    const editClick = (ev, data) => {
        ev.preventDefault()
        navigate('/edit', { state: { id: data.id } })
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
                                <TableRow key={data.id} data={data} onDeleteUser={deleteUser} editClick={editClick} />
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}



export default Table;