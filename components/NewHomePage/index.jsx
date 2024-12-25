import React from 'react'
import Banner from '../../components/NewHomePage/Banner'
import ImpactPage from './ImpactPage'
import CaseStudies from './CaseStudyOld'
import PartnerWithUs from './PartnerWithUs'

const index = () => {
  return (
    <div>
        <Banner />
        <ImpactPage />
        <CaseStudies />
        <PartnerWithUs />
    
    </div>
  )
}

export default index