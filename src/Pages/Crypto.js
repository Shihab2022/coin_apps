import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [values, setValues] = useState([]);
  const [coinId, setCoinId] = useState("btc-bitcoin");
  const [value, setValue] = useState([]);
  const [count,setCount]=useState(20)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((response) => response.json())
      .then((data) => setValues(data));

    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, [coinId,values]);
  console.log(values);

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
          {values?.slice((count-20), count)?.map((d) => (
            <>
              <div onClick={()=>setCoinId(d?.id)} className="flex duration-500 hover:bg-red-200 cursor-pointer text-lg  p-3 justify-between overflow-hidden">
                <p>{d?.rank}</p>
                <p className="mx-3 overflow-hidden">{d?.name}</p>
                <p className=" text-pink-800">{d?.symbol}</p>
              </div>
            </>
          ))}
         <div className="flex justify-between mt-5">
            {
                count>=40 ? <button onClick={()=>setCount(count-20)} className="bg-amber-600 px-2 py-2 rounded-lg text-lg">Previous</button> : <button disabled className="bg-zinc-300 px-2 py-2 rounded-lg text-lg">Previous</button>
            } 
            <button onClick={()=>setCount(count+20)} className="bg-green-500 px-5 py-2 rounded-lg text-lg">Next</button>
         </div>
        </div>
        {/* details list */}
        <div className="col-start-3 col-end-13 px-10 py-14 space-x-2 bg-amber-100 ">
          <div>
            <div className="flex justify-start text-xl font-bold">
              <p>{value?.name}</p>
              <p className="text-pink-800 ml-5">{value?.symbol}</p>
            </div>
            <p>{value?.description}</p>
            <p> Hash Algorithm : {value?.hash_algorithm}</p>
            <p> Structure Organisation : {value?.org_structure}</p>
            <div className="">
              <p className="text-xl my-3 font-bold">People who worked on <span className="text-pink-800">{value?.name} </span>: </p>
              {value?.team?.map((d) => (
                <p className="text-lg">
                  {d?.name} <span className="text-sm ml-3">({d?.position})</span>
                </p>
              ))}
            </div>
            {/* <a className="block" href={value?.links_extended[0]?.url} target="_blank">Official Website</a> */}
            <div className="text-xl font-bold mt-3">
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
