import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useDebounce } from "../../utils/debounce";

export default function Home() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  useEffect(() => {
    const response = localStorage.getItem("@Editor:Text");

    setText(response);
  }, []);

  useEffect(() => {
    localStorage.setItem("@Editor:Text", text);
  }, [debouncedText]);

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

      <div className="card">
        <textarea
          id="text"
          rows="30"
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
          {" "}
        </textarea>
      </div>

      <div className="navbar">
        <div>
          <p>Salvamento automático</p>
          <code>Ativo</code>
        </div>
      </div>
    </div>
  );
}
