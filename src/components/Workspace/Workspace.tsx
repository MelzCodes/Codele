import React from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Split from 'react-split'

type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split className='split'>
        <ProblemDescription />
        <div>The code editor will be here</div>
    </Split>
}
export default Workspace;