/*Credit to the react code pen on their website for this code
* This is not meant to be original work- just a workshop,
to show how to set up react
*/


import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
