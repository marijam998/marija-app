import './App.css';
import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            filterData: [],
            userType: '',
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                this.setState({
                    data: content,
                    filterData: content
                })
            })
            .catch(err => console.error(err))
    }
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    clearFilter = (ev) => {
        ev.preventDefault()
        this.setState({
            name: '',
            filterData: this.state.data,
            userType: ''
        })
    }
    changeUserType = (e) => {
        this.setState({ userType: e.target.value })
    }
    filterUsers = (ev) => {
        ev.preventDefault()
        this.setState({
            filterData: this.state.data.filter((data) => {
                if (this.state.name && this.state.userType) {
                    return data.name.toLowerCase().startsWith(this.state.name.toLowerCase()) && data.userType === this.state.userType
                }
                if (this.state.name) {
                    return data.name.toLowerCase().startsWith(this.state.name.toLowerCase())
                }
                if (this.state.userType) {
                    return data.userType === this.state.userType
                }
                return data
            })
        })
    }
    render() {
        return (
            <div className='formMain'>
                <form className='form'>
                    <label className='label'>
                        Name:
                        <input className="input" type="text" value={this.state.name} onChange={this.changeName} />
                    </label>
                    <label className='label'>
                        User type:
                        <select className='select' value={this.state.userType} onChange={this.changeUserType}>
                            <option value=''>Choose type...</option>
                            {this.state.data.map((data) => {
                                return data.userType
                            }).reduce((prev, cur) => {
                                if (prev.indexOf(cur) === -1) {
                                    prev.push(cur)
                                }
                                return prev
                            }, []).map((userT) => { return <option value={userT}>{userT}</option> })
                            }
                        </select>
                    </label>
                    <button className='btn' type="submit" onClick={this.filterUsers}>Search</button>
                    <button className='btn' onClick={this.clearFilter}>Clear</button>
                </form>
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filterData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.sureName}</td>
                                    <td>{data.userType}</td>
                                    <td>{data.date}</td>
                                    <td>{data.city}</td>
                                    <td>{data.adress}</td>
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

export default Form;