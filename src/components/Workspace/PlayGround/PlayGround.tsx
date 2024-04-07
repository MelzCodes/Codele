import React from 'react';
import Split from 'react-split';
import PreferenceNav from '../PreferenceNav/PreferenceNav';
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

type PlayGroundProps = {
    
};

const PlayGround:React.FC<PlayGroundProps> = () => {
    
    return <div className='flex flex-col relative'>
        <PreferenceNav />

        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
            <div className='w-full overflow-auto bg-dark-layer-1'>
                <CodeMirror value='const a=1;' theme={vscodeDark} extensions={[javascript()]}/>
            </div>
            <div className='flex flex-col items-center bg-dark-layer-1'>testcases going here</div>
        </Split>
    </div>

}
export default PlayGround;