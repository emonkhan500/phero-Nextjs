'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Nav = () => {
  const router= useRouter()
  const links=[
    {
      title:'About',
      path:'/about'
    },
  
    {
      title:'Contact',
      path:'/contact'
    },
  
    
  ]
  const handleSignIn = ()=>{
router.push('/login')
  }
  const handleSignUp = ()=>{
router.push('/signup')
  }
    return (
        <div className="flex justify-around py-10 selection: bg-green-200" >
  <h1>Logo</h1>

  <ul className="flex justify-around gap-5">
   {
    links.map(link=><li ><Link href={link.path}>{link.title}</Link> </li>)
   }
  </ul>
  <div className='space-x-3'>
  <button onClick={handleSignIn}>SignIn</button>
  <button onClick={handleSignUp}>SignUp</button>
  </div>
</div>
    );
};

export default Nav;