import React from 'react'
import { Container } from 'react-bootstrap'
import Header1 from '../HeaderBlack'
import Footer from '../Footer'

const index = () => {
    return (
        <>
            <Container fluid className="bg-black pb-5">
                <Header1 />
                <Container className="w-80 custom-container">
                    <h1 className="fs-21 fw-bold text-white mb-5">MAP PHILOSOPHY</h1></Container>
                <Container className="w-80 mt-5 pt-5">
                    <h2 className="fw-bold fs-22 text-white">BLACK</h2>
                    <p className="philo-text text-white">Black embodies the entire color palette within its depths, making it the most complete hue in the world. At iVista, we understand the allure of black. It represents mastery and exclusivity, reflecting our commitment to providing unparalleled service. And at iVista, elegance meets excellence.</p>
                </Container>
            </Container>
            <Container fluid >
                <Container className="w-80 pb-5 pt-5">
                    <h2 className="fw-bold fs-22">WHITE</h2>
                    <p className="philo-text">White, the blank canvas of endless possibilities. At iVista, we embrace the essence of white as a canvas on which we create art. Just as an artist transforms a blank canvas into a masterpiece, we tailor our services to the unique needs of each client, crafting something truly beautiful.</p>
                </Container>
            </Container>
            <Container fluid className="iv-bg pb-5 pt-5 border-bottom">
                <Container className="w-80">
                    <h2 className="fw-bold fs-22 text-white">RED</h2>
                    <p className="philo-text text-white">Among the spectrum of hues, few can match the emotional impact of red. At iVista, we have used the color red to symbolize our unwavering passion and relentless pursuit of greatness. It signifies our commitment to not only meet expectations but to surpass them with exceptional performance.</p>
                </Container>
            </Container>
            <Footer />

        </>
    )
}

export default index
