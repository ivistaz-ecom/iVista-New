import React from 'react'
import { Container } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack'
// import Footer from '../../../components/Footer';

const page = () => {
    return (
        <>
                <Header1 />
            <Container className="bg-black pb-5" fluid>
                <Container className='custom-container w-80'>
                    <h1 className="fs-21 text-white fw-bold">GET IN TOUCH</h1>

                    <h3 className='text-white fw-bold'>
                        Narayan Rajan
                    </h3>

                    <h6 className='text-white'>
                        Chief Executive Officer
                    </h6>

                    <p className="text-white para-text mt-4">
                        Back in 1996, when most folks were still trying to wrap their heads around the internet, Narayan had already set his sights on transforming the digital marketing world. He founded iVista, a digital agency based on a performance-based revenue model that was years ahead of its time. With countless successful projects executed over the years, iVista has flourished under Narayan&apos;s expert guidance.
                    </p>
                </Container>
            </Container>

            {/* <Footer/> */}
        </>
    )
}

export default page