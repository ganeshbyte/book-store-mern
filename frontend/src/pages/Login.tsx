import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../context/authContex";
import Swal from "sweetalert2";

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmitHandle: SubmitHandler<Inputs> = (value) => {
    console.log(value);
  };

  const onGoogleLoginHandle = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        title: "Google Login Successful",
        icon: "success",
      });
      navigate("../");
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="ring-1 ring-gray-300 h-96 w-60 p-5 box-content mt-10 mx-auto rounded-md">
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
          className="mx-auto flex justify-center ring-1 bg-blue-800 ring-blue-300 text-white p-2 w-32 hover:bg-blue-600 rounded-md mb-5"
        >
          Login
        </button>
      </form>

      <button
        className="bg-blue-950 text-white p-2 rounded-sm flex justify-center items-center cursor-pointer mx-auto mb-5"
        onClick={onGoogleLoginHandle}
      >
        <FaGoogle className="mr-2" />
        <div> Login with Google</div>
      </button>

      <div>
        Not have an Account?
        <Link to={"/signup"}>
          <span className="text-blue-900 underline cursor-pointer">SignUp</span>
        </Link>
      </div>
    </div>
  );
}
