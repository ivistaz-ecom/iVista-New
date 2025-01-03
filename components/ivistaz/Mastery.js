"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

function Mastery() {
  const [isActive, setIsActive] = useState(false);
  const masteryRef = useRef(null);

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

    if (masteryRef.current) {
      observer.observe(masteryRef.current);
    }

    return () => {
      if (masteryRef.current) {
        observer.unobserve(masteryRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .custom-mastery-text {
            color: #808080 !important; /* Initial color */
            transition: color 1s ease-in-out;
          }
          .active-text_mastery {
            color: #000000 !important; /* Color when active */
          }
        `}
      </style>
      <Container className="w-80 mt-4 mb-5" ref={masteryRef} id="mastery">
        <Container className="p-0">
          <h1 className="fs-80 fw-bold ps-6">Mastery</h1>
        </Container>
        <Container className="p-0">
          <p
            className={`fw-bold custom-art-text custom-mastery-text ps-6 line_space ${
              isActive ? 'active-text_mastery' : ''
            }`}
          >
            As a performance-marketing agency, we've mastered the intricacies of digital marketing over the years, crafting winning strategies rooted in deep insights. Through ongoing learning and training, we have adeptly navigated the digital landscape. Our commitment is reflected in our meticulous approach to every step, guiding clients to their digital goals with precision and mastery.
          </p>
        </Container>
        <Container className="ps-6">
          <Link className="btn btn-11 z-0" href="/mastery">
            Know More
          </Link>
        </Container>
      </Container>
    </>
  );
}

export default Mastery;
