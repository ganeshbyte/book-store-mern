import { FaAngleRight } from "react-icons/fa";

interface SliderNextArrowProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}
const SliderNextArrow = (props: SliderNextArrowProps) => {
  const { className, onClick } = props;
  return (
    <FaAngleRight
      className={className}
      style={{
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

export default SliderNextArrow;
