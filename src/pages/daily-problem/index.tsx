import React from 'react';
import Navbar from "@/components/Navbar/Navbar"
import Workspace from "@/components/Workspace/Workspace"

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    return (
        <div>
             <Navbar />
             <Workspace />
        </div>
    );
};
export default ProblemPage;