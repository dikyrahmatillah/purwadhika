"use client";

import { useEffect, useState } from "react";
export default function CursorCircle() {
  const [mousePosition, setMousePositon] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePositon({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      className={`w-10 h-10 rounded-full bg-fuchsia-500 fixed pointer-events-none`}
      style={{ top: mousePosition.y - 16, left: mousePosition.x - 16 }}
    ></div>
  );
}
