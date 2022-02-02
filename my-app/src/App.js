import './App.css';
import React from 'react';
import Form from './form';
import Nav from './navigation';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1 className="app-header">Application</h1>
        <div className="body">
          <Nav />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
