import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
    padding: 8vh 0;
    background: #09091F;
    color: #EEE;
    h2 {
        font-size: calc(1.3rem + 1.5vw);
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
    p {
       font-size: 16px;
    }
    span {
        color: #F50057;
    }
`;

const ConfComponent = styled.div`
    h4 {
       font-size: calc(0.8rem + 0.5vw);
       font-weight: 600;
       span {
          font-size: calc(1rem + 0.6vw);
       }
    }
    p {
       font-size: 13px;
       color: #AAA;
    }
`;

const AboutShaktiCon = () => {

    const components = [
        {
            "title": "Training Programmes",
            "label": "Workshops & training sessions organized aimed at scouting, nurturing & empowering women talents in the field of cyber-security."
        },
        {
            "title": "CyberSecurity Conference",
            "label": "Talks, panel discussions & keynotes by leading women in Cyber Security."
        },
        {
            "title": "CTF Hacking Competition",
            "label": "Women-only CTF hacking contest for showcasing talent, and winning prizes & scholarship."
        }
    ]


    return <AboutContainer id="about">
        <div className="container-lg px-1">
            <div className="row mx-0">
                <Fade left>
                    <div className="col-md-8 px-3">
                        <div>
                            <h2>What is <span>ShaktiCon</span>?</h2>
                            <div style={{ maxWidth: '650px' }}>
                                <p>
                                    ShaktiCon is a completely free global conference focused on inspiring, training,
                                    and upskilling women in cybersecurity. ShaktiCon includes keynote sessions,
                                    training, contests, and workshops. Our pre-conference contest attracted over
                                    1500 participants from 5 continents in December 2020.
                                </p>
                                <p>
                                    Born out of an understanding that cultural circumstances do not always encourage
                                    women to flourish in male dominated fields, ShaktiCon is committed to creating a
                                    female focused environment to showcase the range of womens talents in cybersecurity.
                                </p>
                                <p>
                                    By doing this we hope to train a new generation of women to be more actively
                                    engaged in the field and enter the cybersecurity workforce. ShaktiCon is all about
                                    women role models encouraging young & aspiring women hackers to attain their
                                    goals without any fear.
                                </p>
                            </div>
                            <a href="/about" className="text-warning d-block mb-3" style={{ textDecoration: 'none' }}>
                                Learn More <i className="fa fa-chevron-right" />
                            </a>
                        </div>
                    </div>
                </Fade>
                <div className="col-md-4 d-flex align-items-center justify-content-end px-3">
                    <div>
                        <h5 className="mb-3">End-to-End Programme for <span className="d-inline-block">Women in Cyber-Security</span></h5>
                        {components.map((c, index) =>
                            <Fade delay={index*500}>
                                <ConfComponent>
                                    <h4><span>{index+1}.</span> {c.title}</h4>
                                    <p>{c.label}</p>
                                </ConfComponent>
                            </Fade>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </AboutContainer>;

};

export default AboutShaktiCon;