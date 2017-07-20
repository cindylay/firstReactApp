// alert('app.js ran!');
// console.log("it ran")

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["clean room", "call mom", "text my sister", "sleep 8 hours"]

class Todo extends React.Component{
  render() {
    return (
      <li><button> X </button> {this.props.task}</li>
    )
  }
}

class TodoList extends React.Component{
  render() {
    return (
      <div>
        <ul>
          {dummyData.map((item) => <Todo task ={item}/>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<TodoList /> ,
   document.getElementById('root'));
