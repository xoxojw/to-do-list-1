import React from "react";
import HandleTodo from "components/HandleTodo";

const ListTodo = ({ todos, setTodos }) => {
  const handleTodoDelete = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const handleTodoCheck = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <section className="list-container">
      <div className="list-working">
        <h2 className="list-title">🔥 Working</h2>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <HandleTodo
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  handleTodoDelete={handleTodoDelete}
                  handleTodoCheck={handleTodoCheck}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="list-done">
        <h2 className="list-title">🎉 Done</h2>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <HandleTodo
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  handleTodoDelete={handleTodoDelete}
                  handleTodoCheck={handleTodoCheck}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default ListTodo;
