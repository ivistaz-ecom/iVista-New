'use client'
import React, { useEffect, useState } from 'react'
import { Container, Col, Image, CloseButton } from 'react-bootstrap'

import ConfigData from '../../config'
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { usePathname } from 'next/navigation'

const CaseStudiesCategoriesComponents = ({ categoryId }) => {

    const [data, setData] = useState(null);
    const pathname = usePathname();

    // alert(pathname);

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?categories=${categoryId}&per_page=3&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [siteUrl, serverUrl, categoryId]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
    };

    const [isMobile, setIsMobile] = useState();

    const ivCards = {
        background: isMobile ? 'white' : 'orange',
    }

    return (
        <>
            <Container className=' position-relative'>
                <Col className='d-flex flex-lg-row flex-column justify-content-center gap-3'>
                    {data ? ( // Check if data is available
                        data.map((items) => (
                            <div className='iv-cards-categories col-lg-4 d-flex flex-column justify-content-between text-start z-3' key={items.id}>
                                <Image
                                    src={items.acf.thumbnail_image.url}
                                    alt={items.title.rendered}
                                    className='w-100 img-fluid'
                                    width={200}
                                />
                                <div className="card-body d-flex flex-column justify-content-between mb-0">
                                    <div>
                                        <div className="card-title" dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                                        {/* <p className="card-text three-line-show mt-2" dangerouslySetInnerHTML={{ __html: items.excerpt.rendered }} /> */}
                                    </div>
                                    <div className='mt-3'>
                                        <div className="iv-link-1 cursor-pointer d-inline-block" onClick={() => handleShowModal(items)}>
                                            Read more
                                            <FaArrowRight className="icons ms-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-white'>
                            <div className="spinner-border text-danger" role="status">
                            </div>
                            <span className="text-white">Loading...</span>
                        </div>
                        // Render loading message while data is being fetched
                    )}
                </Col>
                <Col>
                    {isOpen && (
                        <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75 mx-lg-0 mx-2'>
                            <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
                            <div className='position-relative bg-white h-80vh rounded-3 overflow-auto z-index-100 pop-box'>
                                <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                                    <div className='position-fixed'>
                                        <CloseButton />
                                    </div>
                                </div>
                                <div className='text-black'>
                                    {selectedItem && (
                                        <>
                                            <div className='d-flex flex-column justify-content-between p-0'>
                                                <div>
                                                    <h2 className='text-red' dangerouslySetInnerHTML={{ __html: selectedItem.title.rendered }} />
                                                    {/* {selectedItem.title.rendered}</h2> */}
                                                    <div className='case-text text-start' dangerouslySetInnerHTML={{ __html: selectedItem.content.rendered }} />
                                                </div>
                                                <div>
                                                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                                                        <Link className="btn-14 z-0" href="/contact-us">Contact Us</Link>
                                                    </Col>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Col>
            </Container>

            <Container className="mt-5 d-flex justify-content-center">
                {!isOpen && (
                    <>
                        {
                            (
                                pathname === '/leads' ||
                                pathname === '/sales' ||
                                pathname === '/traffic' ||
                                pathname === '/keyword-ranking' ||
                                pathname === '/engagement'
                            )
                            && (
                                <Link href="/welcome" className="btn-13">Enter website</Link>
                            )
                        }
                        {
                            (
                                pathname === '/industries/appliances' ||
                                pathname === '/industries/automobiles' ||
                                pathname === '/industries/beauty-wellness' ||
                                pathname === '/industries/fashion-accessories' ||
                                pathname === '/industries/hospitality' ||
                                pathname === '/industries/jewellery' ||
                                pathname === '/industries/ngos' ||
                                pathname === '/industries/technology-IT'
                            )
                            && (
                                <Link href="/case-studies" className="btn-18 z-0">View All Case Studies</Link>
                            )
                        }
                    </>
                )}
            </Container>
        </>
    )
}

export default CaseStudiesCategoriesComponents


// {router.pathname === '/leads' ||
// router.pathname === '/about-us' ||
// router.pathname === '/sales' ||
// router.pathname === '/traffic' ? (
//    <div className="mt-5 d-flex justify-content-center">
//        <Link href="/ivistaz">
//            <a>Enter website</a>
//        </Link>
//    </div>
// ) : null}

// {router.pathname === '/industries/automobiles' ||
// router.pathname === '/industries/appliances' ? (
//    <div className="mt-5 d-flex justify-content-center">

//    </div>
// ) : null}



{/* <Col className='d-flex flex-lg-row flex-column justify-content-center gap-3'>
{data ? ( // Check if data is available
    data.map((items) => (
        <div className='iv-cards col-lg-4 d-flex flex-column justify-content-between text-start' key={items.id} style={ivCards}>
            <Image
                src={items.acf.thumbnail_image.url}
                alt={items.title.rendered}
                className='w-100 img-fluid'
                width={200}
            />
            <div className="card-body d-flex flex-column justify-content-between mb-0">
                <div>
                    <div className="card-title" dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                    <p className="card-text three-line-show" dangerouslySetInnerHTML={{ __html: items.excerpt.rendered }} />
                </div>
                <div className='mt-3'>
                    <div className="iv-link cursor-pointer d-inline-block" onClick={() => handleShowModal(items)}>
                        Read more
                        <FaArrowRight className="icons" />
                    </div>
                </div>
            </div>
        </div>
    ))
) : (
    <div className='text-white'>
        <div className="spinner-border text-danger" role="status">
        </div>
        <span className=" text-white">Loading...</span>
    </div>
)}
</Col>
<Col>
{isOpen && (
    <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
        <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
        <div className='position-relative p-5 bg-white h-80vh w-50 rounded-3 overflow-auto z-index-100'>
            <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                <div className='position-fixed'>
                    <CloseButton />
                </div>
            </div>
            <div className='text-black'>
                {selectedItem && (
                    <>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2 className='text-red'>{selectedItem.title.rendered}</h2>
                                <div className='case-text text-start' dangerouslySetInnerHTML={{ __html: selectedItem.content.rendered }} />
                            </div>
                            <div>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                </Col>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
)}
</Col> */}
