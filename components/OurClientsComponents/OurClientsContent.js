import React from 'react'
import { Col, Container } from 'react-bootstrap'

const OurClientsContent = () => {
    return (
        <>
            <Container className='w-80 bg-black custom-container position-relative z-3'>
                <Col>
                    <h1 className="text-white fs-70 fw-bold text-start ">LEADING BRANDS, <br />TRUSTED CLIENTS</h1>
                    <p className="para-text text-white">
                        iVistaz is proud to collaborate with a diverse array of leading brands, offering bespoke digital marketing solutions that cater to their unique needs. Our commitment to excellence has earned us the trust of these esteemed clients. Discover the brands that have chosen iVistaz for their digital transformation.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default OurClientsContent
