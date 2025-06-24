export default function Navbar() {
  return (
    <>
      <section>
        <nav className="block max-w-screen px-4 py-2 mx-auto bg-fuchsia-300 shadow-md ">
          <div className="container max-w-[540px] flex items-center justify-between mx-auto">
            <a href="/">Todo List App</a>
            <div className="flex justify-between gap-4">
              <ul>
                <a href="/signup">Signup</a>
              </ul>
              <ul>
                <a href="/login">Login</a>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
