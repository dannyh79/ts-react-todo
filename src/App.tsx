import React from 'react';
import TodoList from './components/TodoList';
import BaseForm from './components/BaseForm';

const todos: ITodoItem[] = [
  {
    title: 'Cook dinner',
    time: new Date(2021, 0o5, 17, 0o0, 0o0),
    status: 'done',
    content: '',
  },
  {
    title: 'Get it done',
    time: new Date(2021, 0o5, 12, 0o0, 0o0),
    status: 'undone',
    content: '',
  },
];

const App = () => {
  return (
    <>
      <TodoList todos={todos} />
      <BaseForm />
    </>
  );
};

export default App;
