import React, { useEffect, useState } from "react";
import {
  FaUserTie,
  FaInternetExplorer,
  FaFacebook,
  FaRedditAlien,
  FaGithub,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";

const Crypto = () => {
  const [values, setValues] = useState([]);
  const [coinId, setCoinId] = useState("btc-bitcoin");
  const [value, setValue] = useState([]);
  const [count, setCount] = useState(20);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((response) => response.json())
      .then((data) => setValues(data));

    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, [coinId]);
  console.log(value?.links?.facebook);

  return (
    <>
      <div className="grid grid-cols-12 ">
        {/* crypto List */}
        <div className="col-start-1 col-end-3 py-10 px-2 font-mono  bg-red-100 ">
          <div className="mb-3">
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
          </div>
          {values?.slice(count - 20, count)?.map((d) => (
            <>
              <div
                onClick={() => setCoinId(d?.id)}
                className="flex duration-500 hover:bg-red-200 cursor-pointer text-lg  p-3 justify-between overflow-hidden"
              >
                <p>{d?.rank}</p>
                <p className="mx-3 overflow-hidden">{d?.name}</p>
                <p className=" text-pink-800">{d?.symbol}</p>
              </div>
            </>
          ))}
          <div className="flex justify-between mt-5">
            {count >= 40 ? (
              <button
                onClick={() => setCount(count - 20)}
                className="bg-amber-600 px-2 py-2 rounded-lg text-lg"
              >
                Previous
              </button>
            ) : (
              <button
                disabled
                className="bg-zinc-300 px-2 py-2 rounded-lg text-lg"
              >
                Previous
              </button>
            )}
            <button
              onClick={() => setCount(count + 20)}
              className="bg-green-500 px-5 py-2 rounded-lg text-lg"
            >
              Next
            </button>
          </div>
        </div>
        {/* details list */}
        <div className="col-start-3 col-end-13 pl-10 py-14 space-x-2 bg-amber-100 ">
          <div>
            <div className="flex justify-start text-xl font-bold">
              <p>{value?.name}</p>
              <p className="text-pink-800 ml-5">{value?.symbol}</p>
            </div>
            <p className="text-base my-3">{value?.description}</p>
            <p className="text-lg font-semibold my-3">
              {" "}
              Hash Algorithm : {value?.hash_algorithm}
            </p>
            <p className="text-lg font-semibold">
              {" "}
              Structure Organisation : {value?.org_structure}
            </p>
            <div className="">
              <p className="text-xl my-3 font-bold">
                People who worked on{" "}
                <span className="text-pink-800">{value?.name} </span>:{" "}
              </p>
              {value?.team?.map((d) => (
                <div className="text-lg flex items-center ml-5 mt-2">
                  <FaUserTie />
                  <p className="ml-3">
                    {d?.name}{" "}
                    <span className="text-sm ml-1">({d?.position})</span>
                  </p>
                </div>
              ))}
            </div>
            {/* <a className="block" href={value?.links_extended[0]?.url} target="_blank">Official Website</a> */}
            <div className="text-xl font-bold mt-3">
              <span>Read More About : </span>
              <button className="text-xl font-semibold text-pink-900">
                {value?.name}
              </button>
            </div>
            {/* details a coin */}
            <hr className="h-1 my-5 bg-red-500 w-full" />
            <div>
              <p>Here some social Link {value?.name}</p>
              <div className="flex">
                {/* for youtube */}
                <div className="flex ">
                  {value?.links?.youtube?.map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaYoutube className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>
                {/* for website */}
                <div className="flex ">
                  {value?.links?.website?.map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaGlobe className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>
                {/* for facebook */}
                <div className="flex ">
                  {value?.links?.facebook?.map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaFacebook className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>
   {/* for github source code */}
   <div className="flex ">
                  {value?.links?.source_code?.map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaGithub className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* for reddit  */}
                <div className="flex flex-wrap">
                  {value?.links?.reddit?.map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaRedditAlien className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>
                {/* for explorer icon link */}
                <div className="flex flex-wrap">
                  {value?.links?.explorer?.slice(0,4).map((d) => (
                    <a className="block" href={d} target="_blank">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                        {" "}
                        <FaInternetExplorer className="text-4xl text-white" />{" "}
                      </div>
                    </a>
                  ))}
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
