// Home.js
import React from "react";
import Body from "./Body";

const Home = () => {
  return (
    <>
      <Body bg={"bg-gray-100 p-8 rounded-lg shadow-md"} img={"./favicon.ico"} />
      <Body bg={"bg-pink-100 p-8 rounded-lg shadow-md"} img={"./dog.jpg"} />
      <Body bg={"bg-green-100 p-8 rounded-lg shadow-md"} img={"./favicon.ico"} />
      <Body bg={"bg-yellow-100 p-8 rounded-lg shadow-md"} img={"./dog.jpg"} />
      <Body bg={"bg-red-100 p-8 rounded-lg shadow-md"} img={"./favicon.ico"} />
      <Body bg={"bg-blue-100 p-8 rounded-lg shadow-md"} img={"./dog.jpg"} />
      <Body bg={"bg-purple-100 p-8 rounded-lg shadow-md"} img={"./favicon.ico"} />
      <Body bg={"bg-yellow-100 p-8 rounded-lg shadow-md"} img={"./dog.jpg"} />
    </>
  );
};

export default Home;
