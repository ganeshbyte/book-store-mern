import { useEffect, useState } from "react";
import { booksCategoryEnum } from "../../enums/books.enum";
import { IBook } from "../../interface/Book";
import booksData from "../../assets/books-data.json";
import UISelect from "../../components/UISelect";
import BookItem from "../BookItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellers = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [categoryOption, setCategoryOption] = useState<booksCategoryEnum>(
    booksCategoryEnum.business
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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

  useEffect(() => {
    const filterBooks: IBook[] = booksData.filter(
      (book): book is IBook =>
        book.category !== undefined && book.category === categoryOption
    );
    setBooks(filterBooks);
  }, [categoryOption]);

  const handleCategoryChanges = (value: booksCategoryEnum) => {
    setCategoryOption(value);
  };

  return (
    <div>
      <h1 className="text-3xl mb-10">Top Sellers</h1>
      <UISelect
        label="Category Filter"
        options={[
          booksCategoryEnum.business,
          booksCategoryEnum.news,
          booksCategoryEnum.sports,
        ]}
        onValueChange={handleCategoryChanges}
      ></UISelect>

      <div className="">
        <Slider {...settings}>
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
    </div>
  );
};

export default TopSellers;
