import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useDebounce } from "../../utils/debounce";
import { generateTextStatistics } from "../../utils/generateTextStatistics";

export default function Home() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const response = localStorage.getItem("@Editor:Text");

    setText(response);
  }, []);

  useEffect(() => {
    if (text !== "") {
      localStorage.setItem("@Editor:Text", text);
    }
  }, [debouncedText]);

  const generateStatistics = () => {
    generateTextStatistics(text);
  };

  return (
    <div>
      <Head>
        <title>João Couto - Editor de Texto</title>
        <meta http-equiv="content-language" content="pt-br" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#222222" />

        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="/styles/editor.css" />
      </Head>

      <div className="navbar">
        <div className="item">
          <strong>Tamanho da fonte</strong>
          <div className="button-wrapper">
            <button
              onClick={() => setFontSize((prev) => prev - 1)}
              className="dot"
            >
              -
            </button>
            <span>{fontSize}</span>
            <button
              onClick={() => setFontSize((prev) => prev + 1)}
              className="dot"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <textarea
          id="lineCounter"
          defaultValue={`01\n02\n03\n04\n05\n06\n07\n08\n09\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30`}
          readOnly
        ></textarea>

        <textarea
          id="text"
          rows="30"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ fontSize: fontSize }}
        ></textarea>
      </div>
    </div>
  );
}
