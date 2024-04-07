import React from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PlayGround from './PlayGround/PlayGround';
import Split from 'react-split'

type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split className='split' minSize={0}>
        <ProblemDescription />
        <PlayGround />
    </Split>
}
export default Workspace;