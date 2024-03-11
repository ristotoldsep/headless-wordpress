import Image from 'next/image'
import { reqUrl } from '@/config';

const SingleProduct = async ({ params }) => {
    // console.log('product-slug: ', params.slug);

    const req = await fetch(`${reqUrl}/products?acf_format=standard&_fields=id,title,acf,slug&slug=${params.slug}`);
    const products = await req.json();
    const product = products[0];
    
    return (
        <div className='container mx-auto p-8 pb-16'>
            <section>
                <h1 className='text-4xl bold text-center font-bold mb-8'>{product.title.rendered}</h1>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <Image 
                            width="960"
                            height="540"
                            src={product.acf.large_image}
                            alt='product image'
                        />
                    </div>
                    <div>
                        <div className='text-md font-semibold mb-1'>Category</div>
                        <div className='text-lg mb-8'>{product.acf.category.name}</div>
                        <div className='text-md font-semibold mb-1'>Summary</div>
                        <div className='text-lg mb-8'>{product.acf.summary}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const req = await fetch(`${reqUrl}/products?_fields=slug`);
    const products = await req.json();

    return products.map((product) => ({
        slug: product.slug,
    }))
}

export default SingleProduct