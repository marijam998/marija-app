import './App.css';
import React from 'react';
import Home from './components/home';
import Nav from './components/navigation';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/addUser';
import EditUser from './components/editUser';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1 className="app-header">Application</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit" element={<EditUser />} />
        </Routes>
      </div>
    );
  }
}

export default App;
