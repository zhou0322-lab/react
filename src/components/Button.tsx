import React from "react";
import styled from "styled-components";

const ResetButton = styled.button`
  min-width: 110px;
`;
interface ButtonProps {
  text?: string;
}
const Button: React.FC<ButtonProps> = ({ text = "默认" }) => {
  return <ResetButton>{text}</ResetButton>;
};

export default Button;
