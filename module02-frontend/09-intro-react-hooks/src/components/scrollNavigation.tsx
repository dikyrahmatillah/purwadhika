"use client";

import { useRef } from "react";

const articles = [
  { id: 1, title: "Soekarno", content: "Short Description about Soekarno" },
  { id: 1, title: "Soeharto", content: "Short Description about Soeharto" },
  { id: 1, title: "Habibie", content: "Short Description about Habibie" },
];
export default function FocusManager() {
  const soekarnoRef = useRef(null);
  const seohartoRef = useRef(null);
  const habibie = useRef(null);

  function scrollToSection(ref) {
    ref.current.scrollIntoView();
  }

  return (
    <div className="flex flex-col gap-2 mt-5">
      <button onClick={() => scrollToSection(soekarnoRef)}>Soekarno</button>
      <button onClick={() => scrollToSection(seohartoRef)}>Soeharto</button>
      <button onClick={() => scrollToSection(habibie)}>Habibie</button>
      <div className="h-100 card flex flex-col" ref={soekarnoRef}>
        <h2 className="font-bold">Soekarno</h2>
        <p>Short desc</p>
      </div>
      <div className="h-100 card flex flex-col" ref={seohartoRef}>
        <h2 className="font-bold">Soeharto</h2>
        <p>Short desc</p>
      </div>
      <div className="h-100 card flex flex-col" ref={habibie}>
        <h2 className="font-bold">Habibie</h2>
        <p>Short desc</p>
      </div>
      {/* {articles.map((item) => (
        <div key={item.id} className="h-100 card flex flex-col">
          <h2 className="font-bold">{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))} */}
    </div>
  );
}
