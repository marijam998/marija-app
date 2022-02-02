import './App.css';
import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(content => {
                console.log(content)
                content.map(obj => {
                    return console.log(obj.Usertype)
                })
                this.setState({ value: content })
            })
            .catch(err => console.error(err))
    }

    changeInput = (e) => {
        this.setState({ text: e.target.value })
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
                        <select className='select'>
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
                    <button className='btn' type="button" onClick={this.fetchDb}>Search</button>
                </form>
            </div>
        );
    }
}

export default Form;