import React from 'react';
import {
    FaUserTie
  } from "react-icons/fa";
const Another = ({cryptoDetails}) => {
    const {name,symbol,description,hash_algorithm ,org_structure,team,logo} =cryptoDetails?.value
    const setDetails=cryptoDetails?.setDetails
    const details=cryptoDetails.details

    return (
        <div>
             <div className="flex justify-between items-center">
                <div>
                  <div className="flex justify-start text-xl font-bold">
                    <p>{name}</p>
                    <p className="text-pink-800 ml-5">{symbol}</p>
                  </div>
                  <p className="text-base my-3">{description}</p>
                  <p className="text-lg font-semibold my-3">
                    {" "}
                    Hash Algorithm : {hash_algorithm}
                  </p>
                  <p className="text-lg font-semibold">
                    {" "}
                    Structure Organisation : {org_structure}
                  </p>
                  <div className="">
                    <p className="text-xl my-3 font-bold">
                      People who worked on{" "}
                      <span className="text-pink-800">{name} </span>:{" "}
                    </p>
                    {team?.map((d,index) => (
                      <div  className="text-lg flex items-center ml-5 mt-2" key={index}>
                        <FaUserTie />
                        <p className="ml-3">
                          {d?.name}{" "}
                          <span className="text-sm ml-1">({d?.position})</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-xl font-bold mt-3">
                    <span>Read More About : </span>
                    <button
                      onClick={() => setDetails(!details)}
                      className="text-2xl font-semibold underline hover:text-amber-500 duration-300 text-blue-800"
                    >
                      {name}
                    </button>
                  </div>
                </div>
                <img src={logo} className="pr-20" alt="" />
              </div>
        </div>
    );
};

export default Another;