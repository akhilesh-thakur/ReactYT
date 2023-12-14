import React, { useState, useEffect } from "react";
import NewsAPIcard from "./NewsAPIcard";

// importing spinner component form the Day10 folder
import Spinner from "../day10/Spinner";

export default function RenderNewsAPIcard() {

  // state for loading component

  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.background = "#0F172A";
  });

  const [NewsAPIdata, setNewsAPIdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 21;

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=${pageSize}&page=${currentPage}`
        );
        const data = await response.json();
        setNewsAPIdata(data.articles);
        setLoading(false); // Loading is false after rendering
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, [currentPage]);

  // bottom buttons function goes here..

  const pervPage = () => {
    setcurrentPage((prevPage) => prevPage - 1);
  }

  const nextPage = () => {
    setcurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <div className=" bg-slate-900 text-white flex justify-center p-10 text-3xl font-bold">
        <h1>
          This is the updated version of NewsPhobia. Here we are fetching data
          from the real API
        </h1>
      </div>
      {
        Loading && (
          <Spinner/>
        )
      }
      
      <div className="flex justify-center items-center flex-wrap bg-slate-900">
        {NewsAPIdata.map((value, index) => (
          <NewsAPIcard key={index} {...value} />
        ))}
      </div>
      <div className="flex justify-around p-12 bg-slate-900">
        <button 
        onClick={pervPage} 
        disabled={currentPage === 1} 
        className={`bg-${currentPage === 1 ? "slate-700": "blue-500"} hover:bg-${currentPage === 1? false: "blue-700"} text-white font-bold py-2 px-4 rounded-l`}>
        &larr; Previous
        </button>
        <button 
        onClick={nextPage} 
        disabled={NewsAPIdata.length < pageSize} 
        className={`bg-${NewsAPIdata.length < pageSize ? "slate-700": "blue-500"} hover:bg-${NewsAPIdata.length < pageSize? false: "blue-700"} text-white font-bold py-2 px-4 rounded-r`}>
          Next &rarr;
        </button>
      </div>
    </>
  );
}
