import React from "react";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            surename: '',
            type: '',
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        }).then((result) => {
            console.log(result)
        }
        )
    }

    render() {
        return (
            <div>
                <div className='formMain'>
                    <form className='form'>

                        <label className='label'>
                            Name:
                            <input className="input" name='text' type="text" value={this.state.text} onChange={this.changeInput} />
                        </label>
                        <label className='label'>
                            Surename:
                            <input className="input" name='surename' type="text" value={this.state.surename} onChange={this.changeInput} />
                        </label>
                        <label className='label'>
                            User type:
                            <input className="input" name='type' type="text" value={this.state.type} onChange={this.changeInput} />
                        </label>
                        <label className='label'>
                            Created at:
                            <input className="input" name='date' type="text" value={this.state.date} onChange={this.changeInput} />
                        </label>
                        <label className='label'>
                            City:
                            <input className="input" name='city' type="text" value={this.state.city} onChange={this.changeInput} />
                        </label>
                        <label className='label'>
                            Adress:
                            <input className="input" name='adress' type="text" value={this.state.adress} onChange={this.changeInput} />
                        </label>
                        <button className='btn' type="submit" onClick={this.saveUser}>Save</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default InputForm;