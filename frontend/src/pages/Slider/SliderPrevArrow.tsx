import { FaAngleLeft } from "react-icons/fa";

interface SliderPrevArrowProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}
const SliderPrevArrow = (props: SliderPrevArrowProps) => {
  const { className, onClick } = props;
  return (
    <FaAngleLeft
      className={className}
      style={{
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

export default SliderPrevArrow;
