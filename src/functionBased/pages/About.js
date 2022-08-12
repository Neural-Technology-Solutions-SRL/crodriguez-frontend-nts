import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import SinglePage from "./SinglePage";

//import { useMatch } from "react-router-dom";

const About = () => {
  //console.log(useMatch());

  return (
    <div className="about_content">
      <ul className="about_list">
        <li>
          <Link to={`about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route element={<SinglePage />} path={`:slug`}></Route>
      </Routes>
    </div>
  );
};
export default About;
