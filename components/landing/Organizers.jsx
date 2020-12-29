import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const OrganizersSection = styled.section`
     background: #E3F2FE;
     .logo {
        max-height: 100px;
        width: auto;
        margin-bottom: 16px;
     }
     img {
        max-width: 100%;
     }
     h3 {
        font-size: calc(1.2rem + 1vw);
        font-weight: 600;
     }
     h4 {
        font-size: 18px;
        font-weight: 600;
     }
     p {
        font-size: 12px;
     }
     .supporters_logos {
          img {
            width: 200px;
            max-width: 100%;
            margin-right: 10px;
          }
     }
`;

const EventOrganizers = () => {

    return <OrganizersSection>
        <div className="container pt-5">
            <h3 className="text-center mb-4">Organized By</h3>
            <div className="row mx-0">
                <div className="col-md-6 order-md-1 order-2 text-center">
                    <Fade>
                        <a href="https://amrita.edu" target="_blank" rel="noreferrer nofollow">
                            <img className="p-2 logo" alt="Amrita Vishwa Vidyapeetham" src={require('../../images/amrita_logo_dark.png')} />
                        </a>
                        <h4>India's No.1 Ranked Private University</h4>
                        <p>
                            Amrita Vishwa Vidyapeetham, founded in 1994, within the next 2 decades has emerged among the
                            leading universities in India, and has been conferred the status of Institute of Eminence by the
                            Govt. of India. It is ranked as the fourth best university in the NIRF Ranking 2020, and has been
                            swiftly establishing itself as a world class teaching and research institution.
                        </p>
                    </Fade>
                </div>
                <div className="col-md-6 order-md-1 order-2 text-center">
                    <Fade>
                        <a href="https://teamshakti.in/" target="_blank" rel="noreferrer nofollow">
                            <img className="p-2 logo" alt="Team Shakti" src={require('../../images/teamshakti.svg')} />
                        </a>
                        <h4>India's No.1 Ranked Women CTF Team</h4>
                        <p>
                            Team Shakti is a trailblazer of a women-only cybersecurity team from Amrita Vishwa Vidyapeetham’s
                            Amritapuri Campus that is committed to bridging the gender divide. Although relatively new
                            to the scene, the team is made up of luminous minds, paving the way for a brighter future.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="py-2 text-center">
                <h5 style={{ fontWeight: 600 }} className="mb-1">Community Partners</h5>
                <div className="d-flex justify-content-center">
                    <div className="row mx-0 supporters_logos" style={{ maxWidth: '700px' }}>
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center p-1">
                            <Fade down>
                                <a href="https://bi0s.in" className="plain-link" target="_blank">
                                    <img alt="team bi0s" src={require('../../images/team_bi0s.png')} />
                                </a>
                            </Fade>
                        </div>
                        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center p-1">
                            <Fade up>
                                <img alt="black hoodie" src={require('../../images/black_hoodie_logo.PNG')} />
                            </Fade>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center p-1">
                            <Fade down>
                                <img alt="Amrita Center for CybserSecurity Systems & Network" src={require('../../images/amrita_cyber.png')} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={require('../../images/amritapuri_illustration.png')} alt="amritapuri" />
    </OrganizersSection>;

};

export default EventOrganizers;