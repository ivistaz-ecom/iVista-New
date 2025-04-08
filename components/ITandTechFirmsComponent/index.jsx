'use client';
import React, { useState } from 'react';
import Banner from './Banner';
import ItAndTechFirms from './ItAndTechFirms';
import DigitalMarketing from './DigitalMarketing';
import OurServices from './OurServices';
import GetInTouchForm from './GetInTouchForm';
import FloatingButton from './FloatingButton';
import ContactModal from './ContactModal';

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Banner />
      <ItAndTechFirms />
      <DigitalMarketing />
      <OurServices />
      {/* <GetInTouchForm /> */}

      <FloatingButton onClick={() => setShowModal(true)} />
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Index;
