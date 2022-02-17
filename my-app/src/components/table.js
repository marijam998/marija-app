import React from "react";
import ReadOnlyUsers from "./ReadOnlyUsers";
import { useNavigate } from 'react-router-dom';

const Table = ({ filterData, deleteUser }) => {

    const navigate = useNavigate()

    const editClick = (ev, data) => {
        ev.preventDefault()
        navigate('/edit', { state: { prop: data, id: data.id } })
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
                                <ReadOnlyUsers key={data.id} data={data} onDeleteUser={deleteUser} editClick={editClick} />


                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}



export default Table;