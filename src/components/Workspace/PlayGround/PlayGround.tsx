import React from 'react';
import Split from 'react-split';
import PreferenceNav from '../PreferenceNav/PreferenceNav';
import EditorFooter from '../EditorFooter/EditorFooter';
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
            
            <div className='w-full px-5 overflow-auto bg-dark-layer-1'>
                {/*Heading */}
                <div className='flex h-10 items-center space-x-6'>
                    <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                        <div className='text-sm font-medium leading-5 text-white'> Testcases </div>
                        <hr className='hr-underline'/>
                    </div>
                </div>

                <div className='flex'>
                    {/*Test case 1 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                            hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 1
                            </div>
                        </div>
                    </div>

                    {/*Test case 2 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                            hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 2
                            </div>
                        </div>
                    </div>

                    {/*Test case 3 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                            hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 3
                            </div>
                        </div>
                    </div>
                </div>

                <div className='font-semibold my-4'>
                    <p className='text-sm font-medium mt-4 text-white'>Input: </p>
                    <div className='w-full cursor-text rounded-lg px-3 py-[10px] border bg-dark-fill-3 border-transparent text-white mt-2' >
                        nums: [2,7,11,15], target: 9
                    </div>
                </div>

                <div className='font-semibold'>
                    <p className='text-sm font-medium mt-4 text-white'>Output: </p>
                    <div className='w-full cursor-text rounded-lg px-3 py-[10px] border bg-dark-fill-3 border-transparent text-white mt-2' >
                        [0, 1]
                    </div>
                </div>

            </div>
        </Split>

        <EditorFooter />
    </div>

}
export default PlayGround;