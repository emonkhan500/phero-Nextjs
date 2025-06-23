'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Nav = () => {
  
  const router= useRouter()
  const session =useSession()
  const links=[
    {
      title:'Home',
      path:'/'
    },
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
router.push('/signin')
  }
  const handleSignUp = ()=>{
router.push('/signup')
  }
    return (
        <div className="2xl: flex justify-around py-10 selection: bg-green-200" >
  <h1>Logo</h1>

  <ul className="flex justify-around gap-5 ">
   {
    links.map(link=><li ><Link href={link.path}>{link.title}</Link> </li>)
   }
  </ul>
  <div className='space-x-3'>
  {session ? (
  <>
    <button onClick={handleSignIn}>Sign In</button>
    <button onClick={handleSignUp}>Sign Up</button>
  </>
) : (
  <button >Logout</button>
)}
 
  </div>
</div>
    );
};

export default Nav;