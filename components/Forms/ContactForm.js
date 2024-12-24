'use client'
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import ConfigData from '../../config';

const ContactForm = () => {
    const siteUrl = ConfigData.apiDomainUrl;

    const [post, setPost] = useState(null);
    const [errors, setErrors] = useState({});

    const [yourName, setyourName] = useState('');
    const [yourEmail, setyourEmail] = useState('');
    const [yourPhone, setyourPhone] = useState('');
    const [yourCompany, setyourCompany] = useState('');
    const [yourMessage, setyourMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const customErrors = {
        field: 'yourEmail',
        message: 'Please enter a valid email address.'
    };
    const customDomainErrors = {
        field: 'yourEmail',
        message: 'This email domain is not allowed.'
    };
    const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com', 'gmail.co', 'gmail.c', 'gmail.'];

    const isNotAllowedDomain = (email) => {
        const [, domain] = email.split('@');
        return notAllowedDomains.includes(domain);
    };

    // Name Validation
    const nameRegex = /^[a-zA-Z\s]*$/;
    const nameErrors = {
        field: 'yourName',
        message: 'Invalid character in name'
    };

    // Phone Number Validation
    const phoneRegex = /^[0-9]{10}$/;

    const phoneErrors = {
        field: 'yourPhone',
        message: 'Invalid phone number'
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'yourName':
                setyourName(value);
                if (!nameRegex.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: nameErrors.message }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
                }
                break;
            case 'yourEmail':
                setyourEmail(value);
                if (!emailRegex.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: customErrors.message }));
                } else if (isNotAllowedDomain(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: customDomainErrors.message }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
                }
                break;
            case 'yourPhone':
                setyourPhone(value);
                const numericValue = value.replace(/[^0-9]/g, '');
                if (numericValue.length <= 10) {
                    setyourPhone(numericValue);
                }
                if (!phoneRegex.test(numericValue)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: phoneErrors.message }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
                }
                break;
            case 'yourCompany':
                setyourCompany(value);
                break;
            case 'yourMessage':
                setyourMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for any errors before submitting
        if (Object.values(errors).some(error => error !== null)) {
            return;
        }

        setLoading(true);
        createPost();
    };

    const resetForm = () => {
        setyourName('');
        setyourEmail('');
        setyourPhone('');
        setyourCompany('');
        setyourMessage('');
    };

    const createPost = async () => {
        try {
            const response = await axios.post(`${siteUrl}wp-json/contact-form-7/v1/contact-forms/271/feedback`, {
                yourName,
                yourEmail,
                yourPhone,
                yourCompany,
                yourMessage
            }, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                }
            });

            const msg = response.data.status;
            if (msg === 'mail_sent') {
                setPost(response.data.message);
                resetForm();
                setSubmitted(true);
            } else if (msg === 'validation_failed') {
                const fieldErrors = {};
                response.data.invalid_fields.forEach(field => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (error) {
            console.error("There was an error submitting the form", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBeforeInput = (event) => {
        const { name, data } = event.nativeEvent;
        if (name === 'yourPhone' && !/[0-9]/.test(data)) {
            event.preventDefault();
        }
    };

    return (
        <Container>
            <style>
                {`
                    h1.reg-success.mt-4 {
                        color: green !important;
                        font-size: 22px !important;
                        font-weight: 700 !important;
                    }

                    
                    .submit-message {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
                `}
            </style>

            {!submitted ? (
                <form className="row p-0 z-index-100" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="yourName" className="form-label text-white">Full Name <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors.yourName ? 'is-invalid' : ''}`}
                            required
                            id="yourName"
                            name="yourName"
                            value={yourName}
                            onChange={handleTextChange}
                        />
                        {errors.yourName && <div className="invalid-feedback">{errors.yourName}</div>}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="yourEmail" className="form-label text-white">Email <sup className='text-danger'>*</sup></label>
                        <input
                            type="email"
                            className={`form-control ${errors.yourEmail ? 'is-invalid' : ''}`}
                            required
                            id="yourEmail"
                            name="yourEmail"
                            value={yourEmail}
                            onChange={handleTextChange}
                        />
                        {errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                        <label htmlFor="yourPhone" className="form-label text-white">Phone <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors.yourPhone ? 'is-invalid' : ''}`}
                            required
                            id="yourPhone"
                            name="yourPhone"
                            value={yourPhone}
                            maxLength="10"
                            onBeforeInput={handleBeforeInput}
                            onChange={handleTextChange}
                        />
                        {errors.yourPhone && <div className="invalid-feedback">{errors.yourPhone}</div>}
                    </div>

                    {/* Company */}
                    <div className="mb-3">
                        <label htmlFor="yourCompany" className="form-label text-white">Company <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors.yourCompany ? 'is-invalid' : ''}`}
                            required
                            id="yourCompany"
                            name="yourCompany"
                            value={yourCompany}
                            onChange={handleTextChange}
                        />
                        {errors.yourCompany && <div className="invalid-feedback">{errors.yourCompany}</div>}
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                        <label htmlFor="yourMessage" className="form-label text-white">Message</label>
                        <textarea
                            className="form-control"
                            id="yourMessage"
                            name="yourMessage"
                            value={yourMessage}
                            onChange={handleTextChange}
                            rows="5"
                        />
                        {/* {errors.yourMessage && <div className="invalid-feedback">{errors.yourMessage}</div>} */}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-3 text-center">
                        <button type="submit" className="btn btn-15">
                            Submit
                        </button>
                        {loading && <h1 className="reg-success mt-4">{post}</h1>}
                    </div>
                </form>
            ) : (
                <div className='py-4 text-white submit-message'>
                    <h3>Thank you for your submission!</h3>
                </div>
            )}
        </Container>
    );
};

export default ContactForm;
