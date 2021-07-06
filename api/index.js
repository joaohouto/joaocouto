import matter from 'gray-matter'
import marked from 'marked'

export async function getAllPosts() {
  const context = require.context('../_posts', false, /\.md$/)

  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);

    const { data } = matter(content.default)

    posts.push({
      slug: post.replace('.md', ''),
      title: data.title,
      date: data.date,
      image: data.image,
      description: data.description
    })
  }

  posts.reverse();

  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked(meta.content)

  const postTags = meta.data.tags.split(', ');

  return {
    title: meta.data.title,
    tags: postTags,
    date: meta.data.date,
    description: meta.data.description,
    image: meta.data.image,
    content: content
  }
}