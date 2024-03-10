import React from 'react'
import { reqUrl } from '@/config'

const Page = async ({ params }) => {

  // console.log(params);

  const req = await fetch(`${reqUrl}/pages?_fields=id,slug,title,content&acf_format=standard&slug=${params.slug}`);
  const pages = await req.json();
  const page = pages[0];

  // console.log(page);

  if (!page) {
    return (
      <div className='container mx-auto p-8 pb-16'>
      <section className='text-center'>
          <h1 className='text-4xl bold text-center font-bold mb-8'>Error</h1>
          <p>The page you were looking for was not found...</p>
      </section>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-8 pb-16'>
        <section>
            <h1 className='text-4xl bold text-center font-bold mb-8'>{page.title.rendered}</h1>
            <div className='prose prose-slate mx-auto max-w-3xl' dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </section>
    </div>
  )
}

export default Page