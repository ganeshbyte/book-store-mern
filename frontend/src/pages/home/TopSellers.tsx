import { useState } from "react";
import { booksCategoryEnum } from "../../enums/books.enum";
import { IBook } from "../../interface/Book";
import UISelect from "../../components/UISelect";
import BookItem from "../BookItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGetBooksQuery } from "../../redux/features/cart/bookApi";

const TopSellers = () => {
  const [categoryOption, setCategoryOption] = useState<booksCategoryEnum>(
    booksCategoryEnum.business
  );

  const { data: books = [], isLoading } = useGetBooksQuery(categoryOption);

  console.log(books.data);

  const settings = {
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

  // Handle category change
  const handleCategoryChanges = (value: booksCategoryEnum) => {
    setCategoryOption(value);
  };

  return (
    <div>
      <h1 className="text-3xl mb-10">Top Sellers</h1>

      {/* Category Filter UI */}
      <UISelect
        label="Category Filter"
        options={[
          booksCategoryEnum.business,
          booksCategoryEnum.news,
          booksCategoryEnum.sports,
        ]}
        value={categoryOption}
        onValueChange={handleCategoryChanges}
      />

      {/* Books Slider */}
      <div>
        {isLoading && <div>isLoading....</div>}

        {!isLoading && books?.data?.length == 0 && (
          <h1 className="text-center p-3">No Books Found</h1>
        )}

        {!isLoading && books?.data?.length > 0 && (
          <Slider {...settings}>
            {books?.data?.length > 0 &&
              books?.data.map((book: IBook) => (
                <BookItem
                  key={book._id}
                  book={book}
                  showRemoveCartBookButton={false}
                  showAddToCartButton={true}
                />
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TopSellers;
