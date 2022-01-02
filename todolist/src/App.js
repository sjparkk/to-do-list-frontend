import React from 'react';
import TodoListTemplate from './components/js/TodoListTemplate';
import Form from './components/js/TodoForm';

class App extends React.Component {
  render() {
    return (
        <TodoListTemplate form={<Form />}>
            To-do List를 작성해주세요!!
        </TodoListTemplate>
    );
  }
}

export default App;
