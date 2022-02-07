import './App.css';
import React from 'react';
import Form from "./form";
import Table from "./table"
import Nav from "./navigation";
import Message from './Message';

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
            : <Table filterData={this.state.filterData} />
          }
        </div>
      </div>
    );
  }
}

export default App;
