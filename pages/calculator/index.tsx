import React, { useState } from "react";
import NavBar from "../../components/navBar/navBar";
import Head from "next/head";

const calculator = () => {

  const [value, setValue] = useState<string>("12 + 61212");
  const [sum, setSum] = useState<number | undefined>();

  const keySet: Array<Array<string>> = [
    [".", "√", "x²", "<"],
    ["1", "2", "3", "C"],
    ["4", "5", "6", "/"],
    ["7", "8", "9", "*"],
    ["0", "+", "-", "="]
  ];

  const click = (prop: string) => {

    const buttonFuncs: any = {
      "C": () => {setValue(""); setSum(undefined);},
      "=": () => {setSum(eval(value));},
      "<": () => {setValue(val => val.charAt(val.length - 1) == " " ? val.slice(0, val.length - 2) : val.slice(0, val.length - 1))},
      "√": () => {setSum(Math.sqrt(eval(value)))},
      "x²": () => {setSum(Math.pow(eval(value), 2))}
    };

    const func = buttonFuncs[prop] || prop;
    if(typeof func == "function") return func();
    setValue(val => val + func);
  }

  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className="flex w-full h-full justify-center items-center">
        <div className="border-8 border-white border-opacity-20 rounded-4xl w-144 h-192 flex flex-col justify-around">
          <div className="bg-white/20 h-36 w-120 mx-auto my-8 rounded-md
            select-none text-white text-3xl font-medium
            flex flex-col justify-around
          ">
            <div className="h-20 mx-2">
              { value }
            </div>
            <div
              className="text-end h-10 mx-2">
              { sum && sum + "="}
            </div>
          </div>

          <div className="mb-8">
            {keySet.map((ul: string[] ) =>
              <ul className="w-124 h-24 flex justify-around items-center mx-auto">
                {ul.map((li: string) =>
                  <li key={li}
                    className="bg-white/20 w-20 h-20 flex justify-center items-center rounded-full
                      text-white font-medium text-4xl select-none cursor-pointer"
                    onClick={() => click(li)}
                  >
                    {li}
                  </li>
                )}
              </ul>
            )}
          </div>

        </div>
      </main>
    </>
  )
}

export default calculator;