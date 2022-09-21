import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ColorLink: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link className={`${props.className} text-neutral-100 text-sm`} {...props}>
    {children}
  </Link>
);

export default ColorLink;
