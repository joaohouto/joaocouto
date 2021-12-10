import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { getAllPosts } from '../api'

import Header from '../components/header'
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

      <Header />

      <div className="wrapper">
        <main className="home-container">

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
    </div>
  );

}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts }
  }
}