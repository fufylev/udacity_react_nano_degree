import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import DeleteItem from "./DeleteItem";
import ItemsList from "./ItemsList";

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState({ items: this.state.items.slice(0, -1) });
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <Form addItem={this.addItem}/>
        <DeleteItem onDeleteLastItem={this.deleteLastItem} disabled={this.noItemsFound()}/>
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
