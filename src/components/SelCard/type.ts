import React from 'react';
/**
 *
 * seCard
 */
export interface selCardProps {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 内容区样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * 选中时的样式
   */
  activeStyle?: React.CSSProperties;
  /**
   * 选中时icon的位置
   */
  signStyle?: React.CSSProperties;
  /**
   * 内容区
   */
  children?: React.ReactNode;
  /**
   * 选中时的Icon标志
   */
  checkIcon?: React.ReactNode;
}
