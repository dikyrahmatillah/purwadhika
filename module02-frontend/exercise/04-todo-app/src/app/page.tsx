"use client";
import React, { useState, useRef, useContext } from "react";
import useTheme from "./hooks/useTheme";
import data from "@/data/todo.json";
export default function Home() {
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  const inputRef = useRef(null);
  const [todos, setTodos] = useState<Todo[]>(data);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  function handleAddTodo(event: React.FormEvent) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handeDragStart = (e: React.DragEvent, id: number) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropId: number) => {
    e.preventDefault();

    if (draggedItem === null || draggedItem === dropId) {
      setDraggedItem(null);
      return;
    }

    const draggedIndex = todos.findIndex((todo) => todo.id === draggedItem);
    const dropIndex = todos.findIndex((todo) => todo.id === dropId);

    const newTodos = [...todos];
    const draggedTodo = newTodos[draggedIndex];

    newTodos.splice(draggedIndex, 1);
    newTodos.splice(dropIndex, 0, draggedTodo);

    setTodos(newTodos);
    setDraggedItem(null);
  };

  const handleDragEnd = () => setDraggedItem(null);

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <main className="relative z-10">
        <div className="w-[540px] h-[48px] flex justify-between items-center mx-auto mt-[70px]">
          <h1 className="text-white text-[40px] font-bold tracking-[20px]">
            TODO
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none cursor-pointer"
          >
            {theme === "light" ? (
              <img
                src="/sun-icon.svg"
                alt="Light Mode"
                width={24}
                height={24}
              />
            ) : (
              <img
                src="/moon-icon.svg"
                alt="Dark Mode"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
        <div className="w-[540px] h-[64px] flex items-center mx-auto mt-[40px] bg-white dark:bg-[#181824] dark:text-white p-3 rounded-[5px]">
          <form onSubmit={handleAddTodo}>
            <input
              className="font-[#9495A5] dark:text-white text-md py-3 px-4 w-full bg-transparent outline-none"
              type="text"
              placeholder="Create a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </form>
        </div>
        <div className="w-[540px] h-auto mx-auto mt-[24px] bg-white dark:bg-[#181824] gap-2 rounded-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          {filteredTodos.map((e) => {
            return (
              <div
                key={e.id}
                className={`px-[24px] py-[20px] border-b-2 border-[#E3E4F1] dark:border-[#25273c] flex gap-3 cursor-pointer ${
                  e.completed
                    ? "line-through text-[#494C6B] dark:text-[#777c92]"
                    : "dark:text-white"
                }`}
                draggable
                onDragStart={(event) => handeDragStart(event, e.id)}
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event, e.id)}
                onDragEnd={handleDragEnd}
              >
                <input
                  type="checkbox"
                  checked={e.completed}
                  onChange={() => toggleTodo(e.id)}
                />
                <p className="font-[#494C6B] dark:text-inherit">{e.text}</p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#e2e3ec] dark:text-[#a7acdd] cursor-grab ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="9" cy="6" r="1.2" />
                    <circle cx="9" cy="12" r="1.2" />
                    <circle cx="9" cy="18" r="1.2" />
                    <circle cx="15" cy="6" r="1.2" />
                    <circle cx="15" cy="12" r="1.2" />
                    <circle cx="15" cy="18" r="1.2" />
                  </svg>
                </div>
              </div>
            );
          })}

          <div className="w-full flex items-center justify-between px-[24px] pt-[16px] pb-[20px] rounded-b-[5px] text-[#9495A5] dark:text-[#777c92]">
            <p>{todos.filter((todo) => !todo.completed).length} items left</p>
            <div className="flex gap-4 font-[#9495A5]">
              <button
                className={`${
                  filter === "all" ? "text-[#3A7CFD]" : ""
                } cursor-pointer`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`${
                  filter === "active" ? "text-[#3A7CFD]" : ""
                } cursor-pointer`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`${
                  filter === "completed" ? "text-[#3A7CFD]" : ""
                } cursor-pointer`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
            <button
              onClick={() => {
                setTodos(todos.filter((todo) => !todo.completed));
              }}
            >
              Clear completed
            </button>
          </div>
        </div>
        <div className="text-[#9495A5] mt-12 text-center font[14px]">
          Drag and drop to reorder list
        </div>
      </main>
    </>
  );
}
