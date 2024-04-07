import Link from 'next/link';
import React from 'react';
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/nextjs'
import Timer from '@/components/Timer/Timer';

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () => {
    const { user, isLoaded } = useUser();
    
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <div className='flex items-center justify-center h-20 text-lg uppercase font-bold text-white'>
                Leet Code Daily 💻 🚀
            </div>

            <div className='flex items-center justify-center'>
                {isLoaded && user && (
                    <Timer />
                )}
            </div>

            <div className='flex items-center'>
                {isLoaded && !user && (
                    <Link href='/sign-in' className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium mr-4'>
                        Sign In
                    </Link>
                )}
                {isLoaded && user && (
                    <Link href='/profile' className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium mr-4'>
                        Account Settings
                    </Link>
                )}
                {isLoaded && (
                    <div className='ml-auto'>
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;