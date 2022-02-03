import './App.css';
import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            value: [],
            select: ''
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                this.setState({ value: content })
            })
            .catch(err => console.error(err))
    }

    changeInput = (e) => {
        this.setState({ searchText: e.target.value })
    }
    changeSelect = (e) => {
        this.setState({ select: e.target.value })
    }

    searchUser = (ev) => {
        ev.preventDefault()
        {
            this.state.value.filter((val) => {
                return val.Name.includes(this.state.searchText) && val.Usertype === this.state.select
            }).map((p) => {
                console.log(p)
            })
        }
    }

    render() {
        return (
            <div className='formMain'>
                <form className='form'>
                    <label className='label'>
                        Name:
                        <input className="input" type="text" value={this.state.text} onChange={this.changeInput} />
                    </label>
                    <label className='label'>
                        User type:
                        <select className='select' onChange={this.changeSelect}>
                            {this.state.value.map((obj) => {
                                return obj.Usertype
                            }).reduce((pr, cr) => {
                                if (pr.indexOf(cr) === -1) {
                                    pr.push(cr)
                                }
                                return pr
                            }, []).map(ob => { return <option value={ob}>{ob}</option> })
                            }
                        </select>
                    </label>
                    <button className='btn' type="submit" onClick={this.searchUser}>Search</button>

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
                        {this.state.value.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Surename}</td>
                                    <td>{data.Usertype}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.City}</td>
                                    <td>{data.Adress}</td>
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