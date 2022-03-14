import React from "react";
import Head from "next/head";

import {
  IconBrandLinkedin,
  IconBrandBehance,
  IconBrandGithub,
  IconMail,
  IconChevronRight,
} from "@tabler/icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Couto</title>
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a8bf3" />

        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="./styles.css" />

        <meta
          name="description"
          content="Graphic Designer // Full-Stack Developer. Entre em contato comigo → contato@joaocouto.com"
        />
        <meta name="author" content="João Couto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="João Couto - Links" />
        <meta
          property="og:description"
          content="Graphic Designer // Full-Stack Developer. Entre em contato comigo → contato@joaocouto.com"
        />
        <meta property="og:site_name" content="João Couto" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/31421876?v=4"
        />
      </Head>

      <div className="card">
        <div className="header">
          <img src="https://avatars.githubusercontent.com/u/31421876?v=4" />
          <h1>João Couto</h1>
          <p>contato@joaocouto.com</p>
        </div>

        <a href="mailto:contato@joaocouto.com" className="active">
          <div>
            <IconMail size={25} color="#222" stroke={2} /> Fale comigo
          </div>

          <IconChevronRight size={25} color="#999" stroke={2} />
        </a>

        <a href="https://linkedin.com/in/joaohouto">
          <div>
            <IconBrandLinkedin size={25} color="#222" stroke={2} /> LinkedIn
          </div>

          <IconChevronRight size={25} color="#999" stroke={2} />
        </a>

        <a href="https://behance.net/joaohouto">
          <div>
            <IconBrandBehance size={25} color="#222" stroke={2} />
            Behance <span>Graphic Design</span>
          </div>

          <IconChevronRight size={25} color="#999" stroke={2} />
        </a>

        <a href="https://github.com/joaohouto">
          <div>
            <IconBrandGithub size={25} color="#222" stroke={2} />
            GitHub <span>Full-Stack Dev</span>
          </div>

          <IconChevronRight size={25} color="#999" stroke={2} />
        </a>
      </div>
    </div>
  );
}
