'use client'
import React, { useEffect, useState } from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import Link from 'next/link';
import ConfigData from '../../../../config'
import { Container } from 'react-bootstrap';

const Posts = ({ slug }) => {
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
                <div className='text-white'>Loading...</div>
            )}
            <Container fluid className="w-80 custom-container">
                {data ? (
                    data.map((post) => (
                        <div className="d-flex flex-column" key={post.id}>
                            <Container className='pb-5'>
                                {/* Bread-crumb */}
                                <div className='d-flex align-items-center mb-3 flex-nowrap'>
                                    <p className="mb-0">
                                        <Link href="/case-studies" className='text-decoration-none text-white'>
                                            Case Studies
                                        </Link>
                                        <span className='px-2'>
                                            <CiCircleChevRight fill='white' />
                                        </span>
                                        <Link href="" className='text-decoration-none text-white' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </p>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-white fs-22 pb-3"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <p className="card-text text-white para-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div className='text-white'>Loading...</div>
                )}
            </Container>
        </>
    )
}

export default Posts;


