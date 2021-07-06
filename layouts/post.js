import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Post = ({ title, tags, content, date, image, description }) => {

    return (
        <div>
            <Head>
                <title>{title} - João Couto</title>
                <meta http-equiv="content-language" content="pt-br" />
                <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#222222" />

                <link rel="icon" href="/icon.png" />
                <link rel="stylesheet" href="/styles.css" />

                <meta name="image" content={image} />
                <meta name="description" content={description} />
                <meta name="author" content="João Couto" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="João Couto" />
                <meta property="og:image" content={image} />
            </Head>

            <Header></Header>

            <main className="post-container">
                <header>
                    <div className="section">
                        <div id="title-container">

                            {tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}

                            <h2>{title}</h2>
                            <p>Em {date}</p>
                        </div>
                    </div>

                    <div className="section" id="image" style={{ background: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                </header>

                <div className="post-text" dangerouslySetInnerHTML={{ __html: content }}></div>

            </main>

            <Footer />
        </div>
    );
}

export default Post;