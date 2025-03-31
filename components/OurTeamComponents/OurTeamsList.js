"use client";
import React, { useState, useEffect } from "react";
import ConfigData from "../../config";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";

const OurTeamsList = () => {
  const [clientServicingData, setClientServicingData] = useState([]);
  const [creativeLeadData, setCreativeLeadData] = useState([]);
  const [copyContentData, setCopyContentData] = useState([]);
  const [designData, setDesigntData] = useState([]);
  const [seoData, setSeoSemData] = useState([]);
  const [develomentData, setDevelopmentData] = useState([]);
  const [fianceData, setFianceData] = useState([]);
  const [strategyData, setStrategyData] = useState([]);
  const [ceoData, setceoData] = useState([]);

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchData = async (categoryId, setData) => {
      try {
        const response = await fetch(
          `${siteUrl}/our-teams?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const teamData = await response.json();
        // setData(teamData); // Update specific data state
        // setData(teamData.sort((a, b) => (a.title.rendered > b.title.rendered) ? 1 : -1)); // Sort in ascending order
        // setData(teamData.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at)));
        setData(teamData.sort((a, b) => a.id - b.id));
        console.log(teamData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(27, setClientServicingData);
    fetchData(28, setCreativeLeadData);
    fetchData(29, setCopyContentData);
    fetchData(30, setDesigntData);
    fetchData(31, setSeoSemData);
    fetchData(32, setDevelopmentData);
    fetchData(34, setFianceData);
    fetchData(33, setStrategyData);
    fetchData(35, setceoData);
  }, [siteUrl, serverUrl]); // Run useEffect only when URLs change

  return (
    <div>
      <style>
        {`  
                    .image-container {
                        position: relative;
                        width: 100%;
                        max-width: 400px;
                        margin: auto;
                        overflow: hidden;
                        border-radius: 10px;
                    }
            
                    .image-container img {
                        width: 100%;
                        border-radius: 10px;
                        transition: transform 0.3s ease-in-out;
                    }
            
                    .image-container .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        box-shadow: inset 0px 0px 30px 40px rgba(0, 0, 0, 0.7);
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        border-radius: 0px;
                        pointer-events: none;
                    }
            
                    .image-container:hover .overlay {
                        opacity: 1;
                    }
                    @media (max-width: 768px) {
                        .static-card{
                        height:550px;
                        }
                }
                        
                    `}
      </style>
      <Container fluid className="bg-black p-0 pb-5">
        <Container className="w-80 custom-container">
          <h1 className="text-white fs-70 fw-bold d-inline-block">
            {/* MEET THE TEAM */}
            Meet Our Team
          </h1>

          {/* CLIENT SERVICING */}
          <Col className="mt-5">
            {clientServicingData.length > 0 && (
              <>
                <h3 className="text-white mt-4">CLIENT SERVICING</h3>
                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {clientServicingData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* ADDITIONAL STATIC CARD FOR HIRING */}
                  <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-between gap-2 p-3 static-card">
                    <div className="d-flex flex-column p-3 mt-0 rounded-4 justify-content-center align-items-center h-100 text-white iv-bg">
                      <p className="fs-3 mb-0 text-center">
                        <a
                          className="text-white text-decoration-none"
                          target="_blank"
                          href="/careers"
                        >
                          Want to claim this spot? We’re hiring
                        </a>
                      </p>
                    </div>
                    <div className="opacity-0">.</div>
                  </div>
                </div>
              </>
            )}
          </Col>

          {/* CREATIVE LEAD */}
          <Col className="mt-5">
            {creativeLeadData.length > 0 && (
              <>
                <h3 className="text-white mt-4">CREATIVE LEAD</h3>
                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {creativeLeadData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>

          {/* COPY/CONTENT */}
          <Col className="mt-5">
            {copyContentData.length > 0 && (
              <>
                <h3 className="text-white mt-4">COPY/CONTENT</h3>

                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {copyContentData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>

          {/* DESIGN */}
          <Col className="mt-5">
            {copyContentData.length > 0 && (
              <>
                <h3 className="text-white mt-4">DESIGN</h3>

                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {designData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* ADDITIONAL STATIC CARD FOR HIRING */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-between gap-2 p-3 static-card">
                    <div className="d-flex flex-column p-3 mt-0 rounded-4 justify-content-center align-items-center h-100 text-white iv-bg">
                      <p className="fs-3 mb-0 text-center">
                        <a
                          className="text-white text-decoration-none"
                          target="_blank"
                          href="/careers"
                        >
                          Want to claim this spot? We’re hiring
                        </a>
                      </p>
                    </div> 
                    <div className="opacity-0">.</div>
                  </div> */}
                </div>
              </>
            )}
          </Col>

          {/* SEO & SEM */}
          <Col className="mt-5">
            {copyContentData.length > 0 && (
              <>
                <h3 className="text-white mt-4">SEO & SEM</h3>
                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {seoData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* ADDITIONAL STATIC CARD FOR HIRING */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-between gap-2 p-3 static-card">
                    <div className="d-flex flex-column p-3 mt-0 rounded-4 justify-content-center align-items-center h-100 text-white iv-bg">
                      <p className="fs-3 mb-0 text-center">
                        <a
                          className="text-white text-decoration-none"
                          target="_blank"
                          href="/careers"
                        >
                          Want to claim this spot? We’re hiring
                        </a>
                      </p>
                    </div>
                    <div className="opacity-0">.</div>
                  </div> */}
                </div>
              </>
            )}
          </Col>

          {/* WEB DEVELOPMENT */}
          <Col className="mt-5">
            {develomentData.length > 0 && (
              <>
                <h3 className="text-white mt-4">WEB DEVELOPMENT</h3>
                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {develomentData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>

          {/* FINANCE & ADMIN */}
          <Col className="mt-5">
            {fianceData.length > 0 && (
              <>
                <h3 className="text-white mt-4">HR, FINANCE & ADMIN</h3>

                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {fianceData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>

          {/* STRATEGY & PERFORMANCE */}
          <Col className="mt-5">
            {strategyData.length > 0 && (
              <>
                <h3 className="text-white mt-4">STRATEGY & PERFORMANCE</h3>

                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {strategyData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>

          {/* FOUNDER & CEO */}
          <Col className="mt-5">
            {ceoData.length > 0 && (
              <>
                <h3 className="text-white mt-4">FOUNDER & CEO</h3>

                <div className="d-flex flex-lg-row flex-column flex-wrap">
                  {ceoData.map((team) => (
                    <div
                      key={team.id}
                      className="col-lg-3 d-flex flex-column p-3 gap-2"
                    >
                      <div className="image-container">
                        <Image
                          src={team.acf.profile_image.url}
                          alt={team.title.rendered}
                          fluid
                          className="rounded-4 z-1"
                        />
                        <div className="overlay"></div>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 ">
                          {team.title.rendered}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col> 
        </Container>
      </Container>
    </div>
  );
};

export default OurTeamsList;
