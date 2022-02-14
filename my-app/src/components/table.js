import React, { Fragment, useState } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyUsers from "./ReadOnlyUsers";

const Table = ({ filterData, deleteUser, dataIsChanged }) => {
    const [editUserId, setEditUserId] = useState(null)
    const [editData, setEditData] = useState({
        name: '',
        sureName: '',
        userType: '',
        date: '',
        city: '',
        adress: '',
    })

    const editClick = (ev, data) => {
        ev.preventDefault();
        setEditUserId(data.id)
        setEditData({
            name: data.name,
            sureName: data.sureName,
            userType: data.userType,
            date: data.date,
            city: data.city,
            adress: data.adress,
        })
    }

    const handleDataChange = (ev) => {
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
        setEditUserId(null)
    }
    const changeData = () => {
        dataIsChanged()
    }

    const saveEdit = (data) => {
        fetch(`http://localhost:3001/person/${data}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        }).then((response) => {
            console.log(response)
            setEditUserId(null)
            changeData()
        })
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
                                <Fragment key={data.id}>
                                    {editUserId === data.id ? (
                                        <EditableRow
                                            handleDataChange={handleDataChange}
                                            editData={editData}
                                            data={data}
                                            onCancleClick={onCancleClick}
                                            saveEdit={saveEdit} />
                                    ) : (
                                        <ReadOnlyUsers data={data} onDeleteUser={deleteUser} editClick={editClick} />
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