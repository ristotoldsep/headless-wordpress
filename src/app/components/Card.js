import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Card = ({ title, subtitle, thumbnail, btnLabel, href }) => {

  console.log(thumbnail);

  return (
    <div>
        <Link href={href}>
            <Image 
                className='block mx-auto mb-4 h-56 object-cover'
                width="600"
                height="400"
                src={thumbnail}
                alt='card thumbnail image'
            />
        </Link>
        <div className='font-semibold text-center text-xl mb-1'>
            {title}
        </div>
        <div className='text-md text-center mb-4'>{subtitle}</div>
        <Button href={href}>{btnLabel}</Button>
    </div>
  )
}

export default Card