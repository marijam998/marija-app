import React from "react";

class Form extends React.Component {

    changeName = (e) => {
        this.props.onChangeName(e.target.value)
    }
    changeUserType = (e) => {
        this.props.onChangeUserType(e.target.value)
    }
    filterUsers = (ev) => {
        ev.preventDefault()
        this.props.onFilterUsers()
    }
    clearFilter = (ev) => {
        ev.preventDefault()
        this.props.onClearFilter()
    }

    render() {
        return (
            <div>
                <div className='formMain'>
                    <form className='form'>
                        <label className='label'>
                            Name:
                            <input className="input" type="text" value={this.props.name} onChange={this.changeName} />
                        </label>
                        <label className='label'>
                            User type:
                            <select className='select' value={this.props.userType} onChange={this.changeUserType}>
                                <option value=''>Choose type...</option>
                                {this.props.data.map((data) => {
                                    return data.userType
                                }).filter((value, index) => {
                                    return this.props.data.map((data) => {
                                        return data.userType
                                    }).indexOf(value) === index
                                }).map((userT) => { return <option value={userT}>{userT}</option> })
                                }
                            </select>
                        </label>
                        <button className='btn' type="submit" onClick={this.filterUsers}>Search</button>
                        <button className='btn' onClick={this.clearFilter}>Clear</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Form;