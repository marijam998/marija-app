import React from "react";

const EditableRow = ({ data, editData, handleDataChange, onCancleClick, saveEdit }) => {

    return (
        <tr>
            <td>{data.id}</td>
            <td>
                <input className="inputEdit" defaultValue={editData.name} type="text" required="required" name="name" onChange={handleDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={editData.sureName} type="text" required="required" name="sureName" onChange={handleDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={editData.userType} type="text" required="required" name="userType" onChange={handleDataChange}>
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={editData.date} type="text" required="required" name="date" onChange={handleDataChange} >
                </input>
            </td>

            <td>
                <input className="inputEdit" defaultValue={editData.city} type="text" required="required" name="city" onChange={handleDataChange}>
                </input>

            </td>

            <td>
                <input className="inputEdit" defaultValue={editData.adress} type="text" required="required" name="adress" onChange={handleDataChange} >
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