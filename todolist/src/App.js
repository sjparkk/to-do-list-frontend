import React from 'react';
import TodoListTemplate from './components/js/TodoListTemplate';

class App extends React.Component {
  render() {
    return (
        <TodoListTemplate>
            To-do List를 작성해주세요!!
        </TodoListTemplate>
    );
  }
}

export default App;
