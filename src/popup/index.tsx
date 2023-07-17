import githubMark from "data-base64:~assets/github-mark.png";
import twitterLogoBlue from "data-base64:~assets/twitter-logo-blue.png";
import { useEffect, useState } from "react";

import "../main.css";

import Icon from "~components/images/icon";
import { useGetCurrentPage } from "~hooks/getCurrentPage";
import { useTranslatePage } from "~hooks/translatePage";

import SwitchButtons from "./switch-buttons";

function IndexPopup() {
  const [data, setData] = useState("");
  const url = useGetCurrentPage();
  console.log(url);
  const translatedUrl = useTranslatePage(url);
  console.log(translatedUrl);

  return (
    <>
      <div>
        <select className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
        {/* <input onChange={(e) => setData(e.target.value)} value={data} /> */}
        {/* <button onClick={hello}>言語切替</button> */}
        <SwitchButtons url={"sa"}></SwitchButtons>
        <div className="flex">
          <Icon url="https://github.com/achiyama/docsmate" src={githubMark} />
        </div>
        {/* {} */}
      </div>
    </>
  );
}

export default IndexPopup;
