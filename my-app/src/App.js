import './App.css';
import React from 'react';
import Home from './components/Home';
import Nav from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

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
