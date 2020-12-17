import React from "react";
import classNames from "classnames";
import "./style/index.less";

interface selCardProps {
  checkd?: boolean;
  bodyStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  children?: React.ReactNode;
  checkIcon?: React.ReactNode;
}

const SelCard: React.FC<selCardProps> = (props: selCardProps) => {
  const classString = classNames("selcard-default", {
    "active-class": props.checkd,
  });
  return (
    <div style={props.bodyStyle} className={classString}>
      {props.children}
      <div className="check-sign">{props.checkIcon}</div>
    </div>
  );
};

export default SelCard;
