import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const PrivacyPolicyContent = () => {
    return (
        <>
            <Container fluid className='bg-black pb-5 custom-container '>
                <Container className='w-80 bg-white banner pb-5 mb-4 z-3 p-4'>

                    <h1 className='fs-24 text-red fw-bold p-0 py-3'>Privacy Policy  </h1>
                    <h1 className='fs-4 text-red fw-bold p-0'>We are committed to safeguarding your privacy</h1>

                    <p className="para-text">
                        We collect the minimum amount of personal information that is necessary to provide you with satisfactory services. This policy outlines how your data is collected and used. Your use of this website gives us the right to collect that information.
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Collected Data
                    </h1>

                    <p className="para-text">
                        We may collect any or all of the information that you provide, including your name, address, telephone number, and email address, along with data about your use of the website. Other information necessary to process a request may also be collected as indicated on the website.
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Use of Information
                    </h1>
                    <p className="para-text">
                        We use the information collected primarily to process the task for which you visited the website. All reasonable precautions are taken to prevent unauthorised access to this information.
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Cookies Policy
                    </h1>

                    <p className="para-text">
                        Your internet browser has the in-built facility for storing small files called “cookies” that hold information allowing a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You can choose to reject cookies, however, this might affect certain functionality on the website.
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Disclosure of Information
                    </h1>

                    <p className="para-text">
                        We do not disclose any personal information obtained from this website to third parties unless we are permitted to do so. We may use the information to keep in contact with you and inform you of developments associated with us. If at any time in the future, we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent.
                    </p>

                    <p className="para-text">
                        We may from time to time provide information of a general nature such as the number of individuals visiting our website or completing a registration form to third parties, but any personal information that could identify those individuals will be withheld.
                    </p>

                    <p className="para-text">
                        Under certain circumstances, we may disclose your personal data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Policy Changes
                    </h1>

                    <p className="para-text">
                        Any changes to our Privacy Policy will be updated here. We will take reasonable steps to draw your attention to any changes in our policy. However, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.
                    </p>

                    <h1 className='fs-4 text-red fw-bold p-0'>
                        Contact Us
                    </h1>

                    <p className="para-text mb-0">
                        If you have any queries regarding our Privacy Policy, or if you want to know what information we have collected about you, please email us at <Link className='text-decoration-none txt-red' style={{ color: '#ED2023;' }} href="mailto:reach@ivistaz.com">reach@ivistaz.com</Link>.
                    </p>
                </Container>
            </Container>

        </>
    )
}

export default PrivacyPolicyContent
