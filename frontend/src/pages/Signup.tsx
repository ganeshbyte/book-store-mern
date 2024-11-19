import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import axios, { AxiosError } from "axios";
import { IUser } from "../interface/User";
import Swal from "sweetalert2";
import { useAuth } from "../context/authContex";

type Inputs = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { registerUser, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const onSubmitHandle: SubmitHandler<Inputs> = async (formData) => {
    try {
      const userBody: IUser = formData;

      const res = await registerUser(userBody.username, userBody.password);

      console.log(res);

      Swal.fire({
        title: "You have signup sucessfully Please Login!",
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error?.status) {
          case 409:
            console.log(error);
            Swal.fire({
              title: error?.response?.data?.error,
              icon: "error",
            });
            break;
          default:
            console.log(error);
            break;
        }
        return;
      }

      Swal.fire({
        title: "Something Went Wrong Please Try Again!",
        icon: "error",
      });
    }
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
    <div className="ring-1 ring-gray-300 h-[600px] w-60 p-12 box-content mt-10 mx-auto rounded-md">
      <h1 className="text-xl font-bold mb-5">Welcome, Signup </h1>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <div className="mb-5">
          <label htmlFor="firstname">FirstName: </label>
          <input
            {...register("firstName", { required: true })}
            id="firstname"
            type="text"
            placeholder="firstname"
            className="px-4 py-2 ring-1 ring-gray-400 rounded-md"
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="lastname">LastName: </label>
          <input
            {...register("lastName", { required: true })}
            id="lastname"
            type="text"
            placeholder="lastname"
            className="px-4 py-2 ring-1 ring-gray-400 rounded-md"
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="username">Username: </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            placeholder="username"
            className="px-4 py-2 ring-1 ring-gray-400 rounded-md"
          />
          {errors.username && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="password">Password: </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            placeholder="password"
            className="px-4 py-2 ring-1 ring-gray-400  rounded-md"
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <button className="mx-auto flex justify-center ring-1 bg-blue-800 ring-blue-300 text-white p-2 w-32 hover:bg-blue-600 rounded-md mb-5">
          Signup
        </button>
      </form>

      <button
        className="bg-blue-950 text-white p-2 rounded-sm flex justify-center items-center cursor-pointer mx-auto"
        onClick={onGoogleLoginHandle}
      >
        <FaGoogle className="mr-2" />
        <div> Signup with Google</div>
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
