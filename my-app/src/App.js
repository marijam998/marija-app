import './App.css';
import React from 'react';
import Form from "./components/form";
import Table from "./components/table"
import Nav from "./components/navigation";
import Message from './components/Message';
import InputForm from './components/inputForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [],
      filterData: [],
      userType: ''
    }
  }
  componentDidMount() {
    this.getUsers()
  }
  getUsers = () => {
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
    this.setState({ name: e })
  }
  changeUserType = (e) => {
    this.setState({ userType: e })
  }
  clearFilter = () => {
    this.setState({
      name: '',
      filterData: this.state.data,
      userType: ''
    })
  }
  filterUsers = () => {
    this.setState({
      filterData: this.state.data.filter((data) => {
        if (this.state.name && this.state.userType) {
          return data.name.toLowerCase().startsWith(this.state.name.toLowerCase())
            && data.userType === this.state.userType
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
  deleteUser = (id) => {
    console.log(id)
    fetch(`http://localhost:3001/person/${id}`, {
      method: 'DELETE'
    })
      .then((result) => {
        result.json()
          .then((response) => {
            console.warn(response)
            this.getUsers()
          })
      })
  }
  render() {
    return (
      <div>
        <h1 className="app-header">Application</h1>
        <div className="body">
          <Nav />
          <Form name={this.state.name}
            onChangeName={this.changeName}
            userType={this.state.userType}
            onChangeUserType={this.changeUserType}
            data={this.state.data}
            onFilterUsers={this.filterUsers}
            onClearFilter={this.clearFilter}
          />
          {this.state.filterData.length === 0
            ? <Message />
            : <Table filterData={this.state.filterData}
              onDelete={this.deleteUser} />
          }
          <InputForm />
        </div>
      </div>
    );
  }
}

export default App;
