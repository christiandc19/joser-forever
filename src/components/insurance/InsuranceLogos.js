import React from 'react'
import '../../components/insurance/InsuranceLogosStyles.css'

function InsuranceLogos(props) {
  return (
        <div className='insurance-props'>
            <div>
            <img className='image' src= {props.Image} alt="Image" />
            </div>
        </div>
  )
}

export default InsuranceLogos;