import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ScrollAnimationIOthers from "../SharedComponents/ScrollAnimationIOthers";

function HeroBanner() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

   
  return (
    <>
      {/* <ScrollAnimationIOthers /> */}
      <Container className="bg-white banner w-80 pb-5 mb-4 z-3 p-0">
        <Row className="d-flex align-items-start p-0 custom_height">
          <article>
            <div className="timeline2">
              <Col lg={12} className="mt-5 position-relative">
                <div className="timeline-badge2 mt-lg-3"></div>
                <div className="md-px-5 px-4">
                  <h1 className="fs-19 fw-bold red">About Us</h1>
                  <p className="para-text pe-lg-2 pe-3">
                    We started young. We knew that the digital age was dawning
                    at a time when marketing was mostly mainline/offline and
                    kept a sharp eye on the digital landscape, which was
                    accelerating at an unprecedented pace. Starting with organic
                    search and social, and then moving on to paid search and
                    social marketing, we quickly learned what businesses needed
                    to thrive. And in response, we created a strong bouquet of
                    end-to-end digital services, including web development and
                    UX/UI. Today, backed by years of mastery in the digital and
                    e-commerce space, iVistaz is helping to make the online
                    channel a viable source for improved awareness, engagement,
                    leads and revenues for businesses in the B2B and B2C
                    sectors.
                  </p>
                </div>
              </Col>
              <Row className="ps-3 pe-3">
                <Col md={4} className="d-flex py-2">
                  <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column shadow">
                    <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                      <div
                        className="card-title d-flex justify-content-between align-items-start"
                        style={{ minHeight: "100px" }}
                      >
                        <p className="fs-4 mb-0 red para-text fw-bold ps-3">
                          Planning Winning Strategies Backed by Deep Insights
                        </p>
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <p className="para-text text-dark fs-5 p-3 mb-0">
                          As a digital marketing agency, we have witnessed the
                          shifts in the digital landscape for more than a
                          quarter of a century now. In this process, we have
                          gained deep insights and experience in designing
                          effective digital marketing strategies that deliver
                          results for our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="d-flex py-2">
                  <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column shadow">
                    <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                      <div
                        className="card-title d-flex justify-content-between align-items-start"
                        style={{ minHeight: "100px" }}
                      >
                        <p className="fs-4 mb-0 red para-text fw-bold ps-3">
                          Focusing on Learning and Training
                        </p>
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <p className="para-text text-dark fs-5 p-3 mb-0">
                          Over the years, we have realized that learning and
                          training are key to understanding and navigating the
                          complex intricacies of digital marketing. Beyond
                          requisite certifications, we focus on continuous
                          upskilling and training sessions for our teams across
                          departments.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="d-flex py-2">
                  <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column shadow">
                    <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                      <div
                        className="card-title d-flex justify-content-between align-items-start"
                        style={{ minHeight: "100px" }}
                      >
                        <p className="fs-4 mb-0 red para-text fw-bold ps-3">
                          In Constant Pursuit of Measurable Outcomes
                        </p>
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <p className="para-text text-dark fs-5 p-3 mb-0">
                          At iVistaz, we focus on measurable outcomes for our
                          clients. Our meticulous approach involves crafting
                          each step and backing our strategies with rigorous
                          data analysis to ensure that we deliver the outcomes
                          that propel you towards your goals.
                          {showMore && (
                            <span style={{ fontWeight: "300" }}>
                              {" "}
                              We prioritize transparency and accountability,
                              providing detailed weekly, monthly, and quarterly
                              reports to evaluate the effectiveness of our
                              campaigns and guide continuous improvement. What
                              our clients love about us is that we work on a
                              performance-focused model for outcome-based
                              campaigns. This means we get paid only when we
                              deliver results.
                            </span>
                          )}
                        </p>
                        <Button
                          variant="link"
                          className="text-start text-decoration-none text-danger"
                          onClick={handleReadMore}
                        >
                          {showMore ? "Read Less" : "Read More"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </article>
        </Row>
      </Container>
    </>
  );
}

export default HeroBanner;

{
  /*             <Col lg={12} className="mt-5 position-relative">
                <div className='timeline-badge2 mt-lg-2'></div>
                <div className='ps-6'>
                  <h1 className="fs-2 fw-semibold red">Planning Winning Strategies Backed by Deep Insights</h1>
                  <p className="para-text pe-lg-2 pe-3">As a digital marketing agency, we have witnessed the shifts in the digital landscape for more than a quarter of a century now. In this process, we have gained deep insights and experience in designing effective digital marketing strategies that deliver results for our clients.</p>
                </div>
              </Col>
              <Col lg={12} className="mt-5 position-relative">
                <div className='timeline-badge2 mt-lg-2'></div>
                <div className='ps-6'>
                  <h1 className="fs-2 fw-semibold red">Focus on Learning and Training</h1>
                  <p className="para-text pe-lg-2 pe-3">
                    Over the years, we have realized that learning and training are key to understanding and navigating the complex intricacies of digital marketing. Beyond the requisite certifications, we focus on continuous upskilling and training sessions for our teams across departments.
                  </p>
                </div>

              </Col>
              <Col lg={12} className="mt-5 position-relative custom_height_about">
                <div className='timeline-badge2 mt-lg-2'></div>
                <div className='ps-6 '>
                  <h1 className="fs-2 fw-semibold red">In Constant Pursuit of Measurable Outcomes</h1>
                  <p className="para-text pe-lg-2 pe-3">
                    At iVistaz, we focus on measurable outcomes for our clients. Our meticulous approach involves crafting each step and backing our strategies with rigorous data analysis to ensure that we deliver the outcomes that propel you towards your goals. We prioritize transparency and accountability, providing detailed weekly, monthly, and quarterly reports to evaluate the effectiveness of our campaigns and guide continuous improvement. What our clients love about us is that we work on a performance-focused model for outcome-based campaigns, which means we get paid only we when deliver on results.
                  </p>
                </div>
              </Col> */
}
