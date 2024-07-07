"use client";

interface IButtonProps {
  name: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const {
    name = "Button",
    className = "",
    onClick = () => console.log("Button Clicked")
  } = props;


  return (
    <div className= {`flex items-center justify-center rounded-[100px] bg-[#bd914e] active:bg-[#000] active:text-[#fff] text-[#fff] hover:text-[#fff]  transition duration-500 ease-in-out ${className}`}>
      <button
        onClick={onClick}
      >
        <h1>{name}</h1>
      </button>
    </div>
  );
};

export default Button;
