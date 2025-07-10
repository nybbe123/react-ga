
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';

export default function AppLayout() {

  return (
    <>
<Header />
            <Outlet />
    </>
  );
};
