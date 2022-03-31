import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import moment from "moment";

import { IconDownload, IconBulb, IconX } from "@tabler/icons";

import { useDebounce } from "../../utils/debounce";
import { generateTextStatistics } from "../../utils/generateTextStatistics";
import { exportAsImage } from "../../utils/exportAsImage";

export default function Home() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const debouncedText = useDebounce(text, 1000);
  const textRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const localText = localStorage.getItem("@Editor:Text");
    setText(localText);

    const localFont = localStorage.getItem("@Editor:FontSize");
    setFontSize(JSON.parse(localFont) || 16);
  }, []);

  useEffect(() => {
    if (text != null) localStorage.setItem("@Editor:Text", text);
  }, [debouncedText]);

  useEffect(() => {
    localStorage.setItem("@Editor:FontSize", fontSize);
  }, [fontSize]);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);

      const stats = generateTextStatistics(text);
      setStatistics(stats);
    }
  };

  return (
    <div>
      <Head>
        <title>Documento</title>
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#222222" />

        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="/styles/editor.css" />
      </Head>

      <div className="card" ref={textRef}>
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
          spellCheck={false}
        ></textarea>
      </div>

      <div className="navbar">
        <div className="item">
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

        <div className="item">
          <button onClick={toggleModal}>
            <IconBulb size={16} />
          </button>

          <button
            onClick={() =>
              exportAsImage(textRef.current, moment().format("DD-MM-YYYY"))
            }
          >
            <IconDownload size={16} />
          </button>
        </div>
      </div>

      <div
        className="modal"
        style={{
          transform: isModalOpen ? "translateY(0px)" : "translateY(30px)",
          visibility: isModalOpen ? "visible" : "hidden",
          opacity: isModalOpen ? 1 : 0,
        }}
      >
        <button onClick={toggleModal}>
          <IconX size={20} />
        </button>

        <h2>Estatísticas</h2>

        <p>
          <strong>Palavras:</strong> {statistics.totalWords}
        </p>
        <p>
          <strong>Parágrafos:</strong> {statistics.totalParagraphs}
        </p>

        <h3>Repetições</h3>

        <div className="repetitions">
          {statistics.repeatedWords?.map((word) => (
            <p>
              {word[0]} <span>{word[1]}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
