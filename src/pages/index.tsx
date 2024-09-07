import Navbar from "@/components/Navbar/Navbar";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { problems } from "@/utils/problems";

const HomePage: React.FC = () => {
  const { user, isLoaded } = useUser();
  const [activeProblemId, setActiveProblemId] = useState<string | null>(null);

  //dynamically update the link to the new problem based on what day it is
  useEffect(() => {
    const fetchActiveProblemId = async () => {
      const currentDate = new Date();
      const lastAccessedDate = localStorage.getItem("lastAccessedDate");
      let lastAccessedIndex = parseInt(
        localStorage.getItem("lastAccessedIndex") ?? "0"
      );

      if (
        !lastAccessedDate ||
        new Date(lastAccessedDate).getDate() !== currentDate.getDate()
      ) {
        lastAccessedIndex =
          (lastAccessedIndex + 1) % Object.keys(problems).length;
        localStorage.setItem("lastAccessedDate", currentDate.toString());
        localStorage.setItem("lastAccessedIndex", lastAccessedIndex.toString());
      }

      const problemKeys = Object.keys(problems);
      const currentProblemKey = problemKeys[lastAccessedIndex];
      setActiveProblemId(currentProblemKey);
    };

    fetchActiveProblemId();
  }, []);

  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex-grow flex flex-col justify-center items-center">
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="LeetCode Daily Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Codele
        </h1>
        <p className="text-lg mb-8 max-w-lg text-center">
          Imagine wordle but for all of us comp-sci nerds... Hold yourself
          accountable and solve a fun (kinda) challenge everyday with us!
        </p>
        {isLoaded && user ? (
          <Link href={`/daily-problem/${activeProblemId}`}>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600">
              See Daily Challenge!
            </button>
          </Link>
        ) : (
          <Link href="/sign-up">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
