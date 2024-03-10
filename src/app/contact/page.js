import React from 'react'
import Form from './Form'

const ContactPage = () => {
  return (
    <div className='container mx-auto p-8 pb-16'>
    <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Contact page</h1>
        <div className='max-w-2xl mx-auto'>
            <Form />
        </div>
    </section>
</div>
  )
}

export default ContactPage