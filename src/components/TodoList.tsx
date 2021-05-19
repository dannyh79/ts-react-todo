import React from 'react';
import TodoItem from './TodoItem';

interface IProps {
  todos: ITodoItem[];
}

const TodoList = ({ todos }: IProps): JSX.Element => {
  return (
    <ul>
      {todos.map((todo: ITodoItem, index: number) => (
        <li key={`${index}${todo.title}`}>
          <TodoItem {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
