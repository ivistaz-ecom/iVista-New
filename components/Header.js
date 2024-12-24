'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

function Header() {
  return (
    <>
      <Container fluid className="iv-bg center h25vh">
        <Image src="/images/logo.png" width={200} height={50} alt='' />
      </Container>
    </>
  )
}

export default Header
