import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { IBook } from "../../interface/Book";
import booksData from "../../assets/books-data.json";
import SliderNextArrow from "../Slider/SliderNextArrow";
import SliderPrevArrow from "../Slider/SliderPrevArrow";
import BookItem from "../BookItem";

const Recommend = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const slider: any = React.useRef(null);

  useEffect(() => {
    //fetch recommended books
    setBooks(booksData);
  });

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
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

  return (
    <div className="mt-10">
      <h1 className="text-3xl mb-10">Recommended Books</h1>
      <Slider ref={slider} {...settings}>
        {books.length > 0 ? (
          books.map((book) => {
            return (
              <BookItem
                key={book.id}
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
