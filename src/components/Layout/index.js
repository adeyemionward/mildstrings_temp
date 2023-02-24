import React from 'react'
import { Fragment } from 'react';
import Header from '../Header';
import Sidebar from '../SideBar';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {
        props.sidebar ?
          <div className='flex justify-between'>
            <Sidebar />
            {props.children}
          </div>
          : <div>{props.children}</div>
      }
    </Fragment>
  )
}

export default Layout;