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
                <Navbar />
                <Header />
            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}
