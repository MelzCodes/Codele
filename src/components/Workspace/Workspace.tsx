import React, { useState } from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PlayGround from './PlayGround/PlayGround';
import Split from 'react-split'
import { Problem } from '@/utils/types/problem';
import Confetti from 'react-confetti';
import useWindowSize from '@/hooks/useWindowSize';
import { useRouter } from 'next/router';

type WorkspaceProps = {
    problem: Problem;
    query: string;
};

const Workspace:React.FC<WorkspaceProps> = ({ problem }) => {
    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const pid = typeof router.query.pid === 'string' ? router.query.pid : "";

    return <Split className='split' minSize={0}>
        <ProblemDescription problem={problem} />
        <div>
            <PlayGround problem={problem} setSuccess={setSuccess} pid={pid}/>
            {success && <Confetti gravity={0.3} tweenDuration={4000} height={height} width={width}/>}
        </div>
    </Split>
}
export default Workspace;