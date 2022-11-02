import React from 'react';
import {
    FaInternetExplorer,
    FaFacebook,
    FaRedditAlien,
    FaGithub,
    FaGlobe,
    FaYoutube
  } from "react-icons/fa";

const CryptoRelatedLink = ({value}) => {
    const {name,links,links_extended}=value
    return (
        <>
              <hr className="h-1 my-5 bg-red-500 w-full" />
                  <div>
                    <p className="text-xl  font-semibold">
                      Here some social link about <button></button>
                      {name}
                    </p>
                    <div className="flex">
                      {/* for youtube */}
                      <div className="flex ">
                        {links?.youtube?.map((d,index) => (
                          <a key={index} className="block" href={d} target="_blank">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                              {" "}
                              <FaYoutube className="text-4xl text-white" />{" "}
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* for website */}
                      <div className="flex ">
                        {links?.website?.map((d , index) => (
                          <a key={index} className="block" href={d} target="_blank">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                              {" "}
                              <FaGlobe className="text-4xl text-white" />{" "}
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* for facebook */}
                      <div className="flex ">
                        {links?.facebook?.map((d,index) => (
                          <a key={index} className="block" href={d} target="_blank">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                              {" "}
                              <FaFacebook className="text-4xl text-white" />{" "}
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* for github source code */}
                      <div className="flex ">
                        {links?.source_code?.map((d,index) => (
                          <a key={index} className="block" href={d} target="_blank">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                              {" "}
                              <FaGithub className="text-4xl text-white" />{" "}
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* for reddit  */}
                      <div className="flex flex-wrap">
                        {links?.reddit?.map((d , index) => (
                          <a key={index} className="block" href={d} target="_blank">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-800  py-4 px-10  rounded-lg  my-3 ml-3 ">
                              {" "}
                              <FaRedditAlien className="text-4xl text-white" />{" "}
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* for explorer icon link */}
                      <div className="flex flex-wrap">
                        {links?.explorer?.slice(0, 4).map((d , index) => (
                          <a key={index} className="block" href={d} target="_blank">
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
                      More Details about {name}
                    </h1>
                    <div className="flex flex-wrap">
                      {links_extended?.map((d,index) => (
                        <div key={index} className="bg-gradient-to-r from-amber-300 to-green-800 shadow-2xl rounded-lg m-3 px-5 py-3 ">
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
    );
};

export default CryptoRelatedLink;