import React from 'react'
import BlogPost from './BlogPost'
import { reqUrl } from '@/config'

// const blogPosts = [
//     {
//         title: 'Lorem ipsum',
//         author: 'John Doe',
//         slug: 'post-1'
//     },
//     {
//         title: 'Lorem Ipsum 2',
//         author: 'Jane Doe',
//         slug: 'post-2'
//     }
// ]

const Blog = async () => {
    const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title,_links&_embed`);
    const blogPosts = await req.json();

    // console.log(blogPosts);

    const imageUrl = blogPosts[0]._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url;

    return (
        <div className='container mx-auto p-8'>
            <section>
                <h1 className='text-4xl bold text-center font-bold mb-8'>Blog</h1>

                <div className='grid text-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {blogPosts.map((post) => (
                        <BlogPost 
                            key={post.id}
                            title={post.title.rendered}
                            imageUrl={imageUrl}
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