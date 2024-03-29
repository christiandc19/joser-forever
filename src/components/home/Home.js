import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import ResidenceHome from '../../components/residence/ResidenceHome'
// import Team from '../../components/team/TeamSection'
// import HomeSection1 from '../homeSection1/HomeSection1';
import ServicesMH from '../servicesMH/ServicesMH';
import ServicesSA from '../servicesSA/ServicesSA';
import Cards from '../servicesCards/Cards';



const home = () => {
  return (
    <>
    <Whoweare />
    <Cards />
    <ServicesMH />
    <WeDo />
    <ServicesSA />
    {/* <ResidenceHome /> */}
    {/* <HomeSection1 /> */}
    {/* <Team /> */}
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
