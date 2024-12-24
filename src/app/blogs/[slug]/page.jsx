import React from 'react'
import Posts from './Posts'
import Header1 from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'
import { Container } from 'react-bootstrap'

const page = ({ params }) => {
    return (
        <>
            <>
                <Container fluid className='text-black p-0'>
                    <Header1 />
                    <Posts slug={params.slug} />
                    <Footer />
                </Container>
            </>
        </>
    )
}

export default page
