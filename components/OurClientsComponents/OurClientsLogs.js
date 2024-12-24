'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getClientLogos } from '../JsonComponents/OurClientsLogo';

const OurClientsLogs = () => {
    const [clientLogos, setClientLogos] = useState([]);

    useEffect(() => {
        const logos = getClientLogos();
        setClientLogos(logos);
    }, []);

    return (
        <>
            <Container fluid className=''>
                <Container className='w-80 bg-white rounded-3 p-3 pb-5'>
                    {clientLogos.length > 0 && (
                        <Row>
                            {clientLogos.map((logo, index) => (
                                <Col key={index} xs={6} md={3} lg={2} className='d-flex justify-content-center m-lg-3 m-0 rounded-3'>
                                    <Image
                                        src={logo}
                                        alt={`Client logo ${index}`}
                                        className='img-fluid'
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </Container>
        </>
    );
};

export default OurClientsLogs;
