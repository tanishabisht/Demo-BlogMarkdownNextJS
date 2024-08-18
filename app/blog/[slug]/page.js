import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked'; 

async function fetchPostData(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const { frontmatter, content } = await fetchPostData(slug);

  return (
    <>
      <div className="card card-page">
        <h1 className="markdown-title">{frontmatter.title}</h1>
        <div className="markdown-date">Posted on {frontmatter.date}</div>
        <div className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}
