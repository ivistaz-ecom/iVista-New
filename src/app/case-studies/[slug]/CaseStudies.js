'use client'
import React, { useEffect, useState } from 'react'

import ConfigData from '../../../../config'
import { Container } from 'react-bootstrap';

const CaseStudies = () => {

    const [data, setData] = useState(null);
    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [siteUrl, serverUrl]);
    return (
        <>
        
            <Container fluid className="w-80 custom-container">
                {data ? ( // Check if data is available
                    data.map((post) => (
                        <div className=" d-flex flex-column min-vh-100" key={post.id}>
                            {/* <Image
                                src={post.acf.desktop_banner_image.url}
                                alt={post.title.rendered}
                                className='w-100 img-fluid rounded-5'
                            /> */}

                            <Container className='py-5'>
                                <div className="card-body text-white d-flex flex-column justify-content-between">

                                    <h5 className="card-title fs-22 pb-3">
                                        {post.title.rendered}
                                    </h5>
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div className='text-white'>Loading...</div> // Render loading message while data is being fetched
                )}
            </Container>
        </>
    )
}

export default CaseStudies
