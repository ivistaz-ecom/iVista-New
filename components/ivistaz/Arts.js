"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from '../SharedComponents/ScrollAnimation';

function Art() {
  const [isActive, setIsActive] = useState(false);
  const artRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (artRef.current) {
      observer.observe(artRef.current);
    }

    return () => {
      if (artRef.current) {
        observer.unobserve(artRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* <ScrollAnimation /> */}
      <Container className="bg-black ps-lg-4" fluid>
        <Container className="w-80 py-5 mb-5 ps-6" ref={artRef} id="art">
          <Container className='p-0'>
            <h1 className="fs-80 fw-bold text-white">Art</h1>
          </Container>
          <Container className='p-0'>
            <p className={`fw-bold custom-art-text line_space  ${isActive ? 'active-text_art' : ''}`} style={{color: '#808080'}}>
              We’ve been crafting and creating art that captivates and resonates with our clients and their audiences. As the digital world continues to evolve, we have kept pace, adapting our digital branding strategy and other strategies to the ever-changing landscape. With personalized solutions and a commitment to meet clients’ expectations, we delivered what was expected of us. Our point of differentiation was the performance-focused model, which earned us a reputation for excellence making us a trusted choice for over 300 brands.
            </p>

          </Container>
          <Container className='p-0'>
            <Link className="btn btn-12 z-0 custom-performance-text ps-6" href="/art">Know More</Link>
          </Container>
        </Container>
      </Container>
    </>
  );

}

export default Art;
