import React from "react";

const EditableRow = ({ data, handleEditDataChange, onCancleClick, saveEdit }) => {

    return (
        <tr>
            <td>{data.id}</td>
            <td>
                <input className="inputEdit" defaultValue={data.name} type="text" required="required" name="name" placeholder="Enter name..." onChange={handleEditDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={data.sureName} type="text" required="required" name="sureName" placeholder="Enter surename..." onChange={handleEditDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={data.userType} type="text" required="required" name="userType" placeholder="Enter user type..." onChange={handleEditDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={data.date} type="text" required="required" name="date" placeholder="Enter date..." onChange={handleEditDataChange} >
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={data.city} type="text" required="required" name="city" placeholder="Enter city..." onChange={handleEditDataChange}>
                </input>

            </td>

            <td>
                <input className="inputEdit" defaultValue={data.adress} type="text" required="required" name="adress" placeholder="Enter adress..." onChange={handleEditDataChange} >
                </input>
            </td>
            <td>
                <button type="submit" className='btnDelete' onClick={(ev) => saveEdit(ev, data.id)}>save</button>
                <button type="submit" className='btnDelete' onClick={onCancleClick}>cancel</button>
            </td>

        </tr>
    )
}

export default EditableRow