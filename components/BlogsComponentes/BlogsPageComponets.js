"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ConfigData from "../../config";

const BlogsPageComponents = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [data, setData] = useState([]); // Store all blogs
  const [visibleData, setVisibleData] = useState([]); // Store blogs that are currently visible
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Number of posts initially visible

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allData = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}&per_page=100&page=${page}`
          );

          if (response.ok) {
            const pageData = await response.json();
            if (pageData.length > 0) {
              allData = [...allData, ...pageData];
              page++;
            } else {
              hasMore = false;
            }
          } else {
            hasMore = false;
          }
        }

        setData(allData);
        setVisibleData(allData.slice(0, 6)); // Initially show 6 items
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl]);

  // Load more function
  const handleLoadMore = () => {
    const newVisibleCount = visibleCount + 6;
    setVisibleData(data.slice(0, newVisibleCount));
    setVisibleCount(newVisibleCount);
  };

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
            {loading ? (
              <div>Loading...</div>
            ) : visibleData.length > 0 ? (
              visibleData.map((post) => (
                <Col
                  lg={4}
                  className="d-flex flex-column p-3 gap-2"
                  key={post.id}
                >
                  <div className="iv-cards d-flex flex-column h-100">
                    <Image
                      loading="lazy"
                      src={post.acf?.thumbnail_image?.url}
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
                            <Link
                              href={`/blogs/${post.slug}`}
                              className="iv-link"
                            >
                              Read more{" "}
                              <FaArrowRight className="icons" size="25" />
                            </Link>
                          </div>
                          <div>
                            <p className="card-date mb-0">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
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
              <div>No blogs found.</div>
            )}
          </Row>

          {/* Load More Button */}
          {visibleCount < data.length && (
  <div className="text-center mt-4" style={{ display: "flex", justifyContent: "center" }}>
    <button type="button" className="btn btn-15 my-2" onClick={handleLoadMore}>Load More</button>
  </div>
)}


        </Container>
      </Container>
    </>
  );
};

export default BlogsPageComponents;
