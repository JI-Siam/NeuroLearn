'use client'
import React from 'react';
import Link from 'next/link'
 import { authClient } from "@/lib/auth-client" ;


const Navbar = () => {

 
const { data: session } = authClient.useSession() ; 
const user = session?.user ;
  console.log(user , "session user") ;
  
    return (
<div className="max-lg:collapse bg-base-200 lg:mb-20 shadow-sm lg:px-20 rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">SkillSphere</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-10">
       <Link href="\">Home</Link>
        <Link href="\courses">Courses</Link>
        <Link href="\profile">My Profile</Link>
      </ul>
    </div>
     <div className="navbar-end ">
        {user ?  
       ( <div className='flex gap-3 items-center'>
            <p>Hello, <span className='font-bold'>{user.name}</span></p>
              <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-5 rounded-full ring-2 ring-offset-2">
              <img src={user.image} alt="avatar" />
            </div>
          </div>
           <btn className="ml-2 btn" onClick={async() => await authClient.signOut()}>Logout</btn>
          </div>) : 
           ( <div>
              <Link href="\login" className="btn">Login</Link>
              <Link href="\signup" className="btn">SignUp</Link>
            </div>)
          }
         
      </div>
  </div>

  <div className="collapse-content lg:hidden z-1 gap-10">
    <ul className="menu">
     <Link href="\">Home</Link>
        <Link href="\courses">Courses</Link>
        <Link href="\profile">My Profile</Link>
    </ul>
  </div>
</div>
    );
};

export default Navbar;






