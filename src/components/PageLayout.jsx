import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function PageLayout() {
  return (
    <main>
      <Header></Header>
      <AddTodo></AddTodo>
      <ListTodo></ListTodo>
    </main>
  );
}

export default PageLayout;
