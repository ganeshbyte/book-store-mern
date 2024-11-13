import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="ring-1 ring-gray-300 h-[460px] w-60 p-12 box-content mt-10 mx-auto rounded-md">
      <h1 className="text-xl font-bold mb-5">Welcome, Signup </h1>

      <div>
        <label htmlFor="firstname">FirstName: </label>
        <input
          id="firstname"
          type="text"
          placeholder="firstname"
          className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="lastname">LastName: </label>
        <input
          id="lastname"
          type="text"
          placeholder="lastname"
          className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
        />
      </div>
      <button className="mx-auto flex justify-center ring-1 ring-blue-500 bg-blue-300 text-white p-2 w-32 hover:bg-blue-600 rounded-md mb-5">
        Signup
      </button>

      <div>
        Already have an Account?
        <Link to={"/login"}>
          <span className="text-blue-900 underline cursor-pointer">Login</span>
        </Link>
      </div>
    </div>
  );
}
