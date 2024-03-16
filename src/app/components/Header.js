import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
        <div className='container mx-auto p-8 pb-0 mb-4 text-center'>
            <Navigation />
            <hr />
        </div>
    </header>
  )
}

export default Header