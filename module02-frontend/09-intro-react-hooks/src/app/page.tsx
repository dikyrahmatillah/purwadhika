import Counter from "@/components/counter";
import CursorCircle from "@/components/cursor-circle";
import FocusManager from "@/components/scrollNavigation";
import PopUp from "@/components/pop-up";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="uppercase text-4xl font-bold max-w-150 text-center">
        React Basic Component with useState Hook
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Counter />
        <PopUp />
        <CursorCircle />
        <FocusManager />
      </div>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
