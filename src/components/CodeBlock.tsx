import {  MutableRefObject, Dispatch, SetStateAction } from "react";
import GradientButton from "./GradientButton";
import ToggleTheme from "./ToggleTheme";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierLakesideLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({
  codeEls,
  index,
  code,
  codeTheme,
  setCodeTheme
}: {
  codeEls: MutableRefObject<HTMLDivElement[]>;
  index: number;
  code: string;
  codeTheme:string;
  setCodeTheme:Dispatch<SetStateAction<string>>
}) => {

  return (
    <>
      <div className="w-full flex items-center justify-between bg-gray-700 p-2 mt-4 rounded-t-lg">
        <span className="text-gray-400">JSX</span>
        <div className="flex gap-5 items-center">
          <GradientButton
            from="from-purple-500"
            to="to-blue-500"
            customClasses="after:content-['copy'] focus:text-emerald-500 focus:after:content-['copied']"
            handleClick={() =>
              navigator.clipboard.writeText(codeEls.current[index]!.innerText)
            }
          />

          <ToggleTheme mode={codeTheme} setMode={setCodeTheme} />
        </div>
      </div>
      <div
        ref={(e) => codeEls.current.push(e!)}
        className=" max-h-96 overflow-y-auto mb-6"
      >
        <SyntaxHighlighter
          language="typescript"
          style={
            codeTheme === "dark" ? atelierSulphurpoolDark : atelierLakesideLight
          }
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBlock;
