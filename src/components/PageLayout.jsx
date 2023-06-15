import React, { useState } from "react";
import Header from "components/Header";
import AddTodo from "components/AddTodo";
import ListTodo from "components/ListTodo";

const PageLayout = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 과제",
      detail: "재밌는데 아직 어렵다!!",
      isDone: false,
    },
    {
      id: 1,
      title: "점심에 삼겹살 먹기",
      detail: "직접 구워서 쌈싸먹기",
      isDone: true,
    },
  ]);

  return (
    <main>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos}/>
      <ListTodo todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default PageLayout;