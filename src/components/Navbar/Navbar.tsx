import Link from 'next/link';
import React from 'react';
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/nextjs'

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () => {
    const { user } = useUser();
    
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        
        <div className='flex items-center justify-center h-20 text-lg uppercase font-bold text-white'>
            Leet Code Daily 💻 🚀
        </div>

        <div className='flex items-center'>
                {!user && (
                    <>
                        <Link href='/sign-in' className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange mr-4'>
                            Sign In
                        </Link>
                        <Link href='/sign-up' className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange'>
                            Sign Up
                        </Link>
                    </>
                )}
                <>
                    <div className='ml-auto'>
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                </>
            </div>
    </div>
}
export default Navbar;