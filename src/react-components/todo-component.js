/*Credit to the react code pen on their website for this code
* This is not meant to be original work- just a workshop,
to show how to set up react
*/

import React from 'react'
import TodoList from './task-list.js'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };

    //bindings.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>A Simple Todo List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Task.
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {

    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevnpState.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoApp;
