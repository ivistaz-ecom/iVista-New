"use client"
import React from 'react'
import HomeBanner from '../../../../components/mastery/HomeBanner';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { CiCircleChevRight } from "react-icons/ci";

function page() {
  return (

    <>
      <Header1 />
      <Container fluid className="bg-black pb-5">
        <div className='custom_height_top'></div>
        <Container className='w-80 custom-container bg-black position-relative z-3 mb-0'>
          {/* <h1 className="text-offwhite fs-70 fw-bold text-start ps-5 mb-0">MASTERY</h1> */}
          {/* Bread-crumb */}
          <div className='d-flex flex-row align-items-center pb-3 flex-nowrap'>
            <p>
              <Link href="/welcome"
                className='text-decoration-none '>
                <span className='fs-6 text-white mb-0 px-1'>Home</span>
              </Link>
              <span className='px-1'>
                <CiCircleChevRight fill='white' />
              </span>
              <Link href="/mastery"
                className='text-decoration-none '>
                <span className='fs-6 text-white mb-0 px-1'>Mastery</span>
              </Link>
              <span className='px-1'>
                <CiCircleChevRight fill='white' />
              </span>
              <Link href=""
                className='text-decoration-none px-1'>
                <span className='fs-6 text-decoration-none text-white mb-0'>Solutions</span>
              </Link></p>
          </div>
        </Container>
        <HomeBanner />
        {/*ADDING CUSTOM HEIGHT FOR DOT LINE  */}
        <div className='custom_height_bottom'></div>
      </Container>
      <Footer />
    </>
  )
}

export default page
