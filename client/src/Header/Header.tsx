import React from 'react'

import Navigation from "./Navigation/Navigation"


interface Header {}

const Header:React.FC<Header> = () => {
    return (
        <header className="row">
            <nav className='col-12'>
                <Navigation />
            </nav>
      </header>
    )
}

export default Header