import React from 'react'

import Header from '../../HeaderBlack'
import Footer from '../../Footer'
import HomeBanner from './HomeBanner'
import SearchEngineOptimizationContent from './SearchEngineOptimizationContent'

const index = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <SearchEngineOptimizationContent />
            <Footer />
        </>
    )
}

export default index