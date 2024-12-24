import React from 'react'
import Header1 from '../HeaderBlack'
import OurClientsContent from './OurClientsContent'
import OurClientsLogs from './OurClientsLogs'
import { Container } from 'react-bootstrap'
import Footer from '../Footer'

const index = () => {
    return (
        <>

            <Container fluid className='p-0 black-and-white'>
                <Header1 />
                <OurClientsContent />
                <OurClientsLogs />
            </Container>
            <Footer />

        </>
    )
}

export default index
