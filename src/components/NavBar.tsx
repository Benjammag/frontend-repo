import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='mt-5'>
            <ul className='flex items-center gap-[4vw]'>
                <li>
                    <a className='hover:text-gray-500' href="#">All Payments</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">Success</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">Failed</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar