import React from 'react'
import '../../components/services/ServicesCardsStyles.css'

function ServicesCards(props) {
  return (
        <div className="servicesCards">
            <div>
            <img className='image' src= {props.Image} alt="Image" />
            </div>
            
            <div>
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
            </div>
            
        </div>
  )
}

export default ServicesCards;