"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Industries/Tech/HomeBanner'
import Header from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'

import TechComponents from '../../../../components/Industries/Tech'

function page() {
  return (
    // <Container fluid className="bg-black pb-5">
    //   <Header />
    //   <HeroBanner />
    //   <Footer />
    // </Container>


    <>
      <TechComponents />
    </>
  )
}

export default page
