import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './KratomSection.css'

const KratomSection = () => {
  return (
<>
            <div className='kratom-section container'>
              <div className='kratom-section-content'>
                <div className='kratom-section-flex'>

                  <div className='kratom-section-left'>
                    <h1>KRATOM ADDICTION</h1>
                    <p>Kratom (a.k.a. Ketum, kakuam, or biak) is an herbal substance derived from the leaf of a Southeast Asian tree. Although it is relatively new on the scene and estimated kratom usage in the United States is not clear, it has been used as a traditional remedy in Southeast Asia for centuries.
                    <br/>Users of kratom feel a stimulating sensation similar to those associated with opioids (relaxation, euphoria, relief). Kratom is typically ingested by capsule or by mixing in a drink. It produces an opioid-like sensation that begins place quickly, almost immediately.<br/>Those who use kratom cite both mental and physical health reasons for taking the drug, ranging from anxiety and depression to pain management for their decision to use kratom. Those seeking kratom typically take it as a method of self-medication to treat a variety of predicaments, including:<br/><br/>
                    <ul>
                      <li><FiCheck/> Anxiety</li>
                      <li><FiCheck/> Depression</li>
                      <li><FiCheck/>Fatigue</li>
                      <li><FiCheck/> Drug cravings</li>
                      <li><FiCheck/>Opioid withdrawal</li>

                    </ul>
                    </p>
                  </div>

                  <div className='kratom-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="activities" />
                  </div>

                </div>
              </div>
            </div>

</>
  )
}

export default KratomSection
