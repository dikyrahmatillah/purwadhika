"use client";
import { useState, useRef } from "react";
import useTheme from "./hooks/useTheme";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState([
    { id: 1, text: "Test", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleCheckboxChange = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[330px] -z-10">
        <div className="absolute bg-gradient-to-r from-[#AC2DEB] to-[#5596FF] h-[330px] w-full" />
        <img
          src="/bg.png"
          alt="mountain"
          className="w-full h-[330px] object-cover object-top opacity-15"
        />
      </div>

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
          <input
            ref={inputRef}
            className="font-[#9495A5] dark:text-white text-md py-3 px-4 w-full bg-transparent outline-none"
            type="text"
            placeholder="Create a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTodo();
            }}
          />
        </div>
        <div className="w-[540px] h-auto mx-auto mt-[24px] bg-white dark:bg-[#181824] gap-2 rounded-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          {filteredTodos.map((e) => {
            return (
              <div
                key={e.id}
                className={`px-[24px] py-[20px] border-b-2 border-[#E3E4F1] dark:border-[#25273c] flex gap-3 cursor-pointer ${
                  e.completed ? "line-through text-[#494C6B] dark:text-[#777c92]" : "dark:text-white"
                }`}
                onClick={() => handleCheckboxChange(e.id)}
              >
                <input
                  type="checkbox"
                  checked={e.completed}
                  onChange={() => handleCheckboxChange(e.id)}
                />
                <p className="font-[#494C6B] dark:text-inherit">{e.text}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#C8CBE7] dark:text-[#44476a] cursor-grab ml-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onDrag={(event) => {
                    event.preventDefault();
                    setTodos(todos.filter((todo) => todo.id !== e.id));
                  }}
                >
                  <circle cx="9" cy="6" r="1.2" />
                  <circle cx="9" cy="12" r="1.2" />
                  <circle cx="9" cy="18" r="1.2" />
                  <circle cx="15" cy="6" r="1.2" />
                  <circle cx="15" cy="12" r="1.2" />
                  <circle cx="15" cy="18" r="1.2" />
                </svg>
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
      {/* <TodoBox /> */}
    </>
  );
}
