import Link from 'next/link'
import React from 'react'

const BlogPost = ({ title, author, slug, className }) => {
  return (
    <div className={className}>
        <Link href={`/blog/${slug}`} className='text-lg text-teal-800 font-semibold mb-4'>{title}</Link>
        <p className='text-md'>{author}</p>
    </div>
  )
}

export default BlogPost