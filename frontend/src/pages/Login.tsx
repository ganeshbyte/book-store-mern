import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitHandle: SubmitHandler<Inputs> = (value) => {
    console.log(value);
  };

  return (
    <div className="ring-1 ring-gray-300 h-72 w-60 p-5 box-content mt-10 mx-auto rounded-md">
      <h1 className="text-xl font-bold mb-5">Login </h1>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
            {...register("username", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            className="px-4 py-2 ring-1 ring-gray-400 mb-5 rounded-md"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="mx-auto flex justify-center ring-1 ring-blue-500 bg-blue-300 text-white p-2 w-32 hover:bg-blue-600 rounded-md mb-5"
        >
          Login
        </button>
      </form>

      <div>
        Not have an Account?
        <Link to={"/signup"}>
          <span className="text-blue-900 underline cursor-pointer">SignUp</span>
        </Link>
      </div>
    </div>
  );
}
