import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked'; 
import Link from 'next/link';

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
      <Link href="/" legacyBehavior>
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-date">Posted on {frontmatter.date}</div>
        <img src={frontmatter.cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}
