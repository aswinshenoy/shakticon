import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const CoverContainer = styled.section`
    background-image: ${() => `url(${require('../../images/coverpic.jpg')})`};
    background-size: cover;
    background-position: top;
    color: white;
    position: relative;
    overflow: hidden;
`;

const CoverWrap = styled.div`
    backdrop-filter: blur(1px) brightness(0.45);
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
       width: 300px;
       max-width: 100%;
       margin-bottom: 1.5rem;
       text-align: center;
    }
    h1 {
      font-size: calc(2.5rem + 3vw);
      text-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    }
    h2 {
       text-align: center;
       font-size: calc(1.35rem + 1vw);
       text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
       color: #EEE;
       span {
          display: block;
          font-weight: 900;
          font-style: italic;
       }
    }
    p {
      color: #BBB;
      span {
        font-weight: 600;
        color: #fd7e14;
      }
    }
    .register-button {
        margin-top: 2vh;
        display: block;
        padding: 12px 18px;
        border-radius: 3px;
        font-size: 18px;
        background: #4A148C;
        color: white;
        text-decoration: none!important;
        transition: all 0.35s linear;
        &:hover {
           background: #F50057;
           transition: all 0.35s linear;
        }
        margin-right: 5px;
    }
`

const LandingCover = () => {

    return <React.Fragment>
        <CoverContainer>
            <CoverWrap>
                <div className="container text-center px-2">
                    <Fade left>
                        <img
                            className="mb-0 " alt="Amrita Vishwa Vidyapeetham"
                            style={{ maxHeight: '72px', maxWidth: '100%', width: 'auto' }}
                            src={require('../../images/amrita_logo_light.png')}
                        />
                        <h1 className="font-weight-bold mb-2">ShaktiCon</h1>
                    </Fade>
                    <Fade right>
                        <h2>
                            CyberSecurity Conference, Trainings & Competition,
                            <span>Exclusively for Women.</span>
                        </h2>
                    </Fade>
                    <Fade up>
                        <div className="d-flex justify-content-center mt-3">
                            <div>
                                <p style={{ maxWidth: '500px' }}>
                                    ShaktiCon is an annual global conference focused on inspiring, training, and upskilling women in cybersecurity,
                                    <div className="d-inline-block">
                                        organized by <span>Team Shakti</span>, <div className="d-inline-block">India's First & No.1 ranked Women-Only CTF team.</div>
                                    </div>
                                </p>
                                <div className="py-4">
                                    <a
                                        className="register-button" target="_blank" rel="noreferrer nofollow"
                                        href="https://register.shakticon.com"
                                    >
                                        Register Now / Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </CoverWrap>
        </CoverContainer>
        <div className="bg-white text-dark d-flex justify-content-center align-items-end p-2">
            <div className="p-2 text-center">
                <img
                    alt="Siemens" className="mb-0" style={{ width: 'auto', maxWidth: '100%', maxHeight: '40px' }}
                    src={require('../../images/sponsors/seimens.png')}
                />
                <div style={{ fontSize: '13px' }}>Platinum Sponsor</div>
            </div>
            <div className="p-2 text-center">
                <img
                    alt="VMWare" className="mb-0" style={{ width: 'auto', maxWidth: '100%', maxHeight: '30px' }}
                    src={require('../../images/sponsors/vmware.png')}
                />
                <div style={{ fontSize: '13px' }}>Gold Sponsor</div>
            </div>
            <div className="d-none text-center d-md-block p-2">
                <img
                    alt="CrowdStrike" className="mb-0" style={{ width: 'auto', maxWidth: '100%', maxHeight: '45px' }}
                    src={require('../../images/sponsors/crowdstrike.png')}
                />
                <div style={{ fontSize: '13px' }}>Associate Sponsor</div>
            </div>
        </div>
    </React.Fragment>

}

export default LandingCover;