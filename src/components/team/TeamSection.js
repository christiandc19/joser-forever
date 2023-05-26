import React from 'react'
import './TeamSection.css'
import Fade from 'react-reveal/Fade';


import Ashley from '../../assets/Ashley.jpg'
import Dennis from '../../assets/Dennis.jpg'
import Honey from '../../assets/Honey.jpg'
import Evonne from '../../assets/Evonne.jpg'
import Anthony from '../../assets/Anthony.jpg'
import Lydia from '../../assets/Lydia.jpg'
import Imelda from '../../assets/Imelda.jpg'
import Shannon from '../../assets/Shannon.jpg'
import Shawn from '../../assets/Shawn.jpg'


const TeamSection = () => {
    return (
        <>
        <div className='team-main'>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">

                    <div className='flex-right'>
                    <Fade top>
                    <div className='team-thumbnail'>
                        <img src={ Ashley } alt="Ashley" loading="lazy"/>

                        {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team1-min.jpg" width="300" height="250" alt="Therapy Session" loading="lazy"/> */}
                        <div>                   
                        <p><b>Ashley Shelton</b><br/><i>Clinical Director</i></p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Dennis } alt="Dennis" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team2-min.jpg" width="300" height="250" alt="Clinic Staff" loading="lazy"/> */}
                    <p><b>Dennis Rivera</b><br/><i>Operations Director</i></p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='team-thumbnail'>
                    <img src={ Honey } alt="Honey" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team3-min.jpg" width="300" height="250" alt="Bluecross  Logo" loading="lazy"/> */}
                    <p><b>Honey Phipps</b><br/><i>Executive Director</i></p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Evonne } alt="Evonne" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team4-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Evonne Meza</b><br/><i>Therapist</i></p>  
                    </div>
                    </Fade>                 

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Anthony } alt="Anthony" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team5-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Anthony Raines</b><br/><i>Lead Case Manager</i></p>  
                    </div>

                    </Fade>                          
                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Lydia } alt="Lydia" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team6-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Lydia Caldwell</b><br/><i>Lead Tech</i></p>  
                    </div>
                    </Fade>                          

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Imelda } alt="Imelda" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team7-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Imelda Medina</b><br/><i>Lead Nurse</i></p>  
                    </div>
                    </Fade>                 

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Shannon } alt="Shannon" loading="lazy"/>
                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team8-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Shannon Hicks</b><br/><i>Lead Tech</i></p>  
                    </div>

                    </Fade>                          
                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Shawn } alt="Shawn" loading="lazy"/>

                    {/* <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/team9-min.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/> */}
                        <p><b>Shawn Waddell</b><br/><i>Lead Tech</i></p>  
                    </div>
                    </Fade>  

                    </div>
                </div>
            </div>
        </div>


</div>

</>
    )
}

export default TeamSection
