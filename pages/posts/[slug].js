import PostLayout from '../../layouts/post'

import { getAllPosts, getPostBySlug } from '../../api'

export default function Post(props) {
  return (
    <PostLayout
      title={props.title}
      tags={props.tags}
      description={props.description}
      content={props.content}
      date={props.date}
      image={props.image}
    />
  );
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug);

  return { props: post }
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false }
}