export default function Login() {
  return (
    <div className="w-[540px] mx-auto mt-40 bg-white rounded-md shadow-md py-6 px-4">
      <h1 className="text-4xl text-center text-bold">Login</h1>
      <form className="grid gap-2">
        <label htmlFor="username" className="text-md">
          Username:
        </label>
        <input
          className="mb-4 border-b-1 p-1"
          type="text"
          name="username"
          id="usename"
        />
        <label htmlFor="username" className="text-md">
          Password:
        </label>
        <input
          className="mb-4 border-b-1 p-1"
          type="text"
          name="username"
          id="usename"
        />
        <button className="w-[25%] p-2 bg-gradient-to-r from-[#AC2DEB] to-[#5596FF] text-white rounded-md mx-auto mt-4">
          LOGIN
        </button>
      </form>
    </div>
  );
}
