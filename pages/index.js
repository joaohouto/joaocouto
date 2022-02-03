import React from "react";
import Head from "next/head";

import {
  IconBrandLinkedin,
  IconBrandBehance,
  IconBrandGithub,
  IconInfoSquare,
  IconChevronRight,
} from "@tabler/icons";

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
        <link rel="stylesheet" href="/styles/links.css" />

        <meta
          name="description"
          content="Graphic Designer / Full-Stack Developer. Entre em contato comigo → contato@joaocouto.com"
        />
        <meta name="author" content="João Couto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="João Couto - Links" />
        <meta
          property="og:description"
          content="Graphic Designer / Full-Stack Developer. Entre em contato comigo → contato@joaocouto.com"
        />
        <meta property="og:site_name" content="João Couto" />
        <meta property="og:image" content="icon.png" />
      </Head>

      <div className="card">
        <div className="header">
          <img src="https://github.com/joaohouto.png" />
          <h1>João Couto</h1>
          <p>contato@joaocouto.com</p>
        </div>

        <a href="https://linkedin.com/in/joaohouto">
          <div>
            <IconBrandLinkedin size={25} color="#222" /> LinkedIn
          </div>

          <IconChevronRight size={25} color="#999" />
        </a>

        <a href="https://behance.net/joaohouto">
          <div>
            <IconBrandBehance size={25} color="#222" />
            Behance <span>Portfólio</span>
          </div>

          <IconChevronRight size={25} color="#999" />
        </a>

        <a href="https://github.com/joaohouto">
          <div>
            <IconBrandGithub size={25} color="#222" />
            GitHub <span>Portfólio</span>
          </div>

          <IconChevronRight size={25} color="#999" />
        </a>

        <a href="/docs/freelancing.pdf">
          <div>
            <IconInfoSquare size={25} color="#222" /> Valores - Freelancing
          </div>

          <IconChevronRight size={25} color="#999" />
        </a>
      </div>
    </div>
  );
}
