import bookBannerImage from "../../assets/book-banner.jpeg";

const Banner = () => {
  return (
    <div className="flex gap-10 font-primary h-96 mt-10 justify-center">
      <div className="w-1/2 mt-12">
        {/* <h1 className="text-3xl font-bold  mb-10">New Releases This Week</h1> */}
        <p className="text-md mb-5 text-3xl">
          "A book is a gateway to infinite worlds, where every page turns into a
          new adventure and new begining."{" "}
          <span className="text-2xl">-unknown</span>
        </p>
        <div className="flex items-center ">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Subscribe
          </button>
          <div className="text-3xl font-extrabold"> 1000+</div>
        </div>
      </div>
      <div>
        <img
          src={bookBannerImage}
          alt="banner"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
