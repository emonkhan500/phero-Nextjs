import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>this is contact</h1>


            <h1 className='text-center mt-20'>Wanna See More</h1>

            <div>
               <Link href='/contact/personal'> <li>Personal</li></Link>
                <Link href='/contact/company'><li>Company</li></Link>
            </div>
        </div>
    );
};

export default page;