import React from 'react'
import Card from '../components/Card'
import { reqUrl } from '@/config';

const Products = async () => {
    const req = await fetch(`${reqUrl}/products?acf_format=standard&_fields=id,title,acf,slug`);
    const products = await req.json();

    // console.log(products);

    return (
        <div className='container mx-auto p-8 pb-16'>
            <section>
                <h1 className='text-4xl bold text-center font-bold mb-8'>Products</h1>
                <div className='grid text-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {products.map(product => (
                        <Card 
                            key={product.id}
                            title={product.title.rendered}
                            thumbnail={product.acf.thumbnail}
                            subtitle={product.acf.category.name}
                            btnLabel="Learn more"
                            href={`/products/${product.slug}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Products