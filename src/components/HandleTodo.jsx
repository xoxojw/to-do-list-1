import React from "react";

const HandleTodo = ({ todo, handleTodoDelete, handleTodoCheck }) => {
  return (
    <div className="todo-container">
      <div className="todo-text">
        <h3 className="todo-title">{todo.title}</h3>
        <p>{todo.detail}</p>
      </div>
      <div className="todo-buttons-container">
        <button
            className="todo-complete-button"
            onClick={() => handleTodoCheck(todo.id)}
          >
            {todo.isDone ? "진행중" : "완료"}
          </button>
          <button
            className="todo-delete-button"
            onClick={() => handleTodoDelete(todo.id)}
          >
            삭제하기
          </button>
      </div>
    </div>
  );
}

export default HandleTodo;