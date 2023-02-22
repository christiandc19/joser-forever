import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import WhatWeCanProvide from '../whatWeCanProvide/whatWeCanProvide'



const home = () => {
  return (
    <>
    <Cards />
    <WhatWeDo />
    <WhatWeCanProvide />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
