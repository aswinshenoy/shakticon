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
            "label": "Mega conference with talks, panel discussions & keynotes by leading Women in Cyber Security."
        },
        {
            "title": "CTF Hacking Competition",
            "label": "Women-only CTF hacking contest for showcasing talent, and winning exciting prizes & scholarship."
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
                                    ShaktiCon is a series of programmes with a goal to excite, train and support women from all over the
                                    globe to develop critical skills in the area of cyber security. It features multiple training workshops,
                                    talks, seminars and hacking contests spanned over 3 months, and is organized by Team Shakti along with
                                    the support of team bi0s and Blackhoodie.
                                </p>
                                <p>
                                    The training and talks will be beginner friendly, engaging and will inspire their curiosity.
                                    At the end of the programme, a Women Only Jeopardy-style CTF contest with a set of interesting challenges
                                    shall be organized to test the learnings, that can be solved individually or as a team by the participants.
                                </p>
                                <p>
                                    In addition, all the participants will be provided with plenty of resources for learning, including free
                                    access to premium learning platforms, practice challenges, videos and write ups.
                                </p>
                            </div>
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