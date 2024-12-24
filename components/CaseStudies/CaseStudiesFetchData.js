import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import { caseStudiesData } from "../../utils/CaseStudiesData";

const CaseStudiesFetchData = () => {
  return (
    <Container className="w-80 custom-container mb-5">
      {/* Bread-crumb */}
      <div className="d-flex flex-row align-items-center mb-3 flex-nowrap ">
        <p>
          <Link href="/welcome" className="text-decoration-none ">
            <span className="fs-6 text-white mb-0 px-1">Home</span>
          </Link>
          <span className="px-1">
            <CiCircleChevRight fill="white" />
          </span>
          <Link href="/performance" className="text-decoration-none ">
            <span className="fs-6 text-white mb-0 px-1">Performance</span>
          </Link>
          <span className="px-1">
            <CiCircleChevRight fill="white" />
          </span>
          <Link href="/case-studies" className="text-decoration-none px-1">
            <span className="fs-6 text-decoration-none text-white mb-0">
              Case Studies
            </span>
          </Link>
        </p>
      </div>

      <h1 className="fs-80 fw-bold text-white">CASE STUDIES</h1>
      <h3 className="fs-19 text-white fw-semibold poppins pt-lg-0 pt-3">
        Performance you'll love. Can we replicate it for you?
      </h3>
      
      <Row className="pt-lg-5">
        {caseStudiesData.map((study) => (
          <Col md={4} className="d-flex py-3" key={study.id}>
            <Link href={study.link} className="text-decoration-none">
              <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                  <div className="card-title d-flex justify-content-between align-items-center">
                    <div>
                      <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                        {study.stats}
                      </p>
                    </div>
                    <div>
                      <Image
                        src={study.image}
                        className="w-60 d-flex ms-auto"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-grow-1">
                    <div>
                      <p className="card-text text-dark fs-4 p-3 mb-5">
                        {study.title}
                      </p>
                      <p className="card-text text-dark fs-4 px-3">
                        {study.description}
                      </p>
                    </div>
                  </div>
                  <div className="py-5 pb-0">
                    <button type="button" className="btn btn-16 z-0 rounded-4">
                      {study.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
         {/* Dummy red card */}
         <Col md={4} className="d-flex py-3 p-0">
          <Link href="/contact-us" className="text-decoration-none">
            <div className="container d-flex flex-column">
              <div
                className="card iv-bg text-white rounded-5"
                style={{ height: "530px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center">
                  {/* <!-- Empty card body --> */}
                  <br />
                  <p className="card-text text-white text-center fs-3 p-3">
                    If you want this to be your digital success story, contact
                    us here
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </Link>
        </Col>

        <style jsx>{`
          @media (max-width: 768px) {
            .card {
              height: auto;
            }
          }
        `}</style>
      
      </Row>
      
       
    </Container>
  );
};






export default CaseStudiesFetchData;
