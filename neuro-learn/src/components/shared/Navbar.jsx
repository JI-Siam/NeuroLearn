import React from 'react';
import Link from 'next/link'



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Link href="\">Home</Link>
        <Link href="\courses">Courses</Link>
        <Link href="\profile">My Profile</Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> SkillSphere</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      <Link href="\">Home</Link>
        <Link href="\courses">Courses</Link>
        <Link href="\profile">My Profile</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/login" className="btn">Login</Link>
     <Link  href="/signup" className="btn">Signup</Link>
  </div>
</div>
    );
};

export default Navbar;