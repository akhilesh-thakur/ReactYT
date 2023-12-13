import React from "react";

const NewsAPIcard = ({ title, description, urlToImage, url }) => {

  return (
    <div
      className=" p-2 bg-blue-200 m-3 max-w-sm rounded overflow-hidden shadow-lg"
      style={{ height: "100%" }}
    >
      {urlToImage && <img className="w-full" src={urlToImage} alt="News" />}
      <div className="px-6 py-4 h-52 object-cover">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {url && (
        <div className="px-6 py-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsAPIcard;
