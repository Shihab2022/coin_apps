import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [values, setValues] = useState([]);
  const [coinId, setCoinId] = useState("btc-bitcoin");
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((response) => response.json())
      .then((data) => setValues(data));

    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, []);
  console.log(value);

  return (
    <>
      <div className="grid grid-cols-12 ">
        {/* crypto List */}
        <div className="col-start-1 col-end-3 py-10 px-5 font-mono  bg-red-500 ">
          <h1 className="text-2xl font-bold uppercase py-2 font-serif text-amber-500">
            Crypto List
          </h1>
          <form>
            <input
              type="text"
              className="border-2 border-amber-500 bg-white rounded-md"
              name=""
              id=""
            />
            <input type="submit" value="" />
          </form>
          {values?.slice(0, 20)?.map((d) => (
            <>
              <div className="flex text-lg my-5 justify-between overflow-hidden">
                <p>{d?.rank}</p>
                <p className="mx-3">{d?.name}</p>
                <p className=" text-pink-800">{d?.symbol}</p>
              </div>
            </>
          ))}
        </div>
        {/* details list */}
        <div className="col-start-3 col-end-13 px-10 py-14 space-x-2 bg-amber-500 ">
          <div>
            <div className="flex justify-start text-xl font-bold">
              <p>{value?.name}</p>
              <p className="text-pink-800 ml-5">{value?.symbol}</p>
            </div>
            <p>{value?.description}</p>
            <p> Hash Algorithm : {value?.hash_algorithm}</p>
            <p> Structure Organisation : {value?.org_structure}</p>
            <div>
              <p>People who worked on {value?.name}</p>
              {value?.team?.map((d) => (
                <p>
                  {d?.name} <span className="text-sm ml-3">({d?.position})</span>
                </p>
              ))}
            </div>
            {/* <a className="block" href={value?.links_extended[0]?.url}>Official Website</a> */}
            <div>
                <span>Read More About : </span>
            <button className="text-xl font-semibold text-pink-900">{value?.name}</button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
