import React from "react";
import { Link } from 'react-router-dom';
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sureName: '',
            userType: '',
            date: '',
            city: '',
            adress: ''
        }
    }
    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    saveUser = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3001/person', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            console.log(result)
        }
        )
    }
    render() {
        return (
            <div>
                <div>
                    <form className="addForm">
                        <label className='label2'>
                            Name:
                            <input className="input2" name='name' type="text" value={this.state.name} onChange={this.changeInput} />
                        </label>
                        <label className='label2'>
                            Surename:
                            <input className="input2" name='sureName' type="text" value={this.state.sureName} onChange={this.changeInput} />
                        </label>
                        <label className='label2'>
                            User type:
                            <input className="input2" name='userType' type="text" value={this.state.userType} onChange={this.changeInput} />
                        </label>
                        <label className='label2'>
                            Created at:
                            <input className="input2" name='date' type="text" value={this.state.date} onChange={this.changeInput} />
                        </label>
                        <label className='label2'>
                            City:
                            <input className="input2" name='city' type="text" value={this.state.city} onChange={this.changeInput} />
                        </label>
                        <label className='label2'>
                            Adress:
                            <input className="input2" name='adress' type="text" value={this.state.adress} onChange={this.changeInput} />
                        </label>
                        <button className='btn2' type="submit" onClick={this.saveUser}>Save</button>
                        <Link to="/home">
                            <button className='btn' type="submit">Back</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}


export default AddUser;