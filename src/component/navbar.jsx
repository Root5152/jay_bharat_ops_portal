import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-col bg-black w-[15rem] m-4 rounded-lg h-screen">
      <div>
        <div className='rounded-full w-[8rem] h-[8rem] bg-white border mx-auto my-10'></div>
        <div className='my-10'>

          <div className='text-white text-center w-[5rem] mx-auto leading-5 font-inter'>
            <Link to='/jb_admin'>Client Management</Link>
          </div>
          <div className='text-white mx-auto text-center my-10 font-inter'>
            <Link to='/jb_admin/sample'>0:Sampling</Link>
          </div>

          <div className='text-white text-center font-inter'>Profile Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





