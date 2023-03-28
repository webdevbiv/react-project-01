import React from 'react'

import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    What
} from './containers'

import {
    CTA,
    Brand,
    Navbar
} from './components'

export const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <div className='main__container'>
                    <Navbar />
                    <Header />
                </div>
            </div>
            <div className='main__container'>
                <Brand />
                <What />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
            </div>
            <Footer />

        </div>
    )
}
