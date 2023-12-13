import React, {useState,useEffect} from "react";
import NewsAPIcard from "./NewsAPIcard";

export default function RenderNewsAPIcard() {


    const [NewsAPIdata, setNewsAPIdata] = useState([]);

    useEffect(() => {
      const fetchNewsData = async () => {
        try {
            const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=tesla&from=2023-11-13&sortBy=publishedAt&apiKey=${apiKey}`
          );
          const data = await response.json();
          setNewsAPIdata(data.articles);
        } catch (error) {
          console.error('Error fetching news data:', error);
        }
    }

    fetchNewsData();
}, []); 


  return (
    <>
      <div className=" bg-slate-900 text-white flex justify-center p-10 text-3xl font-bold">
        <h1>
          This is the updated version of NewsPhobia. Here we are fetching data
          from the real API
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap bg-slate-900">
        {NewsAPIdata.map((value, index) => (
          <NewsAPIcard key={index} {...value} />
        ))}
      </div>
    </>
  );
}
