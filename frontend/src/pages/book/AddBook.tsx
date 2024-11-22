import { useForm } from "react-hook-form";

export default function AddBook() {
  const { register, handleSubmit } = useForm();

  const onSubmitHandle = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Add Book
        </h1>
        <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              {...register("description", { required: true })}
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("oldPrice", { required: true })}
              placeholder="Old Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("newPrice", { required: true })}
              placeholder="New Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("category", { required: true })}
              placeholder="Category"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("trending", { required: true })}
              className="mr-2"
            />
            <label className="text-gray-700">Trending</label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
