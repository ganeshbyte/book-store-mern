import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { IBook } from "../../interface/Book";
import SliderNextArrow from "../Slider/SliderNextArrow";
import SliderPrevArrow from "../Slider/SliderPrevArrow";
import BookItem from "../BookItem";
import { useGetBooksQuery } from "../../redux/features/cart/bookApi";

const Recommend = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const slider: any = React.useRef(null);

  const { data, isLoading, isError } = useGetBooksQuery("news");

  useEffect(() => {
    //fetch recommended books
    setBooks(data?.data);
  });

  var settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <div></div>,
    prevArrow: <div></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl mb-10">Recommended Books</h1>
      <Slider ref={slider} {...settings}>
        {data?.data?.length > 0 ? (
          data?.data?.map((book: IBook) => {
            return (
              <BookItem
                key={book._id}
                book={book}
                showRemoveCartBookButton={false}
                showAddToCartButton={true}
              ></BookItem>
            );
          })
        ) : (
          <h1 className="p-3">No Books Found</h1>
        )}
      </Slider>
    </div>
  );
};

export default Recommend;
