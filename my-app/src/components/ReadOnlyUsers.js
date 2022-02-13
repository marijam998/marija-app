import React from "react";

const ReadOnlyUsers = ({ data, onDeleteUser, editClick }) => {

    const deleteUser = (id) => {
        onDeleteUser(id)
    }

    return (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.sureName}</td>
            <td>{data.userType}</td>
            <td>{data.date}</td>
            <td>{data.city}</td>
            <td>{data.adress}</td>
            < td >
                <button className='btnDelete' onClick={() => deleteUser(data.id)}>delete</button>
                <button className='btnEdit' onClick={(event) => editClick(event, data)}>edit</button>
            </td>
        </tr>
    )
}

export default ReadOnlyUsers