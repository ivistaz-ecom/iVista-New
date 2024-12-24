
import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../src/app/globals.css';
import Mastery from './Mastery';
import Arts from './Arts';
import Performance from './Performance'
import ScrollAnimation from '../SharedComponents/ScrollAnimation';


const NewMastery = () => {
    return (
        <>
            <ScrollAnimation />
            
            <article>

                <div className='timeline'>
                    <div id='mastery' style={{ paddingTop: '30px' }}>
                        <div className='position-relative'>
                            <div className="timeline-badge"></div>
                            <Mastery />
                        </div>
                    </div>

                    <div id='art' style={{ paddingTop: '30px' }}>
                        <div className='position-relative' >
                            <div className="timeline-badge"></div>
                            <Arts />
                        </div>
                    </div>
                    <div id='performance' style={{ paddingTop: '30px' }}>
                        <div className='position-relative'>
                            <div className="timeline-badge"></div>
                            <Performance />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
export default NewMastery;