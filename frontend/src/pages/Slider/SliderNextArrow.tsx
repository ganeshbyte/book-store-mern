import { FaAngleRight } from "react-icons/fa";

interface SliderNextArrowProps {
  className?: string;
  style?: any;
  currentSlide: number;
  slideCount: number;
  onClick?: () => void;
}
const SliderNextArrow = ({
  onClick,
  currentSlide,
  slideCount,
}: SliderNextArrowProps) => {
  return (
    <FaAngleRight
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      style={{
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

export default SliderNextArrow;
