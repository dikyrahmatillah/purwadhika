"use client";
import { useState } from "react";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      <button
        className="bg-rose-200 rounded-sm text-white py-4 px-6 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Show Pop Up
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 m-auto flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
          <div className="bg-white max-w-150 px-6 py-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              itaque explicabo optio voluptates repudiandae beatae fuga
              voluptas? Asperiores, sapiente quis, esse facere omnis quasi
              corporis, delectus debitis vel officia culpa?
            </p>
            <button
              className="bg-rose-200 rounded-sm text-white p-4 mt-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
