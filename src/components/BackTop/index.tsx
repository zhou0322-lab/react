import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { ArrowUpOutlined } from '@ant-design/icons';

export interface BackTopProps {
  visibilityHeight?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const BackTop: React.FC<BackTopProps> = (props) => {
  const {
    visibilityHeight = 20,
    children,
    style = { position: 'fixed', right: '100px', bottom: '100px', width: '48px', height: '48px', cursor: 'pointer' },
  } = props;
  const [visible, setVisible] = useState(false);
  const backTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const listenScroll = () => {
    const height = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (height > visibilityHeight) setVisible(true);
    else setVisible(false);
  };

  const debounceScroll = () => debounce(listenScroll, 50)();

  useEffect(() => {
    window.addEventListener('scroll', debounceScroll, false);
    return () => window.removeEventListener('scroll', debounceScroll, false);
  });
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {visible && (
        <div style={style} onClick={backTop}>
          {children ? children : <ArrowUpOutlined />}
        </div>
      )}
    </>
  );
};
BackTop.defaultProps = {
  visibilityHeight: 30,
  style: {
    position: 'fixed',
    right: '100px',
    bottom: '100px',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
  },
};
export default React.memo(BackTop);
