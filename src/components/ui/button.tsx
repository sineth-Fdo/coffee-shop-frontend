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
    
      <button
        onClick={onClick}
        className= {`cursor-pointer flex items-center justify-center rounded-[100px] active:bg-[#000] active:text-[#fff]  transition duration-500 ease-in-out ${className}`}
      >
            <h1>{name}</h1>
      </button>
    
  );
};

export default Button;
