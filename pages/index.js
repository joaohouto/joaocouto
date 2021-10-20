import React from 'react'
import { Instagram, Linkedin, Mail, GitHub } from 'react-feather'
import Link from 'next/link'
import Head from 'next/head'

import { getAllPosts } from '../api'

import Footer from '../components/footer'
import Item from '../components/item'

export default function Home({ posts }) {

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
        <link rel="stylesheet" href="/styles.css" />

        <meta name="description" content="Olá! Seja bem vindo ao meu portfólio." />
        <meta name="author" content="João Couto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="João Couto" />
        <meta property="og:description" content="Olá! Seja bem vindo ao meu portfólio." />
        <meta property="og:site_name" content="João Couto" />
        <meta property="og:image" content="/img/background.png" />
      </Head>

      <content className="home-container" style={{ background: `url('/img/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="profile-card">
          <img src="https://avatars0.githubusercontent.com/u/31421876?s=460&u=39d86b3e443bf15e4a1d5a554c0426ae80dc9486&v=4" alt="João Couto" />
          <h1>João Couto</h1>
          <small>Web/Graphic Design</small>

          <div className="row">
            <a href="mailto:joaocouto.jar@gmail.com"><Mail size={20} color="#333" /></a>
            <a href="https://www.github.com/joaohouto/"><GitHub size={20} color="#333" /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-couto-4a16a51ab/"><Linkedin size={20} color="#333" /></a>
          </div>

        </div>

{/*         <div className="description-card">

        </div> */}
      </content>

      <main className="home-container">

        <h4 className="label">Portfólio</h4>

        {posts.map((post, index) => (
          <Link key={index} href={'/posts/' + post.slug}>
            <a>
              <Item
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
              />
            </a>
          </Link>
        ))}

      </main>

      <Footer />

    </div>
  );

}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts }
  }
}