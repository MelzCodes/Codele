import React, { useEffect, useState } from 'react';
import Split from 'react-split';
import PreferenceNav from '../PreferenceNav/PreferenceNav';
import EditorFooter from '../EditorFooter/EditorFooter';
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { Problem } from '@/utils/types/problem';
import { problems } from '@/utils/problems';
import { useUser } from '@clerk/nextjs';
import { ToastOptions, toast } from 'react-toastify';

type PlayGroundProps = {
    problem: Problem;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    pid: string;
};

const PlayGround:React.FC<PlayGroundProps> = ( {problem, setSuccess, pid} ) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0); 
    let [userCode, setUserCode] = useState<string>(problem.starterCode);
    const { user } = useUser();
    const commonToastOptions: ToastOptions = {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark'
    };

    const onChange = (value : string) => {
        setUserCode(value);
    };

    const handleSubmission = () => {
        userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
        if (!userCode.startsWith(problem.starterFunctionName) ) {
            toast.error('Please use the correct function name: ' + problem.starterFunctionName, commonToastOptions);
            return;
        };

        if (!user) {
            toast.error('Please log in to submit your code!', commonToastOptions);
            return;
        };

        try {
            const cb = new Function(`return ${userCode}`)();
            const handlerFunction = problems[pid].handlerFunction;
            if (typeof handlerFunction === 'function') {
                const success = handlerFunction(cb);
                if (success) {
                    toast.success('Congrats! All test cases passed!', commonToastOptions);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 4000);
                } else {
                    toast.error('Oops! Some test cases failed!', commonToastOptions);
                }
            } else {
                toast.error('Invalid handler function!', commonToastOptions);
            }
        } catch (error) {
            toast.error('Oops, something went wrong!', commonToastOptions);
        }
    };

    return <div className='flex flex-col relative overflow-x-hidden bottom-0'>
        <PreferenceNav />

        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60} >
            <div className='w-full overflow-auto bg-dark-layer-1'>
                <CodeMirror value={problem.starterCode} theme={vscodeDark} extensions={[javascript()]} onChange={onChange}/>
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
                    {problem.examples.map((example, index) => (
                        <div className='mr-2 items-start mt-2 text-white' key={example.id}
                        onClick={() => setActiveTestCaseId(index)}
                        >
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                            hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                            ${activeTestCaseId === index ? "" : "text-gray-500"}`}>
                                Case {index + 1}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='font-semibold my-4'>
                    <p className='text-sm font-medium mt-4 text-white'>Input: </p>
                    <div className='w-full cursor-text rounded-lg px-3 py-[10px] border bg-dark-fill-3 border-transparent text-white mt-2' >
                        {problem.examples[activeTestCaseId].inputText}
                    </div>
                </div>

                <div className='font-semibold pb-2'>
                    <p className='text-sm font-medium mt-4 text-white'>Output: </p>
                    <div className='w-full cursor-text rounded-lg px-3 py-[10px] border bg-dark-fill-3 border-transparent text-white mt-2' >
                        {problem.examples[activeTestCaseId].outputText}
                    </div>
                </div>

            </div>
        </Split>

        <EditorFooter handleSubmission={handleSubmission} />
    </div>

}
export default PlayGround;