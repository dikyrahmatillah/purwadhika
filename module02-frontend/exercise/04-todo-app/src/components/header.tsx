export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[330px] -z-10">
      <div className="absolute bg-gradient-to-r from-[#AC2DEB] to-[#5596FF] h-[330px] w-full" />
      <img
        src="/bg.png"
        alt="mountain"
        className="w-full h-[330px] object-cover object-top opacity-15"
      />
    </header>
  );
}
