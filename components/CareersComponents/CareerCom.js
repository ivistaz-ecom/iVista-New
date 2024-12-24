import React, { useState, useEffect } from 'react'
import { CloseButton, Col, Container, Row } from 'react-bootstrap'
import ConfigData from '../../config';
import CareerForms from '../Forms/CareerForms';

const CareerCom = () => {

    const options = [
        { value: 'seo_&_social_media_executive', label: 'SEO & Social Media Executive' },
        // { value: 'account_manager', label: 'Account Manager' },
        { value: 'inside_sales_executive', label: 'Inside Sales Executive' },
        { value: 'account_executive', label: 'Account Executive' },
        { value: 'ui_ux_designer', label: 'UI/Graphic Designer' },
        // { value: 'account_manager', label: 'Account Manager/Client Servicing' },
        // { value: 'content_writer', label: 'Content Writer' },
        // { value: 'front_end_developer', label: 'Front-End Developer' },
        // { value: 'back_end_developer', label: 'Back-End Developer' },
        // { value: 'paid_marketing_specialist', label: 'Paid Marketing Specialist' },
        // { value: 'seo', label: 'SEO' }
    ];

    const categoryId = 25;

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [visibleItems, setVisibleItems] = useState(4);

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/careers?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, serverUrl]); // Include dependencies in useEffect dependency array

    const handleLoadMore = () => {
        setVisibleItems((prevCount) => prevCount + 3);
    };

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
    };


  const handleSuccess = () => {
    handleCloseModal(); // Close the modal when the form is successfully submitted
  };

  const handleFormSuccess = () => {
    setShowModal(true);
  };

    return (
        <>
               <style>
        {`
        input[type="file"] {
            color: white;
        }
      `}
      </style>
            <Container className="w-80 custom-container bg-white text-black mb-5">
                <Row className='d-flex flex-column'>
                    <Col className='mb-4 text-black'>
                        <h1 className="fs-21 text-black fw-bold">CAREERS</h1>
                        <p className="text-black para-text">
                            We are a vibrant digital marketing agency with a team that brings diverse perspectives and creative energy to our projects. At iVistaz, we take pride in our collaborative and supportive environment where work and learning go hand-in-hand. Our projects range from web development, paid marketing, social media campaigns and email marketing, offering you the chance to build on your experience and develop a broad skill set. Located in the heart of the city, our office is easily accessible and surrounded by a vibrant mix of offices, shopping streets, restaurants, and parks. Check out our current openings and take the next step in your career with iVistaz.
                        </p>
                    </Col>

                    <Col>
                        <h2 className="fs-1 text-black fw-bold">CURRENT OPENINGS</h2>
                    </Col>
                </Row>

                <Col className='z-3'>
                    {data ? (
                        data.length > 0 ? ( // Check if data is available and not empty
                            data.slice(0, visibleItems).map((item) => (
                                <>
                                    <Row className='border-0 custom-career d-flex flex-lg-row flex-column mt-3 shadow-sm m-2' key={item.id}>
                                        <Col className='list-group-1 border-0' lg={12}>
                                            <div className="d-flex justify-content-between align-items-center border-0">
                                                <div className="ms-2 me-auto">
                                                    <p className="fw-bold fs-3 m-3 text-black" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                                    <p className="case-text m-3 text-black two-line-show" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                                </div>
                                                {/* <div>
                                                    <FaArrowRight size={30} className="case-icon text-white" onClick={() => handleShowModal(item)} />
                                                </div> */}
                                            </div>
                                        </Col>
                                        <Col lg={12} className='d-flex flex-column justify-content-start align-items-start p-3'>
                                            <button type="button" className="btn btn-16 z-0 ms-5 py-2 " onClick={() => handleShowModal(item)}>Apply</button>
                                        </Col>
                                    </Row>
                                </>
                            ))
                        ) : (
                            <div className='text-black'>
                                <span>Loading...</span>
                            </div>
                        )
                    ) : (
                        <div className='text-white'>
                            <div className="spinner-border text-danger" role="status"></div>
                            <span className="text-black">Currently No Openings</span>
                        </div>
                    )}
                </Col>

                <Col className='text-center'>
                    {data.length > visibleItems && (
                        // <Button className="bg-red-btn cursor-pointer" >Load More</Button>
                        <button type="button" className="btn btn-15 my-5" onClick={handleLoadMore}>Load More</button>
                    )}
                </Col>
                <Row>
                    <Col lg={6}>

                    </Col>

                    <Col>
                        {isOpen && (
                            <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
                                <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal} ></span>
                                <div className='position-relative p-lg-5 p-4 py-lg-5 py-5 bg-white h-80vh rounded-3 overflow-auto z-index-100 col-lg-6'>
                                    <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                                        <div className='position-fixed'>
                                            <CloseButton style={{zIndex:9999}}/>
                                        </div>
                                    </div>
                                    <div className='text-black'>
                                        {selectedItem && (
                                            <>
                                                <CareerForms onSuccess={handleFormSuccess} />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>

                <p className="para-text text-black mt-5">
                    For enquiries about any positions not listed, please email <a href="mailto:careers@ivistaz.com " target='_blank' className='text-red'>  careers@ivistaz.com </a>
                </p>

            </Container>
        </>
    )
}

export default CareerCom