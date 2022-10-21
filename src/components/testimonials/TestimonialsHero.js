import React from 'react'
import './TestimonialsHeroStyles.css'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'


const TestimonialsHero = () => {
    return (
        <div className='TestimonialsHero'>
            <div className="container">
                <div className="content">
                    <h2><span>Hear</span> What They Say</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>
                    <div>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                        <button>Call Us Now</button>
                        </Link>
                        </LinkRoll>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsHero
