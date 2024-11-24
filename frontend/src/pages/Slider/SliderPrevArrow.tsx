import { FaAngleLeft } from "react-icons/fa";

interface SliderPrevArrowProps {
  className?: string;
  currentSlide: number;
  slideCount: number;
  style?: any;
  onClick?: () => void;
}
const SliderPrevArrow = ({
  className,
  style,
  currentSlide,
  slideCount,
  onClick,
}: SliderPrevArrowProps) => {
  return (
    <FaAngleLeft
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      style={{
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

export default SliderPrevArrow;
