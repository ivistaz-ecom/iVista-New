"use client"
import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Header1({ setChatVisible }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShow(true);
    // setChatVisible(false); 
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setChatVisible(true);  // Show the chat script when the menu is closed
    }, 200); // Delay to prevent immediate closing
  };

  return (
    <>
      <style>
        {`
          .dropdown-menu.show {
            border: 0pc !important;
            position: absolute;
            inset: auto auto 0px 0px; 
            min-height: 50vh !important;
          }

          .offcanvas-body {
            display: flex !important;
            flex-direction: column !important;
            flex-wrap: wrap !important;
            justify-content: space-between !important;
          }

          @media (max-width:767px){
            .dropdown-menu.show {
              min-height: auto !important;
            }
          }
        `}
      </style>

      <Container className="p-0 position-fixed z-index-100 bg-black m-0" fluid>
        <Container className='w-80'>
          <nav className="navbar bg-color z-index-100">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/welcome">
                <Image src="/images/ivista_logo.svg" width={200} height={40} className="img-fluid z-index-100" alt='' />
              </Link>
              <Button
                onMouseEnter={handleMouseEnter}

                className={(
                  pathname === '/art' ||
                  pathname === '/art/services' ||
                  pathname === '/art/services/digital-marketing' ||
                  pathname === '/art/services/content-development-design' ||
                  pathname === '/art/services/design-development'
                )
                  ? "btn btn-outline-black"
                  : (pathname === '/service/website-design-and-development' ||
                    pathname === '/service/search-engine-optimization' ||
                    pathname === '/service/search-engine-marketing' ||
                    pathname === '/service/organic-social-media' ||
                    pathname === '/service/social-media-marketing' ||
                    pathname === '/service/content-development-b2b-b2c' ||
                    pathname === '/service/design' ||
                    pathname === '/service/videos' ||
                    pathname === '/our-clients'
                  )
                    ? "btn btn-outline-custom"
                    : "btn btn-outline"
                }
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <FaBars size={27} />
              </Button>
            </div>
          </nav>
        </Container>

        <Offcanvas show={show} placement="end" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Offcanvas.Header closeButton onClick={handleMouseLeave}>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row className='d-flex flex-column justify-content-between h-100 z-index-100'>
              <Col>
                <Container className="text-center">
                  <Link className="navbar-brand d-flex justify-content-center" href="/welcome">
                    <Image src="/images/ivista_logo.svg" width="200" height={100} alt='' className='d-lg-none d-flex text-center' />
                  </Link>
                </Container>
                <ul className="navbar-nav text-center flex-grow-1 pe-2">
                  <NavDropdown title="Services" id="navbarScrollingDropdown" className='border-0'>
                    <NavDropdown.Item href="/art/services" className='nav-overview'>
                      Overview
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/content-development-b2b-b2c" className='nav-dropdown p-2'>
                      Content Development (B2B & B2C)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/design" className='nav-dropdown p-2'>
                      Design
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/search-engine-marketing" className='nav-dropdown p-2'>
                      Search Engine Marketing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/search-engine-optimization" className='nav-dropdown p-2 '>
                      Search Engine Optimization
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/social-media-marketing" className='nav-dropdown p-2'>
                      Social Media Marketing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/organic-social-media" className='nav-dropdown p-2'>
                      Social Media - Organic
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/service/website-design-and-development" className='nav-dropdown p-2'>
                      Web Design & Development
                    </NavDropdown.Item>


                  </NavDropdown>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " href="/mastery/solutions">Solutions</Link>
                  </li>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
                  <NavDropdown title="Industries" id="navbarScrollingDropdown" className='border-0'>
                    <NavDropdown.Item href="/performance/industries" className='nav-overview'>
                      Overview
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/industries/appliances" className='nav-dropdown p-2'>Appliances</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/automobiles" className='nav-dropdown p-2'>Automobiles</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/beauty-wellness" className='nav-dropdown p-2'>Beauty & Wellness</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/fashion-accessories" className='nav-dropdown p-2'>Fashion & Accessories</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/hospitality" className='nav-dropdown p-2'>Hospitality</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/jewellery" className='nav-dropdown p-2'>Jewelry</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/ngos" className='nav-dropdown p-2'>Not-for-Profits/NGOs</NavDropdown.Item>
                    <NavDropdown.Item href="/industries/technology-IT" className='nav-dropdown p-2'>Tech/IT</NavDropdown.Item>
                  </NavDropdown>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/case-studies">Case Studies</Link>
                  </li>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/blogs">Blogs</Link>
                  </li>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
                  <NavDropdown title="Company" id="navbarScrollingDropdown" className='custom-nav-company'>
                    <NavDropdown.Item href="/our-team" className='nav-dropdown px-2'>Team</NavDropdown.Item>
                    <NavDropdown.Item href="/our-clients" className='nav-dropdown px-2'>Clients</NavDropdown.Item>
                    <NavDropdown.Item href="/mastery/about-us" className='nav-dropdown px-2'>About Us</NavDropdown.Item>
                    <NavDropdown.Item href="/careers" className='nav-dropdown px-2'>Careers</NavDropdown.Item>
                    <NavDropdown.Item href="/mastery-art-performance" className='nav-dropdown px-2'>M.A.P</NavDropdown.Item>
                  </NavDropdown>
                  <li className="divider-center">
                    <hr className="m-divider" />
                  </li>
               
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Offcanvas.Body>

          <Col className='d-flex flex-column justify-content-end z-index-100 pb-3'>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <div>
                Follow Us:
              </div>
              <div className="d-flex align-items-center justify-content-start gap-1">
                <Link href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/" target='_blank'>
                  <Image src="/images/linkedin.svg" width={43} height={43} className="social" alt='LinkedIn' />
                </Link>
                <Link href="https://www.instagram.com/ivistawebsolutions/" target='_blank'>
                  <Image src="/images/instagram.svg" width={44} height={44} className="social" alt='Instagram' />
                </Link>
                <Link href="https://www.facebook.com/ivistasolutions/" target='_blank'>
                  <Image src="/images/Face-book.svg" width={40} height={40} className="social" alt='Facebook' />
                </Link>
                <Link href="https://twitter.com/ivistasolutions?lang=en" target='_blank'>
                  <Image src="/images/twitter.svg" width={44} height={44} className="social" alt='Twitter' />
                </Link>
              </div>
            </div>
          </Col>
        </Offcanvas>
      </Container>
      {/* test */}
    </>
  );
}

export default Header1;
