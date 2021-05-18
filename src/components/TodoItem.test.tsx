import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

const currentTime = new Date();
const props = {
  title: 'title',
  time: currentTime,
  status: 'undone' as 'undone',
  content: 'content',
};

it('renders title', () => {
  render(<TodoItem {...props} />);
  const title = screen.getByText(/title/i);
  expect(title).toBeInTheDocument();
});

it('renders time', () => {
  render(<TodoItem {...props} />);
  const timestamp = screen.getByText(new RegExp(currentTime.toLocaleString(), 'i'));
  expect(timestamp).toBeInTheDocument();
});

it('renders status', () => {
  render(<TodoItem {...props} />);
  const status = screen.getByText(/undone/i);
  expect(status).toBeInTheDocument();
});

it('renders content', () => {
  render(<TodoItem {...props} />);
  const content = screen.getByText(/content/i);
  expect(content).toBeInTheDocument();
});
