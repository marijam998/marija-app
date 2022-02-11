import React, { Fragment, useState } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyUsers from "./ReadOnlyUsers";

import { useNavigate } from 'react-router-dom';


const Table = ({ filterData, onDelete }) => {

    const navigate = useNavigate()
    const [editUserId, setEditUserId] = useState('')

    const [editData, setEditData] = useState({
        name: '',
        sureName: '',
        userType: '',
        date: '',
        city: '',
        adress: '',
    })

    const handleEditClick = (ev, data) => {
        ev.preventDefault();
        setEditUserId(data.id)
    }

    const handleEditDataChange = (ev) => {
        ev.preventDefault()
        console.log(ev)
        setEditData(
            {
                ...editData,
                [ev.target.name]: ev.target.value
            }
        )
    }

    const onCancleClick = () => {
        setEditUserId('')
    }
    const saveEdit = (ev, data) => {
        ev.preventDefault()
        fetch(`http://localhost:3001/person/${data}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        }).then(() => { navigate('/') })
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
                                <Fragment>
                                    {editUserId === data.id ? (
                                        <EditableRow
                                            handleEditDataChange={handleEditDataChange}
                                            data={data}
                                            onCancleClick={onCancleClick}
                                            saveEdit={saveEdit} />
                                    ) : (
                                        <ReadOnlyUsers data={data} onDeleteUser={onDelete} handleEditClick={handleEditClick} />
                                    )}
                                </Fragment>
                            )
                        })}

                    </tbody>
                </table>
            </form>

        </div >

    )
}
export default Table;