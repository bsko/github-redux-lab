export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
});

export const completeTodo = (todo) => ({
  type: 'COMPLETE_TODO',
  todo
});
