import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Couto</title>
        <meta http-equiv="content-language" content="pt-br" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#222222" />

        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="/styles/editor.css" />
      </Head>

      <div className="card">
        <textarea id="text" rows="30">
          {" "}
        </textarea>
      </div>

      <div className="navbar">
        <div>
          <p>Versão</p>
          <code>BETA 1.0</code>
        </div>
      </div>
    </div>
  );
}
