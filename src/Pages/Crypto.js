import React, { useEffect, useState } from "react";
import {
  FaUserTie,
  FaInternetExplorer,
  FaFacebook,
  FaRedditAlien,
  FaGithub,
  FaGlobe,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import Another from "./Another";
import Loading from "./Loading";

const Crypto = () => {
  const [values, setValues] = useState([]);
  const [coinId, setCoinId] = useState("btc-bitcoin");
  const [value, setValue] = useState([]);
  const [count, setCount] = useState(20);
  const [details, setDetails] = useState(false);
  const [input, setInput] = useState(null);
  const [searchValue, setSearchValue] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setValues(data);
      });
  }, []);


  useEffect(()=>{

    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    .then((response) => response.json())
    .then((data) => setValue(data));
  },[coinId])


  const searchCoin = (e) => {
    const remaining = values?.filter((v) =>
      v?.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchValue(remaining);
    e.target.reset();
    e.preventDefault();
  };
const cryptoDetails={
  value:value,
  setDetails:setDetails,
    details:details
}
  console.log(value);
  return (
    <>
      <div className=" relative">
        <div className="grid grid-cols-12 ">
          {/* crypto List */}
          <div className="col-start-1 col-end-3 py-10 px-2   bg-red-100 ">
            <div className="mb-3">
              <h1 className="text-2xl font-bold uppercase py-2 font-serif text-amber-500">
                Crypto List
              </h1>
              <form onSubmit={searchCoin} className="relative">
                <input
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  className="border-2 w-full border-amber-500 px-3 py-1 bg-white rounded-lg"
                  name=""
                  placeholder="Search coin with name"
                  id=""
                />
                {input && (
                  <button className=" bottom-2 right-3 absolute text-lg text-amber-700">
                    <FaSearch />
                  </button>
                )}
              </form>
            </div>


            {values?.slice(count - 20, count)?.map((d ,index) => (
              <>
                <div
                  onClick={() => setCoinId(d?.id)}
                  className="flex duration-300 hover:bg-red-200 hover:rounded-md cursor-pointer text-lg  p-3 justify-between overflow-hidden"
                  key={index}
                >
                  <p>{d?.rank}</p>
                  <p className="mx-3 w-full overflow-hidden">{d?.name}</p>
                  <p className=" text-pink-800 font-base">{d?.symbol}</p>
                </div>
              </>
            ))}
            <div className="flex justify-between mt-5" >
              {count >= 40 ? (
                <button
                  onClick={() => setCount(count - 20)}
                  className="bg-gradient-to-r from-lime-500 to-teal-500 text-white px-2 py-2 rounded-lg text-lg"
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
                className="bg-gradient-to-r from-purple-500 to-rose-500 text-white px-5 py-2  rounded-lg text-lg"
              >
                Next
              </button>
            </div>
          </div>
          {/* details list */}
          <div className="col-start-3 col-end-13 pl-10 py-14 space-x-2 bg-amber-100 ">
            <div>
              <Another  cryptoDetails={cryptoDetails}/>
              {/* details a coin */}
              {details && (
                <>
                  <hr className="h-1 my-5 bg-red-500 w-full" />
                  <div>
                    <p className="text-xl  font-semibold">
                      Here some social link about <button></button>
                      {value?.name}
                    </p>
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
                        {value?.links?.explorer?.slice(0, 4).map((d) => (
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
                  <div>
                    <h1 className="text-xl my-3">
                      More Details about {value?.name}
                    </h1>
                    <div className="flex flex-wrap">
                      {value.links_extended?.map((d) => (
                        <div className="bg-gradient-to-r from-amber-300 to-green-800 shadow-2xl rounded-lg m-3 px-5 py-3 ">
                          <a
                            href={d.url}
                            target="_blank"
                            className="uppercase text-lg text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-900"
                          >
                            {d.type}{" "}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* for search result */}
        {input && (
          <div className="w-full grid grid-cols-12 absolute top-32 left-0 ">
            <div className="col-start-1 col-end-3 bg-green-100 z-10 ">
              {searchValue?.slice(0, 50)?.map((d) => (
                <>
                  <div
                    onClick={() => {
                      setInput(false);
                      setCoinId(d?.id);
                    }}
                    className="flex duration-500 hover:bg-red-200 cursor-pointer text-lg  p-3 justify-between overflow-hidden"
                  >
                    <p>{d?.rank}</p>
                    <p className="mx-3 overflow-hidden">{d?.name}</p>
                    <p className=" text-pink-800">{d?.symbol}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Crypto;
