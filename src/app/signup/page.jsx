"use client";
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
const page = () => {

const handleSignIn =e=> {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email,pass,name,photo)
}


    return (
        <div className=" flex  items-center py-3 md:py-10 lg:py-32 justify-center bg-gray-100">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row bg-white shadow-lg rounded-lg  overflow-hidden">
        
        <div className="w-auto p-8">
          <h2 className="text-3xl font-semibold  md:mt-1 lg:mt-3 mb-1">Welcome To <span className='text-green-500 text-4xl'>Career Canvas!!</span></h2>
          <p className="text-gray-500">The faster you Sign Up, The faster you can build your Resume</p>
          <form onSubmit={handleSignIn} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Name
              </label>
              <input
                type="email"
                
                id="email"
                name='name'
                required
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Photo
              </label>
              <input
                type="email"
                id="email"
                name='photo'
                
                placeholder="Enter your Photo"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                required
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
              required
                type="password"
                id="password"
                name='pass'
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <button type='submit' className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
              Sign Up
            </button>
            <button className="mt-4 w-full text-green-600 bg-white border border-gray-300  font-bold py-2 px-4 rounded-lg hover:bg-green-100 flex items-center justify-center">
              <FaGoogle className='mr-3 text-green-800'></FaGoogle>
              Sign Up with Google
            </button>
          </form>
          <p className="mt-4  text-center text-gray-600">
            Already have an account?{' '}
            <Link className='font-bold ml-2 text-lg text-green-600' href="/login">
              Sign In
            </Link>
          </p>
        </div>
        
        <div className=" w-auto  ">
         <img className='p-4 w-full h-96 md:h-[500px] lg:h-full ' src="https://i.ibb.co.com/ZY1WX08/Screenshot-58.png" alt="" />
         
        </div>
      </div>
    </div>
    );
};

export default page;