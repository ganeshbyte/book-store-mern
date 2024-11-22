import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Inputs {
  username: string;
  password: string;
  role: string;
}

export default function AdminLogin() {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  async function onSubmitHandle(data: Inputs) {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/signin",
        {
          username: data.username,
          password: data.password,
          role: "admin",
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        Swal.fire("Login Successful", "Welcome Admin", "success");
        navigate("/admin/dashboard");
      }

      if (res.data.errro) {
        Swal.fire("Login Failed", "Invalid Credentials", "error");
      }
    } catch (error) {
      Swal.fire("Login Failed", "Invalid Credentials", "error");
    }
  }
  return (
    <div className="ring-1 ring-gray-300 h-96 w-60 p-5 box-content mt-10 mx-auto rounded-md">
      <h1 className="text-xl font-bold mb-5">Admin Login</h1>
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
    </div>
  );
}
