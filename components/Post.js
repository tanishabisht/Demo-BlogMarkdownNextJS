import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img className='card-img' src={post.frontmatter.cover_image} alt='' />

      <div className='card-content'>
        <div className='card-date'>Posted on {post.frontmatter.date}</div>
        <h3 className='card-title'>{post.frontmatter.title}</h3>
        <p className='card-excerpt'>{post.frontmatter.excerpt}</p>
      </div>

      <Link href={`/blog/${post.slug}`} legacyBehavior>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
