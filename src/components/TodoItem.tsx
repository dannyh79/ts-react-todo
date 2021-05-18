import React from 'react';

const TodoItem = (props: ITodoItem): JSX.Element => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Time: {props.time.toLocaleString()}</p>
      <p>Status: {props.status}</p>
      <p>Content: {props.content}</p>
    </div>
  );
};

export default TodoItem;
