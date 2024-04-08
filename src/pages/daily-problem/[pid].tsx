import React from 'react';
import Navbar from "@/components/Navbar/Navbar"
import Workspace from "@/components/Workspace/Workspace"
import { Problem } from '@/utils/types/problem';
import { problems } from '@/utils/problems';

type ProblemPageProps = {
    problem: Problem
};

const ProblemPage:React.FC<ProblemPageProps> = ({ problem }) => {
    return (
        <div>
             <Navbar />
             <Workspace problem={problem}/>
        </div>
    );
};
export default ProblemPage;

//server side generation of problem path and data, statically generated from the below getters
export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}