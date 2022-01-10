import React from 'react';

class TodoItemList extends React.Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        return (
            <div>
                TodoItem
            </div>
        );
    }
}

export default TodoItemList;