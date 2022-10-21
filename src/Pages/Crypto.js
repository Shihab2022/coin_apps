import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, []);
  console.log(value);

  return (
    <>
      <div className="grid grid-cols-12 ">
        {/* crypto List */}
        <div className="col-start-1 col-end-3 p-10  bg-red-500 h-screen">
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
          {value.slice(0, 20).map((d) => (
            <>
              <p>{d.name}</p>
            </>
          ))}
        </div>
        {/* details list */}
        <div className="col-start-3 col-end-13 bg-amber-500 "></div>
      </div>
    </>
  );
};

export default Crypto;
