"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Header1 from "../HeaderBlack";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

import ConfigData from "../../config";

const BlogsPageComponets = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [data, setData] = useState(null); // Initialize data state with null initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl]); // Include dependencies in useEffect dependency array

  return (
    <>
      <Container className="bg-white pb-5 custom-container" fluid>
        <Container className="w-80">
          <h1 className="fs-21 fw-bold">BLOGS</h1>
          <p className="fw-bold fs-3">
            Stay Informed with Our Latest Insights on Digital Marketing
          </p>
          <p className="para-text">
            Explore our blog page to gain valuable insights, industry trends,
            and expert advice on digital marketing, helping you stay ahead of
            the curve and make informed decisions for your business.
          </p>
        </Container>

        <Container className="w-80">
          <Row className="d-flex flex-lg-row flex-column">
            {data ? ( // Check if data is available
              data.map((post) => (
                <Col
                  lg={4}
                  className="d-flex flex-column p-3 gap-2"
                  key={post.id}
                >
                  <div className="iv-cards d-flex flex-column h-100">
                    <Image
                      loading="lazy"
                      src={post.acf.thumbnail_image.url}
                      alt={post.title.rendered}
                      className="w-100"
                      height={220}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{post.title.rendered}</h5>

                      <div className="d-flex flex-column">
                        <div>
                          {/* <p className="card-text three-line-show" dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
                        </div>

                        <div className="mt-3 d-flex justify-content-between align-items-center">
                          <div>
                            <Link href={`/blogs/${post.slug}`} className="iv-link">
                              Read more{" "}
                              <FaArrowRight className="icons" size="25" />
                            </Link>
                          </div>
                          <div>
                            <p className="card-date mb-0">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                // day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <div className="">Loading...</div> // Render loading message while data is being fetched
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default BlogsPageComponets;
