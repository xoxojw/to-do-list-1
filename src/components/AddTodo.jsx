import React, { useState } from "react";

const AddTodo = () => {
  const initialState = { id: 0, title: "", detail: "", isDone: false };
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(initialState);
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { ...todo, id: todos.length }]);
    setTodo(initialState);
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={onSubmitHandler} className="add-todo" >
        <input
          value={todo.title}
          name="title"
          type="text"
          placeholder="제목을 입력하세요"
          onChange={onChangeHandler}
          autoComplete="off"
          required
        />
        <input
          value={todo.detail}
          name="detail"
          type="text"
          placeholder="내용을 입력하세요"
          onChange={onChangeHandler}
          autoComplete="off"
          required
        />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default AddTodo;
