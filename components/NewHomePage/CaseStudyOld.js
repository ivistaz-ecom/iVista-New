// import React from "react";
// import Slider from "react-slick";
// import { Card, Button, Image } from "react-bootstrap";
// import Link from "next/link";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { caseStudiesData } from "../../utils/CaseStudiesData";

// const CaseStudies = () => {
//   const displayedData = caseStudiesData.slice(0, 6); // Limit to 6 items

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     customPaging: (i) => (
//       <div
//         style={{
//           width: "12px",
//           height: "12px",
//           backgroundColor: i < 3 ? "#dc3545" : "transparent", // Show only 3 dots
//           borderRadius: "50%",
//           cursor: "pointer",
//         }}
//       ></div>
//     ),
//     appendDots: (dots) => (
//       <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center" }}>
//         {dots.slice(0, 3)} {/* Display only 3 dots */}
//       </ul>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <style>
//         {`
//           .slick-prev, .slick-next {
//             z-index: 1;
//           }
//           .card {
//             border: 2px solid #dc3545;
//             border-radius: 10px;
//             box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//           }
//           .card-title {
//             font-size: 1.5rem;
//             font-weight: 700;
//           }
//           .card-stats {
//             font-size: 2rem;
//             font-weight: 600;
//             color: #ED2224;
//           }
//           .card-text {
//             font-size: 0.9rem;
//             font-weight: 400;
//             color: #6c757d;
//           }
//           .learn-more {
//             font-weight: bold;
//             color: #dc3545;
//             text-decoration: none;
//           }
//         `}
//       </style>
//       <div className="bg-white" style={{ minHeight: "80vh" }}>
//         <div className="container py-5">
//           <h2 className="text-center text-danger fw-bold">CASE STUDIES</h2>
//           <h3 className="text-center fw-bold">PROVEN RESULTS, CLEAR IMPACT</h3>
//           <p className="text-center mb-5">
//             Explore how we’ve helped businesses achieve measurable success.
//           </p>
//           <Slider {...settings}>
//             {displayedData.map((card, index) => (
//               <div key={index}>
//                 <Card
//                   className="mx-auto d-flex flex-column h-100"
//                   style={{ maxWidth: "350px", minHeight: "340px" }}
//                 >
//                   <Card.Body className="d-flex flex-column justify-content-between">
//                     <div className="card-title d-flex justify-content-between align-items-center">
//                       <p className="card-stats mb-0">{card.stats}</p>
//                       <Image
//                         src={card.image}
//                         alt={card.title}
//                         className="ms-2"
//                         width={50}
//                         height={50}
//                       />
//                     </div>
//                     <Card.Title className="mt-3">{card.title}</Card.Title>
//                     <Card.Text>{card.description}</Card.Text>
//                     <Link href={card.link} variant="link" className="learn-more text-start">
//                       Learn More →
//                     </Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </Slider>
//           <div className="text-center mt-5">
//             <Button variant="outline-danger">Explore All Case Studies</Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaseStudies;
