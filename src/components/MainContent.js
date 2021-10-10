import { Image } from "antd";
import React from "react";

const MainContent = () => {
  return (
    <>
      <div>
        <Image
          width={500}
          preview={false}
          src="https://i.imgur.com/d9ePMKW.png"
        ></Image>
        <h1 class="main-club-name">LINUX CAMPUS CLUB JSSSTU</h1>
      </div>
    </>
  );
};

export default MainContent;
