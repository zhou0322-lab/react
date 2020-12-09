import React from "react";

interface ButtonProps {
  text?: string;
}
const Button: React.FC<ButtonProps> = ({ text = "默认" }) => {
  return <button type="button">{text}</button>;
};

export default Button;
