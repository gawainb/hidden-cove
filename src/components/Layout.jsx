import React from 'react';
import { Header } from 'components';

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
