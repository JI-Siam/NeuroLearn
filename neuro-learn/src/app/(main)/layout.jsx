import React from 'react';
import Navbar from '@/components/shared/Navbar';
const layout = ({children}) => {
  return (
    <div>
         <Navbar></Navbar>
         {children}
    </div>
  );
};

export default layout;