import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const CyberSecRelevanceWrap = styled.section`
    padding: 8vh 2vw;
    background: #223;
    color: #EEE;
`;

const WomenInCyberSection = styled.section`
    padding: 1rem;
    h3 {
      font-size: calc(1.1rem + 0.2vw);
    }
    h1 {
      font-weight: 900;
      font-size: calc(1.25rem + 1.35vw);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .subtitle {
      font-size: calc(1.2rem + 0.15vw);
      margin-bottom: 0.5rem;
      max-width: 650px;
      line-height: 1.35;
      color: #FFD600;
    }
    p {
        font-size: 14px;
        max-width: 720px;
        color: #AAA;
    }
    b {
        font-weight: 600;
        color: #FFF;
    }
    blockquote {
        font-family: 'Kalam', cursive;
        font-size: calc(1.2rem + 0.5vw);
        line-height: 1.25;
        margin-bottom: 0.5rem;
    }
`;


const CyberSecurityRelevance = () => {

    return <CyberSecRelevanceWrap>
        <WomenInCyberSection>
            <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />
            <div className="row mx-0">
                <div className="col-md-8 px-2">
                    <div className="py-2">
                        <Fade>
                            <h3>Why ShaktiCon?</h3>
                        </Fade>
                        <Fade delay={150}>
                            <h1>
                                <span className="d-md-inline-block">The Industry Needs Women,</span>
                                <span className="d-md-inline-block">& also Needs to Open Up For Them.</span>
                            </h1>
                        </Fade>
                        <Fade delay={300}>
                            <div className="subtitle">
                                To fill the world’s open security positions, we’ll need to <span className="d-md-inline-block">aim for 50% women in cyber over the next decade.</span>
                            </div>
                        </Fade>
                    </div>
                    <Fade delay={500}>
                        <p>
                            CyberSecurity as a profession is one where demand is outstripping supply, and based on the technological
                            evolutions and ever-increasing threat landscape, it is expected that there will be triple the number
                            of job openings over the next 5 years, with <b>over 3.5 million new cybersecurity job openings in 2021</b>.
                            Although women represent half the population, and around 48% of the general workforce,
                            the number of <b>women professionals is only about 20% of the total cybersecurity workforce</b>.
                            Of those women, <b>only 1% percent of female cybersecurity  workers are in C-suite leadership
                            positions</b>, and this glass ceiling is even higher for women of color. The future of the cybersecurity
                            industry depends on its ability to attract, retain and promote women, who represent a skilled
                            and under-tapped resource.
                        </p>
                    </Fade>
                </div>
                <div className="col-md-4 d-flex align-items-center p-2">
                    <div>
                        <Fade right>
                            <div className="pb-4">
                                <blockquote>
                                    Safeguarding our lives online requires skills and experiences that lie beyond masculine
                                    stereotypes of the hacker and soldier.
                                </blockquote>
                                <div>- Winifred R. Poster</div>
                            </div>
                        </Fade>
                        <Fade delay={200} right>
                            <div>
                                <blockquote>
                                    Women often don’t see tech or security as viable career paths because they’re
                                    often considered masculine professions.
                                </blockquote>
                                <div>- Jessica Ortega, SiteLock</div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

        </WomenInCyberSection>
    </CyberSecRelevanceWrap>

};

export default CyberSecurityRelevance;