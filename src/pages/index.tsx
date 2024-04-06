import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow flex flex-col justify-center items-center">
        <div className="mb-10">
          <Image src="/logo.png" alt="LeetCode Daily Logo" width={150} height={150} />
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to LeetCode Daily</h1>
        <p className="text-lg mb-8 max-w-lg text-center">
          Imagine wordle but for all of us nerds... 
          Hold yourself accountable and solve a fun (kinda) challenge everyday with us!
        </p>
        <Link href="/sign-up">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;