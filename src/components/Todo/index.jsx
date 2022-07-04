import { useState } from "react";
import { FiTrash as TrashIcon } from "react-icons/fi";
import { setStorageItem } from "../../utils/localStorage";
import { Button } from "../Button";
import * as S from "./styles";

export function Todo({ todo, setTodos, todos }) {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [newValue, setNewValue] = useState("");

  function handleRemoveTodo(id) {
    let newTodoArray = todos.filter((todo) => todo.id !== id);

    setTodos(newTodoArray);
    setStorageItem("todoItems", newTodoArray);
  }

  const handleEditTodo = () => setIsInEditMode((prevState) => !prevState);

  const updateTodo = (oldTodo, updatedTodoTitle) => {
    try {
      if (updatedTodoTitle !== "") {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === oldTodo.id) {
            return { ...oldTodo, title: updatedTodoTitle };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setStorageItem("todoItems", updatedTodos);
      } else {
        return;
      }
    } catch (error) {
      console.log("Cannot update todo", error);
    }
  };

  const handleUpdateNewValue = (e) => setNewValue(e.target.value);

  const handleSaveEdit = () => updateTodo(todo, newValue);

  return (
    <>
      {!isInEditMode && <S.Title>{todo.title}</S.Title>}
      {isInEditMode && (
        <S.UpdateTodo>
          <S.UpdateInput
            type="text"
            placeholder={todo.todo}
            value={newValue}
            onChange={handleUpdateNewValue}
          />
        </S.UpdateTodo>
      )}
      <S.ButtonsWrapper>
        <Button type="button" onClick={() => handleEditTodo(todo.id)}>
          {isInEditMode ? (
            <span onClick={handleSaveEdit}>Save</span>
          ) : (
            <span>Edit</span>
          )}
        </Button>

        <Button type="button" onClick={() => handleRemoveTodo(todo.id)}>
          <TrashIcon size={16} />
        </Button>
      </S.ButtonsWrapper>
    </>
  );
}
