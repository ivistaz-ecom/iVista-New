'use client'
import React, { useState, useEffect } from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import Link from 'next/link';
import ConfigData from '../../../../config'
import { Container, Image } from 'react-bootstrap';

const Posts = ({ slug }) => {
    const siteUrl = ConfigData.wpApiUrl;
    const [data, setData] = useState(null); // Initialize data state with null initially
    const [loading, setLoading] = useState(true); // Track loading state
    const serverUrl = ConfigData.SERVER;
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/blogs?_embed&slug=${slug}`);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [siteUrl, serverUrl, slug]);

    return (
        <>
         {data ? (
                data.map((post) => (
                    <React.Fragment key={post.id}>
                        <title>{post.acf.meta_title}</title>
                        <meta name="description" content={post.acf.meta_description_} />
                        <meta name="robots" content="index,follow"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
                    </React.Fragment>
                ))
            ) : (
                <div className='text-black'>Loading...</div>
            )}
            <Container fluid className="w-80 custom-container">
                {data ? ( 
                    data.map((post) => (
                        <div className="d-flex flex-column" key={post.id}>

                            {/* Bread-crumb*/}
                            <div className='d-flex flex-row align-items-center mb-3 flex-nowrap'>
                                <p>
                                    <Link href="/blogs" className='text-decoration-none '>
                                        <span className='fs-6 text-black mb-0 px-1'>Blogs</span>
                                    </Link>
                                    <span className='px-1'>
                                        <CiCircleChevRight fill='black' />
                                    </span>
                                    <Link href="" className='text-decoration-none px-1'>
                                        <span className='fs-6 text-decoration-none text-black mb-0 text-black' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </Link>
                                </p>
                            </div>
                            <Image
                                loading="lazy"
                                src={post.acf.desktop_banner_image.url}
                                alt={post.title.rendered}
                                className='w-100 img-fluid rounded-5'
                            />

                            <Container className='py-5'>
                                <div className="card-body text-black d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-black fs-22 pb-3"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <p className="card-text para-text text-black" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div className='text-black'>Loading...</div> // Handle case where no data is found
                )}
            </Container>
        </>
    );
}

export default Posts;
