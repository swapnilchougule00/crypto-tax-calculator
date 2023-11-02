import React, { useEffect, useState } from "react";
import RightTemplate from "./RightTemplate";
import Faq from "./Faq";

function calculator() {
  const [term, setTerm] = useState(0);
  const [income, setIncome] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [expansePrice, setExpensePrice] = useState();
  const [capitalGain, setCapitalGain] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);

  const annualIncome = [
    { id: 0, data: "$0 - $18,200" },
    { id: 1, data: "$18,201 - $45,000" },
    { id: 2, data: "$45,001 - $120,000" },
    { id: 3, data: "$120,001 - $180,000" },
    { id: 4, data: "$180,001+" },
  ];
  const tax = [0, 19, 32.5, 37, 45];

  const taxRates = [
    "0%",
    "Nil + 19% of the excess over $18,200",
    "$5,092 + 32.5% of the excess over $45,000",
    "$29,467 + 37% of the excess over $120,000",
    "$51,667 + 45% of the excess over $180,000",
  ];

  const getNumericValue = (formattedValue) => {
    return parseFloat(formattedValue);
  };

  function calculate() {
    if (purchasePrice !== "" && salePrice !== "" && expansePrice !== "") {
      let saleprice = getNumericValue(salePrice);
      let purchaseprice = getNumericValue(purchasePrice);
      let expenseprice = getNumericValue(expansePrice);
      setCapitalGain(saleprice - purchaseprice - expenseprice);
      if (capitalGain > 0) {
        setDiscount(capitalGain / 2);
      } else {
        setDiscount(0);
      }

      if (term === 1) {
        setNetCapitalGains(capitalGain - discount);
      } else {
        setNetCapitalGains(capitalGain);
      }
    }
  }

  function calculateTax() {
    let taxPay = (tax[income] / 100) * netCapitalGains;
    setTaxToPay(taxPay);
  }

  useEffect(() => {
    calculate();
    calculateTax();
  }, [
    term,
    salePrice,
    purchasePrice,
    expansePrice,
    income,
    discount,
    capitalGain,
    netCapitalGains,
    taxToPay,
  ]);

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
                  className="border-none relative bg-[#EFF2F5] px-4 py-2 outline-none rounded-lg w-full"
                  name="years"
                  id="years"
                >
                  <option value="aus">Australia</option>
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
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
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
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
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
                    value={expansePrice}
                    onChange={(e) => setExpensePrice(e.target.value)}
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
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                >
                  {annualIncome.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.data}
                    </option>
                  ))}
                </select>
              </div>
              <div className="items-center space-y-2 md:w-[40%]  font-inter">
                <p className="text-sm mt-6">Tax Rate</p>
                <p className="text-xs">{taxRates[income]}</p>
              </div>
            </div>

            {term === 1 ? (
              <div className="w-[100%] md:flex justify-around mb-10 mt-4">
                <div className="items-center space-y-2 md:w-[40%]  font-inter">
                  <p className="text-sm">Capital gains amount</p>
                  <div className="relative">
                    <h1 className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full">
                      {isNaN(capitalGain) ? 0 : capitalGain}
                    </h1>
                    <p className="absolute left-2 top-2">$</p>
                  </div>
                </div>
                <div className="items-center space-y-2  md:w-[40%] md:mt-0 mt-16 font-inter">
                  <p className="text-sm">Discount for long term gains</p>
                  <div className="relative">
                    <h1 className="bg-[#EFF2F5] border-none absolute outline-none px-6 py-2 rounded-lg w-full">
                      {discount}
                    </h1>
                    <p className="absolute left-2 top-2">$</p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="w-[100%] md:flex justify-around mb-4 mt-4">
              <div className=" space-y-2 flex flex-col justify-center items-center md:w-[40%] bg-[#EFF2F5] rounded-lg p-3 font-inter">
                <p className="text-sm">Net Capital gains tax amount</p>
                <p className="text-[#0FBA83] font-bold text-2xl">
                  $ {isNaN(netCapitalGains) ? 0 : netCapitalGains}
                </p>
              </div>

              <div className=" space-y-2 flex flex-col justify-center md:mt-0 mt-4 items-center md:w-[40%] bg-[#EFF2F5] rounded-lg p-3 font-inter">
                <p className="text-sm">The tax you need to pay*</p>
                <p className="text-[#0141CF] font-bold text-2xl">
                  $ {isNaN(taxToPay) ? 0 : taxToPay}
                </p>
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
