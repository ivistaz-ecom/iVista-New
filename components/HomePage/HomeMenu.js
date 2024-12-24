'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { FaChartLine, FaChartBar, FaUserPlus, FaRocketchat, FaUsers, FaRegHandPointer, FaDollarSign, FaRegCheckCircle, FaUserFriends } from "react-icons/fa";

function HomePage() {

    return (
        <>
            <Link href="/home" className="demo">Take Me to Homepage</Link>

            <Container className="iv-bg pt-5 h-100vh " fluid >
                <Row className="d-lg-flex flex-column align-items-center d-none" >
                    <Col className="d-flex flex-column justify-content-center align-items-center ">
                        <Image src="/images/robot_1.svg" width={200} height={100} alt='' />
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center pt-2 pb-5">
                        <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
                        <h1 className="text-white fs-70 fw-bold">PERFORMANCE</h1>
                        <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center pt-5">
                        <Row className="d-flex align-items-center justofy-content-end g-3">

                            <Col className="overflow-hidden blurb-ripple-out-wrap">
                                <Link href="/sales" className="btn h-btn blurb-ripple-out" >
                                    <FaChartLine size={30} /><span>Online Sales</span></Link>
                            </Col>
                            <Col className="overflow-hidden blurb-ripple-out-wrap">
                                <Link href="/leads" className="btn h-btn blurb-ripple-out" >
                                    <FaChartBar size={30} /> <span>Leads</span></Link>
                            </Col>
                            <Col className="overflow-hidden blurb-ripple-out-wrap" >
                                <Link href="/traffic" className="btn h-btn blurb-ripple-out">
                                    <FaUsers size={30} /> <span>Traffic</span></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default HomePage
