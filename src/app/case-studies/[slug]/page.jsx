import React from 'react'
import { Container } from 'react-bootstrap'
import Header1 from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'

import Posts from './Posts'
import CaseStudies from './CaseStudies'

const page = ({ params }) => {
    return (
        <div>

            <Container fluid className='bg-black p-0'>
                <Header1 />
                <Posts slug={params.slug} />
                <Footer />
            </Container>

        </div>
    )
}

export default page
