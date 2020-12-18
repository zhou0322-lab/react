import React from "react";
import classNames from "classnames";
import "./style/index.less";
import { selCardProps } from "./type";
import checkedIcon from "./images/checked_icon.png";

const SelCard: React.FC<selCardProps> = (props: selCardProps) => {
  const {
    checked = false,
    checkIcon,
    bodyStyle,
    activeStyle,
    children,
    signStyle,
  } = props;
  const classString = classNames("selcard-default", {
    "active-class": checked,
  });
  return (
    <div style={{ ...bodyStyle, ...activeStyle }} className={classString}>
      {children}
      {checked && (
        <div className="check-sign" style={{ ...signStyle }}>
          {checkIcon}
        </div>
      )}
    </div>
  );
};

SelCard.defaultProps = {
  checkIcon: <img src={checkedIcon} alt="" />,
};

export default SelCard;
