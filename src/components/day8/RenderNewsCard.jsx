import React from "react";
import NewsCard from "./NewsCard";
import newsData from "./newsData.json";

const RenderNewsCard = () => {
  return (
    <>
      <div className="flex justify-center text-4xl p-10 font-bold">
        <h1>Welcome to NewsPhobia - A news App model by Akhilesh</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {newsData.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default RenderNewsCard;
