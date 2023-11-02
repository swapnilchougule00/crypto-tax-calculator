import React, { useState } from "react";
import RightTemplate from "./RightTemplate";
import Faq from "./Faq";

function calculator() {
  const [term, setTerm] = useState(0);

  return (
    <div className="w-full  space-y-6  p-10">
      <div className=" gap-10 flex">
        <div className="md:w-[80%]  w-[100%] space-y-6">
          <div className="w-full bg-white  p-6 flex  flex-col items-center gap-2 rounded-xl">
            <h1 className="font-bold text-3xl font-inter tracking-wide mb-2">
              Free Crypto Tax Calculator Australia
            </h1>
            <div className="w-[100%]  gap-10 font-inter pb-6  items-center md:flex justify-center ">
              <div className="md:flex items-center space-y-2 md:space-y-0 md:w-[40%]  gap-2">
                <p className="text-sm ">Financial Year</p>
                <select
                  className="border-none bg-[#EFF2F5] px-4 py-2 outline-none rounded-lg w-full "
                  name="years"
                  id="years"
                >
                  <option value="23-24">FY 2023-24</option>
                </select>
              </div>

              <div className="md:flex items-center space-y-2 md:space-y-0 md:w-[40%] gap-2">
                <p className="text-sm">Country</p>
                <select
                  className="border-none bg-[#EFF2F5] px-4 py-2 outline-none rounded-lg w-full"
                  name="years"
                  id="years"
                >
                  <option value="23-24">Australia</option>
                </select>
              </div>
            </div>
            <p className="border-b border-slate-200 mb-4 w-[90%]"></p>

            <div className="w-[100%] md:flex  justify-around mb-10">
              <div className="items-center space-y-2 md:w-[40%]  font-inter">
                <p className="text-sm">Enter purchase price of Crypto</p>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full"
                  />
                  <p className="absolute left-2 top-2">$</p>
                </div>
              </div>
              <div className="items-center space-y-2 md:w-[40%] md:mt-0 mt-16 font-inter">
                <p className="text-sm">Enter sale price of Crypto</p>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full"
                  />
                  <p className="absolute left-2 top-2">$</p>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:flex justify-around mt-2">
              <div className="items-center space-y-2 md:w-[40%]  font-inter">
                <p className="text-sm">Enter your Expenses</p>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full"
                  />
                  <p className="absolute left-2 top-2">$</p>
                </div>
              </div>
              <div className="items-center space-y-2 md:w-[40%] md:mt-0 mt-16 font-inter">
                <p className="text-sm">Investment Type</p>
                <div className="flex w-full justify-between">
                  <div className="w-[45%]">
                    <button
                      onClick={() => setTerm(0)}
                      className={` py-2 border hover:border-[#0052FE] hover:text-[#0052FE] ${
                        term === 0
                          ? "border-[#0052FE] text-[#0052FE] bg-[#0052FE]/10"
                          : "border-black"
                      }  w-full rounded-lg`}
                    >
                      Short Term
                    </button>
                    <p className="text-xs mt-1"> ˂ 12 months </p>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={() => setTerm(1)}
                      className={` py-2 border hover:border-[#0052FE] hover:text-[#0052FE] ${
                        term === 1
                          ? "border-[#0052FE] text-[#0052FE] bg-[#0052FE]/10"
                          : "border-black"
                      }  w-full rounded-lg`}
                    >
                      Long Term
                    </button>
                    <p className="text-xs mt-1"> ˃ 12 months </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:flex justify-around mt-2">
              <div className="items-center space-y-2 md:w-[40%]  font-inter">
                <p className="text-sm">Select Your Annual Income</p>
                <select
                  className="border-none bg-[#EFF2F5] px-4 outline-none py-3 rounded-lg w-full"
                  name="years"
                  id="years"
                >
                  6<option value="23-24">$45,000 - $120,000</option>
                </select>
              </div>
              <div className="items-center space-y-2 md:w-[40%]  font-inter">
                <p className="text-sm mt-6">Tax Rate</p>
                <p className="text-xs">
                  $ 5,902 + 32.5% of excess over $45,001{" "}
                </p>
              </div>
            </div>

            {term === 1 ? (
              <div className="w-[100%] md:flex justify-around mb-10 mt-4">
                <div className="items-center space-y-2 md:w-[40%]  font-inter">
                  <p className="text-sm">Capital gains amount</p>
                  <div className="relative">
                    <input
                      type="text"
                      className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full"
                    />
                    <p className="absolute left-2 top-2">$</p>
                  </div>
                </div>
                <div className="items-center space-y-2 md:w-[40%]  font-inter">
                  <p className="text-sm">Discount for long term gains</p>
                  <div className="relative">
                    <input
                      type="text"
                      className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full"
                    />
                    <p className="absolute left-2 top-2">$</p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="w-[100%] md:flex justify-around mb-4 mt-4">
              <div className=" space-y-2 flex flex-col justify-center items-center md:w-[40%] bg-[#EFF2F5] rounded-lg p-3 font-inter">
                <p className="text-sm">Net Capital gains tax amount</p>
                <p className="text-[#0FBA83] font-bold text-2xl">$ 0</p>
              </div>

              <div className=" space-y-2 flex flex-col justify-center md:mt-0 mt-4 items-center md:w-[40%] bg-[#EFF2F5] rounded-lg p-3 font-inter">
                <p className="text-sm">The tax you need to pay*</p>
                <p className="text-[#0141CF] font-bold text-2xl">$ 0</p>
              </div>
            </div>
          </div>

          <Faq />
        </div>
        <div className="hidden w-[30%] md:flex">
          <RightTemplate />
        </div>
      </div>
      <div className="md:hidden">
        <RightTemplate />
      </div>
    </div>
  );
}

export default calculator;
