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

//get post from database context.params.slug  
export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug);

  return { props: post }
}

//verify if post slug is valid
export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false }
}