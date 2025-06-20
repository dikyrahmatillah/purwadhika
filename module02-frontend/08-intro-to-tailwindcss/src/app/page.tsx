import TransitionButton from "@/components/transition-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col border min-h-screen justify-center items-center">
      <h1 className="text-[30px] font-bold text-crimson-red animate-ping">
        Welcome to TailwindCSS
      </h1>
      <p className="max-w-2xl text-center mt-5 animate-bounce">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
        delectus illum animi aliquid explicabo voluptatem voluptatum ipsum?
        Quasi consequuntur fugiat mollitia quaerat blanditiis repudiandae harum
        deserunt eum eaque, enim voluptas!
      </p>
      <div className="flex border border-white gap-7 rounded-2xl bg-gradient-to-r from-blue-400 to-yellow-500">
        <TransitionButton
          title="Scale"
          desc="Hover to scale up"
          customClass="from-blue-400 to-violet-700 rounded-l-2xl hover:scale-110 duration-1000"
        />

        <TransitionButton
          title="Rotate"
          desc="Hover to rotate"
          customClass="from-violet-900 to-red-600 hover:-rotate-10 duration-300"
        />
        <TransitionButton
          title="Shadow"
          desc="Hover to shadow"
          customClass="from-red-700 to-yellow-500 hover:shadow-2xl rounded-r-2xl shadow-amber-300 duration-500"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <Link href="/headless-ui" className="underline">
          Headless UI
        </Link>
        <Link href="/motion-dev" className="underline">
          Motion Dev
        </Link>
      </div>
    </main>
  );
}
