// import React, { useState, useEffect } from 'react';
// import { Button, CloseButton, Col, Container } from 'react-bootstrap';
// import ConfigData from '../../config';
// import { FaArrowRight } from 'react-icons/fa';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const CaseStudiesFetchData = () => {
//     const [data, setData] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [visibleItems, setVisibleItems] = useState(4);

//     const pathname = usePathname()

//     const siteUrl = ConfigData.wpApiUrl;
//     const serverUrl = ConfigData.SERVER;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`${siteUrl}/posts?_embed&production_mode[]=${serverUrl}`);
//                 const data = await response.json();
//                 setData(data);
//                 // console.log(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [siteUrl, serverUrl]); // Include dependencies in useEffect dependency array

//     const handleLoadMore = () => {
//         setVisibleItems((prevCount) => prevCount + 3);
//     };

//     return (
//         <Container className="w-80 custom-container">
//             <h1 className="fs-21 fw-bold text-white">CASE STUDIES</h1>
//             <h3 className="text-white fw-semibold poppins">Performance, down to a science</h3>
//             <p className="para-text text-white">Dive into our collection of compelling case studies that showcase how our strategies and expertise have propelled businesses to achieve remarkable results in the digital realm.</p>
//             <Col>
//                 {data.slice(0, visibleItems).map((item) => (
//                     <Col className='list-group mb-2' key={item.id} style={{ borderBottom: '3px dotted white' }}>
//                         <Link href={`/case-studies/${item.slug}`} className="iv-link">
//                             <div className="list-group-item d-flex justify-content-between align-items-center">
//                                 <div className="ms-2 me-auto">
//                                     <p className="fw-bold fs-3 m-3 text-white" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
//                                     <p className="case-text m-3 text-white two-line-show" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
//                                 </div>
//                                 <div>
//                                     <FaArrowRight size={30} className="case-icon text-white" />
//                                 </div>
//                             </div>
//                         </Link>
//                     </Col>
//                 ))}
//             </Col>

//             <Col className='text-center'>
//                 {data.length > visibleItems && (
//                     // <Button className="bg-red-btn cursor-pointer" >Load More</Button>
//                     <button type="button" className="btn btn-15 my-5" onClick={handleLoadMore}>Load More</button>
//                 )}
//             </Col>

//             {/* {isOpen && (
//                 <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
//                     <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
//                     <div className='position-relative p-5 bg-white h-80vh w-50 rounded-3 overflow-auto z-index-100'>
//                         <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
//                             <div className='position-fixed'>
//                                 <CloseButton />
//                             </div>
//                         </div>
//                         <div className='text-black'>
//                             {selectedItem && (
//                                 <>
//                                     <h2 className='text-red'>{selectedItem.title.rendered}</h2>
//                                     <div className='case-text text-whitethree-line-show ' dangerouslySetInnerHTML={{ __html: selectedItem.content.rendered }} />
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )} */}



//         </Container>
//     );
// };

// export default CaseStudiesFetchData;
