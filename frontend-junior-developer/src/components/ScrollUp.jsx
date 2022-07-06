import { IoIosArrowUp } from "react-icons/io";

const ScrollUp = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="ScrollUp">
      <IoIosArrowUp onClick={handleClick} size={50} />
    </div>
  );
};

export default ScrollUp;
