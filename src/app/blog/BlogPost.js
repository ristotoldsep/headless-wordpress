import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BlogPost = ({ title, slug, className, imageUrl }) => {
  return (
    <div className={className}>
        <Link href={`/blog/${slug}`}>
          <Image 
                className='block mx-auto mb-4 h-56 object-cover'
                width="600"
                height="400"
                src={imageUrl}
                alt='card thumbnail image'
            />
        </Link>
        <Link href={`/blog/${slug}`} className='text-lg text-teal-800 font-semibold mb-4'>{title}</Link>
    </div>
  )
}

export default BlogPost