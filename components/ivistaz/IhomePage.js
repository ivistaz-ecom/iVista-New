// "use client"
// import React, { useState, useEffect, useRef } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import Image from 'next/image'
// import Header from '../HeaderBlack'
// import CountUp from 'react-countup';
// import MasteryArtsPerfomancePage from './MasteryArtsPerfomancePage'
// import SeoComponents from '../SeoComponents/Seo'
// import { usePathname } from 'next/navigation'

// function IhomePage() {

//   const pathname = usePathname();
//   const [domainName, setDomainName] = useState('');

//   useEffect(() => {
//     setDomainName(window.location.hostname);
//   }, []);

//   const title = " Crafting Digital Excellence: Mastery, Art, and Performance in Digital Marketing";
//   const description = "Explore the expertise of iVistaz, a digital marketing agency mastering the intricacies of performance marketing, crafting captivating digital art, and delivering unforgettable digital journeys with precision and excellence.";
//   const path = `${domainName}${pathname}`;
//   const metaImage = "";

//   const [isYearOfPerformance, setIsYearOfPerformance] = useState(1996);
//   const [perfomance, setPerformance] = useState(0);
//   const [isMainSectionVisible, setIsMainSectionVisible] = useState(true);
//   const [isNextSectionVisible, setIsNextSectionVisible] = useState(false);

//   const useMaseteryRef = useRef();

//   function handleScrollToResults() {
//     setIsMainSectionVisible(false); // Hide the main section
//     setIsNextSectionVisible(true); // Show the next section
//     if (useMaseteryRef.current) {
//       useMaseteryRef.current.scrollIntoView({ behavior: "smooth" }); // Check if ref is defined before using it
//     }
//   }

//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const performance = year - isYearOfPerformance;
//     setPerformance(performance);
//   }, [isYearOfPerformance]);

//   return (
//     <>

//       <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

//       <Header />
//       {isMainSectionVisible && (
//         <Container className="bg-black h-100vh d-flex flex-column justify-content-center" fluid>
//           <Row className="d-flex flex-column justify-content-center align-items-center">
//             <Col className="d-flex flex-column justify-content-center align-items-center">
//               <h2 className="text-white fs-80 fw-bold">
//                 <CountUp end={perfomance}
//                   prefix=""
//                   className="years"
//                   suffix=" YEARS"
//                 /></h2>
//               <h2 className="text-white fs-80 fw-bold">OF PERFORMANCE</h2>
//               <h2 className="text-white fs-80 fw-bold">BACKED BY</h2>
//               <h2 className="text-white fs-80 fw-bold">MASTERY AND ART</h2>
//               {/* <div className='icon-scroll' onClick={handleScrollToResults}></div>
//             <div className="scroll-down"></div> */}

//               <Col className="d-flex flex-column justify-content-center align-items-center pb-4">
//                 {/* <div className='icon-scroll mb-1' onClick={handleScroll}> */}
//                 <div className='' onClick={handleScrollToResults}>
//                 </div>
//                 <div className="scroll-down cursor-pointer" onClick={handleScrollToResults}></div>
//               </Col>
//             </Col>
//           </Row>
//         </Container>
//       )}
//       {isNextSectionVisible &&
//         // <MasteryArtsPerfomancePage />
//         <div ref={useMaseteryRef}>
//           <MasteryArtsPerfomancePage />
//         </div>
//       }
//     </>
//   )
// }

// export default IhomePage

