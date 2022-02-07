import './App.css';
import React from "react";

class Table extends React.Component {

    render() {
        return (
            <div>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.filterData.map((data) => {
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
                                        <button className='btnDelete'>x</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Table;