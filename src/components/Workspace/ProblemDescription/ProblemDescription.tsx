import { Problem } from "@/utils/types/problem";

type ProblemDescriptionProps = {
  problem: Problem;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  const difficultyClassNames: { [key: string]: string } = {
    easy: "text-olive bg-green-500",
    medium: "text-dark-yellow bg-orange-500",
    hard: "text-dark-pink bg-red-500",
  };

  const difficulty = problem.difficulty.toLowerCase();

  return (
    <div className="flex flex-col relative overflow-y-auto h-screen">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-full overflow-y-auto px-5 max-h-screen">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex items-center mt-3">
              <div className="flex mr-2 text-3xl text-white font-medium">
                {problem.title}
              </div>
              <div
                className={`inline-block rounded-[21px] bg-opacity-[.15] mt-1.5 px-2.5 py-1 text-sm font-medium capitalize ${difficultyClassNames[difficulty]}`}
              >
                {difficulty}
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-lg">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.examples.map((example, index) => (
                <div key={example.id}>
                  <p className="font-medium text-white ">
                    Example {index + 1}:{" "}
                  </p>
                  {example.img && (
                    <img src={example.img} alt="" className="mt-3" />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">Input: </strong>
                      {example.inputText}
                      <br />
                      <strong>Output: </strong>
                      {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>Explanation:</strong> {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5 pb-4 text-lg">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc ">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
