import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import getScroll from '../../utils/getScroll';

export interface BackTopProps {
  visibilityHeight?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const BackTop: React.FC<BackTopProps> = (props) => {
  const { visibilityHeight = 20, children, style } = props;
  const [visible, setVisible] = useState(false);
  const backTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const listenScroll = () => {
    const height = getScroll(window, true);
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
          {children ? (
            children
          ) : (
            <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g
                id="新版中央厨房1期"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                opacity="0.699999988"
              >
                <g id="ICON" transform="translate(-612.000000, -55.000000)">
                  <g id="返回顶部_默认" transform="translate(609.000000, 52.000000)">
                    <rect id="Rectangle-6" x="0" y="0" width="24" height="24" />
                    <g id="back-top__icon" transform="translate(3.000000, 3.000000)" fill="#000000" fillRule="nonzero">
                      <polygon id="Path-4" points="0 1.75 0 0.25 18 0.25 18 1.75" />
                      <polygon
                        id="Combined-Shape"
                        points="9.75 6.79144317 9.75 18 8.25 18 8.25 6.82970913 4.02912915 11.0315283 2.97087085 9.9684717 9.02734242 3.9393371 15.0315337 9.97087631 13.9684663 11.0291237"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )}
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
