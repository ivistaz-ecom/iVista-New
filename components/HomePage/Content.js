'use client'
import React, { useEffect, useState, useRef } from "react";
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'


const HomePage = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const secondSectionRef = useRef(null);
 

  useEffect(() => {
    const handleWheelScroll = (event) => {
      const deltaY = event.deltaY;

      if (deltaY > 0 && !showSecondSection) {
        // Scrolling down
        setShowSecondSection(true);
        setIsScrollLocked(true);
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const deltaY = touch.clientY - touch.startY;

      if (deltaY < 0 && !showSecondSection) {
        // Swiping up
        setShowSecondSection(true);
        setIsScrollLocked(true);
      }
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showSecondSection]);

  useEffect(() => {
    // Check if secondSectionRef is assigned a value
    if (secondSectionRef.current) {
      const handleScroll = () => {
        // Scroll to the second section
        secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
      };

      // Add event listener for scrolling down
      window.addEventListener("click", handleScroll);

      return () => {
        // Remove event listener when component unmounts
        window.removeEventListener("click", handleScroll);
      };
    }
  }, [secondSectionRef.current]);

  useEffect(() => {
    if (isScrollLocked) {
      const lockScroll = (event) => {
        event.preventDefault();
        event.stopPropagation();
      };
      window.addEventListener('wheel', lockScroll, { passive: false });
      window.addEventListener('touchmove', lockScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', lockScroll);
        window.removeEventListener('touchmove', lockScroll);
      };
    }
  }, [isScrollLocked]);

  return (
    <>
     

      <Container className={`iv-bg z-0 ${showSecondSection ? 'hide-first-section' : ''}`} fluid>
        <Row className="d-flex flex-column align-items-center justify-content-between min-vh-100" >
          <Col className="d-flex flex-column justify-content-center align-items-center z-index-100">
            <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" />
            {/*Homepage skip Button  */}
            <Link href="/welcome" className="demo rounded-3">Skip</Link>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
            <div className="animate seven text-white fs-70 fw-bold">
              <span>P</span><span>E</span><span>R</span><span>F</span>
              <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
            </div>
            <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center z-0">
            <div className='' onClick={() => setShowSecondSection(true)}>
            </div>
            <div className="scroll-down cursor-pointer" onClick={() => setShowSecondSection(true)}></div>
          </Col>
        </Row>
      </Container>

      <Container className="iv-bg min-vh-100 fixed-top-custom p-0 z-3" fluid style={{ display: showSecondSection ? 'block' : 'none' }} ref={secondSectionRef}>
        <Row className="d-flex flex-column align-items-center justify-content-between min-vh-100">
          <Col className="d-flex flex-column justify-content-center align-items-center p-0">
            {/* <Image src="/images/robot_1.svg" width={200} height={100} alt="" /> */}
            {/* <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" /> */}
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center p-0">
            <div className="d-lg-none d-flex mobile-home-padding" style={{ marginTop: '80px' }}></div>
            <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
            <div className="animate seven text-white fs-70 fw-bold">
              <span>P</span><span>E</span><span>R</span><span>F</span>
              <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
            </div>
            <h2 className="text-white fs-60 fw-bold">MEAN TO YOU?</h2>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center animated-content">
            <Row className="d-flex flex-lg-row flex-column align-items-center justofy-content-end g-3 custom-home-row" >
              <Col className="overflow-hidden blurb-ripple-out-wrap w-75 bg-danger" data-aos="fade-up">
                <Link href="/sales" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/online_sale.svg" alt="" width={30} height={30} />
                  <span>Online Sales</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap w-75">
                <Link href="/leads" className="btn h-btn blurb-ripple-out  d-flex flex-row gap-2 justify-content-center" >
                  <Image src="/mainpage/leads.svg" alt="" width={30} height={30} />
                  <span>Leads</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap w-75" >
                <Link href="/traffic" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/traffic.svg" alt="" width={30} height={30} />
                  <span>Traffic</span>
                </Link>
              </Col>
            </Row>

            <Row className="d-flex flex-lg-row flex-column align-items-center g-3 pt-3 custom-home-row">
              <Col className="overflow-hidden blurb-ripple-out-wrap w-75" >
                <Link href="/keyword-ranking" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/keyword.svg" alt="" width={30} height={30} />
                  <span>Keyword Ranking</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap w-75 d-flex flex-row gap-2 justify-content-center">
                <Link href="/engagement" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/engagement.svg" alt="" width={30} height={30} />
                  <span>Engagement</span>
                </Link>
              </Col>
            </Row>
            

          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .hide-first-section {
          display: none;
        }
      `}</style>
    </>
  )
}

export default HomePage




// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import { Container } from 'react-bootstrap'
// import Image from 'next/image'
// import { Row, Col } from 'react-bootstrap'
// import Link from 'next/link'

// const HomePage = () => {
//   const [showSecondSection, setShowSecondSection] = useState(false);
//   const secondSectionRef = useRef(null);

//   useEffect(() => {
//     const handleWheelScroll = (event) => {
//       const deltaY = event.deltaY;

//       if (deltaY > 0) {
//         // Scrolling down
//         setShowSecondSection(true);
//       } else {
//         // Scrolling up
//         setShowSecondSection(false);
//       }
//     };

//     window.addEventListener("wheel", handleWheelScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheelScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Check if secondSectionRef is assigned a value
//     if (secondSectionRef.current) {
//       const handleScroll = () => {
//         // Scroll to the second section
//         secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
//       };

//       // Add event listener for scrolling down
//       window.addEventListener("click", handleScroll);

//       return () => {
//         // Remove event listener when component unmounts
//         window.removeEventListener("click", handleScroll);
//       };
//     }
//   }, [secondSectionRef.current]);


//   return (
//     <>

//       <Container className="iv-bg z-0" fluid>
//         <Row className="d-flex flex-column align-items-center justify-content-between min-vh-100" >
//           <Col className="d-flex flex-column justify-content-center align-items-center z-index-100">
//             <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" />
//             {/*Homepage skip Button  */}
//             <Link href="/welcome" className="demo rounded-3">Skip</Link>
//           </Col>


//           <Col className="d-flex flex-column justify-content-center align-items-center">
//             <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//             <div className="animate seven text-white fs-70 fw-bold">
//               <span>P</span><span>E</span><span>R</span><span>F</span>
//               <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
//             </div>
//             <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
//           </Col>

//           <Col className="d-flex flex-column justify-content-center align-items-center  z-0">
//             {/* <div className='icon-scroll mb-1' onClick={handleScroll}> */}
//             <div className='' onClick={() => setShowSecondSection(true)}>
//             </div>
//             <div className="scroll-down cursor-pointer" onClick={() => setShowSecondSection(true)}></div>
//           </Col>
//         </Row>
//       </Container>

//       <Container className="iv-bg min-vh-100 fixed-top-custom p-0 z-3" fluid style={{ display: showSecondSection ? 'block' : 'none' }} ref={secondSectionRef}>
//         <Row className="d-flex flex-column align-items-center justify-content-between min-vh-100">
//           <Col className="d-flex flex-column justify-content-center align-items-center p-0">
//             <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//             <div className="animate seven text-white fs-70 fw-bold">
//               <span>P</span><span>E</span><span>R</span><span>F</span>
//               <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
//             </div>
//             <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
//           </Col>


//           <Col className="d-flex flex-column justify-content-center align-items-center animated-content">
//             <Row className="d-flex flex-lg-row flex-column align-items-center justofy-content-end g-3 custom-home-row" >
//               <Col className="overflow-hidden blurb-ripple-out-wrap w-75 bg-danger" data-aos="fade-up">
//                 <Link href="/sales" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                   <Image src="/mainpage/online_sale.svg" alt="" width={30} height={30} />
//                   <span>Online Sales</span>
//                 </Link>
//               </Col>
//               <Col className="overflow-hidden blurb-ripple-out-wrap w-75">
//                 <Link href="/leads" className="btn h-btn blurb-ripple-out  d-flex flex-row gap-2 justify-content-center" >
//                   <Image src="/mainpage/leads.svg" alt="" width={30} height={30} />
//                   <span>Leads</span>
//                 </Link>
//               </Col>
//               <Col className="overflow-hidden blurb-ripple-out-wrap w-75" >
//                 <Link href="/traffic" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                   <Image src="/mainpage/traffic.svg" alt="" width={30} height={30} />
//                   <span>Traffic</span>
//                 </Link>
//               </Col>
//             </Row>

//             <Row className="d-flex flex-lg-row flex-column align-items-center g-3 pt-3 custom-home-row">
//               <Col className="overflow-hidden blurb-ripple-out-wrap w-75" >
//                 <Link href="/keyword-ranking" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                   <Image src="/mainpage/keyword.svg" alt="" width={30} height={30} />
//                   <span>Keyword Ranking</span>
//                 </Link>
//               </Col>
//               <Col className="overflow-hidden blurb-ripple-out-wrap w-75 d-flex flex-row gap-2 justify-content-center">
//                 <Link href="/engagement" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                   <Image src="/mainpage/engagement.svg" alt="" width={30} height={30} />
//                   <span>Engagement</span>
//                 </Link>
//               </Col>
//             </Row>

//           </Col>
//         </Row>
//       </Container>

//     </>
//   )
// }

// export default HomePage



// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import { Container } from 'react-bootstrap'
// import Image from 'next/image'
// import { Row, Col } from 'react-bootstrap'
// import Link from 'next/link'
// import { FaChartLine, FaChartBar, FaUserPlus, FaRocketchat, FaUsers, FaRegHandPointer, FaDollarSign, FaRegCheckCircle, FaUserFriends } from "react-icons/fa";
// import gsap from 'gsap';

// const HomePage = () => {
//   const myDivRef = useRef(null);
//   const [menu, setMenu] = useState(false);
//   const [logo, setLogo] = useState(false);
//   const [hname, setHname] = useState('px');
//   const [hvalue, setHvalue] = useState('500');

//   function handleScroll() {
//     //console.log('clicked')
//     setLogo(true)
//     setMenu(true)
//     setHname('vh')
//     setHvalue('100')
//   }

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(myDivRef.current, {
//       y: '100%', // Initial position (bottom)
//       duration: 1, // Animation duration
//       ease: 'power3.inOut', // Easing function
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <>
//       <Container className="iv-bg  min-vh-100" fluid>
//         <Row className="d-flex flex-column align-items-center" style={{ height: hvalue + hname }}>
//           {
//             logo ?
//               (
//                 <Col className="d-flex flex-column justify-content-center align-items-center ">
//                   <Image src="/images/robot_1.svg" width={200} height={100} alt="" />
//                 </Col>
//               )
//               :
//               (
//                 <Col className="d-flex flex-column justify-content-center align-items-center">
//                   <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" />
//                 </Col>
//               )
//           }
//           {
//             menu ? (
//               <>
//                 <Col className="d-flex flex-column justify-content-center align-items-center">
//                   <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//                   <div className=" text-white fs-70 fw-bold">
//                     PERFORMANCE
//                   </div>
//                   <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
//                 </Col>

//                 <Col ref={myDivRef} className="d-flex flex-column justify-content-center align-items-center pt-5">
//                   <Row className="d-flex flex-lg-row flex-column align-items-center justofy-content-end g-3 custom-home-row">
//                     <Col className="overflow-hidden blurb-ripple-out-wrap w-100 bg-danger">
//                       <Link href="/sales" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/online_sale.svg" alt="" width={30} height={30} />
//                         <span>Online Sales</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap">
//                       <Link href="/leads" className="btn h-btn blurb-ripple-out  d-flex flex-row gap-2 justify-content-center" >
//                         <Image src="/mainpage/leads.svg" alt="" width={30} height={30} />
//                         <span>Leads</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap" >
//                       <Link href="/traffic" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/traffic.svg" alt="" width={30} height={30} />
//                         <span>Traffic</span>
//                       </Link>
//                     </Col>
//                   </Row>

//                   <Row className="d-flex flex-lg-row flex-column align-items-center g-3 pt-3 custom-home-row">
//                     <Col className="overflow-hidden blurb-ripple-out-wrap" >
//                       <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/keyword.svg" alt="" width={30} height={30} />
//                         <span>Keyword Ranking</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap d-flex flex-row gap-2 justify-content-center">
//                       <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/engagement.svg" alt="" width={30} height={30} />
//                         <span>Engagement</span>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Col>
//               </>
//             ) : (
//               <Col className="d-flex flex-column justify-content-center align-items-center">
//                 <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//                 <div className="animate seven text-white fs-70 fw-bold">
//                   <span>P</span><span>E</span><span>R</span><span>F</span>
//                   <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
//                 </div>
//                 <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>

//                 <div className='icon-scroll mb-1' onClick={handleScroll}>
//                 </div>
//                 <div className="scroll-down"></div>

//               </Col>
//             )
//           }
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default HomePage