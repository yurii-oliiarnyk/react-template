import React from 'react';
import Header from '../../components/Header';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="page-wrapper">{children}</div>
    </>
  );
};

export default Layout;
