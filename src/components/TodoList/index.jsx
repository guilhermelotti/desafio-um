import { useEffect, useState } from "react";

import * as S from "./styles";

import { v4 as uuid } from "uuid";

import { FiCheckSquare as CheckIcon } from "react-icons/fi";

import { Todo } from "../Todo";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";
import { Button } from "../Button";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function handleCreateNewTodo() {
    if (newTodoTitle !== "") {
      const newTodo = {
        id: uuid(),
        title: `${newTodoTitle}`,
        isComplete: false,
      };

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setStorageItem("todoItems", newTodos);
      setNewTodoTitle("");
    } else {
      alert("Todo cannot be empty !");
    }
  }

  useEffect(() => {
    const data = getStorageItem("todoItems");

    if (data) setTodos(data);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.InputGroup>
          <input
            type="text"
            placeholder="Add new todo"
            onChange={(e) => setNewTodoTitle(e.target.value)}
            value={newTodoTitle}
          />
          <Button type="submit" onClick={handleCreateNewTodo}>
            <CheckIcon size={16} color="#fff" />
          </Button>
        </S.InputGroup>
      </S.Header>

      <main>
        <ul>
          {todos.map((todo) => (
            <S.ListItem key={todo.id}>
              <Todo todo={todo} todos={todos} setTodos={setTodos} />
            </S.ListItem>
          ))}
        </ul>
      </main>
    </S.Container>
  );
}
