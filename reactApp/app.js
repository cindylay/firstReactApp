// alert('app.js ran!');
// console.log("it ran")

import React from 'react';
import ReactDOM from 'react-dom';


var dummyData = [{ taskText: "clean room", completed: false }, { taskText: "call mom", completed: false }, { taskText: "text Linda", completed: false }, { taskText: "sleep 8 hours", completed: false }]

class Todo extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <li>
        <button onClick="myFunction()">
          X
        </button>
          {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>

    )
  }
}

class TodoList extends React.Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item) => <Todo key={item.taskText + Date.now()} completed={item.completed} task ={item.taskText}/>)}
        </ul>
      </div>
    );
  }
}

class InputLine extends React.Component{
  render() {
    return (
      <div>
          <input type="text" placeholder="Type Todo Here..." />
          <input type="submit" value="Add Todo"/>
      </div>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp /> ,
   document.getElementById('root'));
