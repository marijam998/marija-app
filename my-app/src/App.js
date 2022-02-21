import './App.css';
import React from 'react';
import Home from './components/Home';
import Nav from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Message from './components/Message';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddUser />} />
          <Route exact path="/edit/:id" element={<EditUser />} />
          <Route exact path="*" element={<Message />} />
        </Routes>
      </div>
    )
  }
}

export default App;
