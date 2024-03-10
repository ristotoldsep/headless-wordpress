import React from 'react'
import BlogPost from './BlogPost'

const blogPosts = [
    {
        title: 'Lorem ipsum',
        author: 'John Doe',
        slug: 'post-1'
    },
    {
        title: 'Lorem Ipsum 2',
        author: 'Jane Doe',
        slug: 'post-2'
    }
]

const Blog = () => {
  return (
    <div className='container mx-auto p-8'>
        <section>
            <h1 className='text-4xl bold text-center font-bold mb-8'>Blog</h1>

            <div className='max-w-2xl mx-auto'>
                {blogPosts.map((post, index) => (
                    <BlogPost 
                        key={index}
                        title={post.title}
                        author={post.author}
                        slug={post.slug}
                        className="mb-4"
                    />
                ))}
            </div>
        </section>
    </div>
  )
}

export default Blog