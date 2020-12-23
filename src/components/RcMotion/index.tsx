import React from 'react';
import CSSMotion from 'rc-motion';
interface RcProps {
  visible: boolean;
  style?: React.CSSProperties;
  className?: React.ClassicComponentClass;
}

const Rc: React.FC<RcProps> = ({ visible }) => {
  return (
    <CSSMotion visible={visible} motionName="my-motion">
      {({ className, style }) => <div className={className} style={style} />}
    </CSSMotion>
  );
};

export default Rc;
