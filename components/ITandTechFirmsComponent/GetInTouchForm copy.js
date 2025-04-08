'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import ConfigData from '../../config';

const ContactForm = () => {
    const siteUrl = ConfigData.apiDomainUrl;
    const [yourFirstName, setYourFirstName] = useState('');
    const [yourLastName, setYourLastName] = useState('');
    const [yourEmail, setYourEmail] = useState('');
    const [yourPhone, setYourPhone] = useState('');
    const [yourCompany, setYourCompany] = useState('');
    const [yourJobTitle, setYourJobTitle] = useState('');
    const [whatWouldYouLike, setWhatWouldYouLike] = useState('');
    const [yourChallenges, setYourChallenges] = useState([]);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const nameRegex = /^[a-zA-Z\s]*$/;
    const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com', 'gmail.co', 'gmail.c', 'gmail.'];

    const isNotAllowedDomain = (email) => {
        const [, domain] = email.split('@');
        return notAllowedDomains.includes(domain);
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'yourFirstName':
            case 'yourLastName':
                if (!nameRegex.test(value)) {
                    setErrors(prev => ({ ...prev, [name]: 'Invalid character in name' }));
                } else {
                    setErrors(prev => ({ ...prev, [name]: null }));
                }
                name === 'yourFirstName' ? setYourFirstName(value) : setYourLastName(value);
                break;
            case 'yourEmail':
                setYourEmail(value);
                if (!emailRegex.test(value)) {
                    setErrors(prev => ({ ...prev, [name]: 'Enter a valid email address' }));
                } else if (isNotAllowedDomain(value)) {
                    setErrors(prev => ({ ...prev, [name]: 'This email domain is not allowed' }));
                } else {
                    setErrors(prev => ({ ...prev, [name]: null }));
                }
                break;
            case 'yourPhone':
                const cleaned = value.replace(/[^0-9]/g, '');
                setYourPhone(cleaned);
                if (!phoneRegex.test(cleaned)) {
                    setErrors(prev => ({ ...prev, [name]: 'Enter a valid 10-digit phone number' }));
                } else {
                    setErrors(prev => ({ ...prev, [name]: null }));
                }
                break;
            case 'yourCompany':
                setYourCompany(value);
                break;
            case 'yourJobTitle':
                setYourJobTitle(value);
                break;
            default:
                break;
        }
    };

    const handleCheckboxChange = (e, state, setState, isSingle = false) => {
        const { value, checked } = e.target;
        if (isSingle) {
            setState(checked ? value : ''); // Only one selection allowed
        } else {
            if (checked) {
                setState([...state, value]);
            } else {
                setState(state.filter(item => item !== value));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = { ...errors };
        if (whatWouldYouLike === '') {
            newErrors.whatWouldYouLike = 'Please select one option';
        } else {
            newErrors.whatWouldYouLike = null;
        }

        if (yourChallenges.length === 0) {
            newErrors.yourChallenges = 'Please select at least one challenge';
        } else {
            newErrors.yourChallenges = null;
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== null)) return;

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('yourFirstName', yourFirstName);
            formData.append('yourLastName', yourLastName);
            formData.append('yourEmail', yourEmail);
            formData.append('yourPhone', yourPhone);
            formData.append('yourCompany', yourCompany);
            formData.append('yourJobTitle', yourJobTitle);
            formData.append('whatWouldYouLike', whatWouldYouLike);
            formData.append('yourChallenges', yourChallenges.join(', '));

            const response = await axios.post(
                `${siteUrl}wp-json/contact-form-7/v1/contact-forms/851/feedback`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.data.status === 'mail_sent') {
                setPost(response.data.message);
                resetForm();
                setSubmitted(true);
            } else if (response.data.status === 'validation_failed') {
                const fieldErrors = {};
                response.data.invalid_fields.forEach(field => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setYourFirstName('');
        setYourLastName('');
        setYourEmail('');
        setYourPhone('');
        setYourCompany('');
        setYourJobTitle('');
        setWhatWouldYouLike('');
        setYourChallenges([]);
    };

    return (
        <div className='bg-white'>
            <Container className="py-5 form-container bg-white">

                <style jsx>{`
                .form-container {
                    background: #fff;
                    border-radius: 20px;
                    padding: 40px;
                    border: 1px solid #f36a6a;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                }
                .form-title {
                    font-size: 48px;
                    font-weight: 800;
                    text-align: center;
                    color: #FF0000 ;
                    margin-bottom: 10px;
                }
                .form-subtitle {
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 30px;
                }
                .form-control {
                    border-radius: 10px;
                    height: 50px;
                }
                .border-red {
                    border-color: #FF0000 !important;
                }
                
                /* Make checkboxes and radio buttons red */
                input[type="radio"]:checked + label::before,
                input[type="checkbox"]:checked + label::before {
                    border-color: #FF0000;
                    background-color: #FF0000;
                }

                /* For Bootstrap-styled checkboxes/radios */
                .form-check-input:checked {
                    background-color: #FF0000;
                    border-color: #FF0000;
                }

                .form-check-input:focus {
                    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
                    border-color: #FF0000;
                }

                  @media (max-width: 768px) {
                  .form-title {
                      font-size: 2rem;
                  }
                }
            `}</style>

                {!submitted ? (
                    <Form onSubmit={handleSubmit}>
                        <div className="border rounded rounded-5 p-md-5 p-4 shadow mb-5 border border-red">
                            <h2 className="form-title">READY TO SCALE YOUR GROWTH?</h2>
                            <p className="form-subtitle">
                                Let’s drive predictable revenue and sustainable growth with AI-powered marketing.
                                <br />
                                Get in touch today and start seeing results within weeks.
                            </p>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Control type="text" name="yourFirstName" placeholder="First Name" value={yourFirstName} onChange={handleTextChange} isInvalid={!!errors.yourFirstName} required />
                                    <Form.Control.Feedback type="invalid">{errors.yourFirstName}</Form.Control.Feedback>
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="text" name="yourLastName" placeholder="Last Name" value={yourLastName} onChange={handleTextChange} isInvalid={!!errors.yourLastName} required />
                                    <Form.Control.Feedback type="invalid">{errors.yourLastName}</Form.Control.Feedback>
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="text" name="yourJobTitle" placeholder="Job Title" value={yourJobTitle} onChange={handleTextChange} required />
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="text" name="yourCompany" placeholder="Company" value={yourCompany} onChange={handleTextChange} required />
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="email" name="yourEmail" placeholder="Official Email ID" value={yourEmail} onChange={handleTextChange} isInvalid={!!errors.yourEmail} required />
                                    <Form.Control.Feedback type="invalid">{errors.yourEmail}</Form.Control.Feedback>
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="text" name="yourPhone" placeholder="Phone Number" value={yourPhone} maxLength="10" onChange={handleTextChange} isInvalid={!!errors.yourPhone} required />
                                    <Form.Control.Feedback type="invalid">{errors.yourPhone}</Form.Control.Feedback>
                                </Col>
                            </Row>
                        </div>

                        <div className="border rounded-5 p-md-5 p-4  mt-4 shadow mb-5">
                            <h4 className="form-title text-center fw-bold mb-4">WHAT WOULD YOU LIKE?</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Check
                                        type="radio"
                                        label={<><strong>A complimentary audit of your website -</strong> Analyze your site’s performance, UX, and SEO with our expert insights & recommendations</>}
                                        value="Website Audit"
                                        checked={whatWouldYouLike === 'Website Audit'}
                                        onChange={(e) => handleCheckboxChange(e, whatWouldYouLike, setWhatWouldYouLike, true)}
                                    />
                                </Col>
                                <Col md={6} className='pt-3'>
                                    <Form.Check
                                        type="radio"
                                        label={<><strong>A complimentary thought leadership piece -</strong> tailored to your industry</>}
                                        value="Thought Leadership Piece"
                                        checked={whatWouldYouLike === 'Thought Leadership Piece'}
                                        onChange={(e) => handleCheckboxChange(e, whatWouldYouLike, setWhatWouldYouLike, true)}
                                    />
                                </Col>
                            </Row>
                            {errors.whatWouldYouLike && <div className="text-danger mt-3">{errors.whatWouldYouLike}</div>}
                        </div>

                        <div className="border rounded-5 p-md-5 p-4  mt-4 shadow ">
                            <h4 className="form-title text-center fw-bold mb-2">WHAT IS YOUR CHALLENGE</h4>
                            <p className="text-muted text-center mb-4">(Select All That Apply)</p>
                            <Row>
                                <Col md={6}>
                                    <Form.Check label="Generating consistent pipeline" value="Generating consistent pipeline" onChange={(e) => handleCheckboxChange(e, yourChallenges, setYourChallenges)} />
                                    <Form.Check label="Low conversion rate" value="Low conversion rate" onChange={(e) => handleCheckboxChange(e, yourChallenges, setYourChallenges)} />
                                </Col>
                                <Col md={6}>
                                    <Form.Check label="Lack of thought leadership" value="Lack of thought leadership" onChange={(e) => handleCheckboxChange(e, yourChallenges, setYourChallenges)} />
                                    <Form.Check label="Low brand awareness" value="Low brand awareness" onChange={(e) => handleCheckboxChange(e, yourChallenges, setYourChallenges)} />
                                </Col>
                            </Row>
                            {errors.yourChallenges && <div className="text-danger mt-3">{errors.yourChallenges}</div>}
                        </div>

                        <div className="mt-4 d-flex justify-content-center">
                            <Button className="btn-15 z-3 border border-danger p-1" type="submit" disabled={loading}>Submit</Button>
                        </div>
                    </Form>
                ) : (
                    <div className="text-center">
                        <Alert variant="success">
                            {post ? post : 'Your form has been submitted successfully!'}
                        </Alert>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default ContactForm;
