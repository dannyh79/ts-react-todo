import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const props: ITodoItem[] = [
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

it('renders <TodoItem />s', () => {
  render(<TodoList todos={props} />);
  const todo1Title = screen.getByText(new RegExp(props[0].title, 'i'));
  const todo2Title = screen.getByText(new RegExp(props[1].title, 'i'));
  expect(todo1Title).toBeInTheDocument();
  expect(todo2Title).toBeInTheDocument();
});

