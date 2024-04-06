import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type authProps = {
    
};

const auth:React.FC<authProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-7x1 mx-auto'>
            <Navbar />
        </div>
    </div>
}
export default auth;