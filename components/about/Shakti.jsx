import React from 'react';
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";


const ShaktiSection = styled.section`
    background: #880E4F;
    color: white;
    padding: 5vh 2vw;
    .ctf-photo {
      background: white;
      padding: 5px;
      transform: rotateZ(-2.5deg) !important;
      box-shadow: 5px 6px 10px rgba(0,0,0,0.5);
      width: 80%;
      label{
        font-weight: 300;
        font-size: 12px;
        font-family: monospace;
        line-height: 1.2;
        color: #222;
      }
      img {
        max-width: 100%;
        margin-bottom: 5px;
      }
    }
    h1 {
      font-weight: 900;
      font-size: calc(1.5rem + 1vw);
      margin-bottom: 15px;
    }
    p {
        font-size: 14px;
    }
`;

const TeamShakti = () => {

    return <ShaktiSection>
        <div className="container-lg px-0">
            <div className="row mx-0">
                <div className="col-md-6 p-2">
                    <Fade>
                        <div>
                            <h5 className="mb-0">India's First & Only Women CTF Team</h5>
                            <h1>Team Shakti</h1>
                        </div>
                    </Fade>
                    <Fade delay={150}>
                        <p>
                            Team Shakti is a group of budding young female minds who have joined together for the cause of
                            bringing about a change in the field of cyber-security. Established as a Capture The Flag team,
                            the team works tirelessly to spread knowledge and make a contribution to balance the prevalent
                            gender gap in the field.
                        </p>
                    </Fade>
                   <Fade delay={350}>
                       <p>
                           Team Shakti works on the principle of team peer mentoring where the senior members mentor the
                           juniors. Members support and help each other ultimately making the entire team stronger.
                       </p>
                   </Fade>
                   <Fade delay={500}>
                       <p>
                           Since its foundation in 2019 by Shri Vipin Pavithran, Team Shakti has been recognised to be the
                           only CTF team in India which exclusively comprises female students.
                       </p>
                   </Fade>
                    <div>
                        <a className="text-decoration-none text-warning" href="https://teamshakti.in/">
                            View website <i className="fa fa-external-link" />
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center p-2">
                    <Zoom>
                        <div className="ctf-photo">
                            <img
                                src={require('../../images/team_shakti.JPG')}
                                alt="Team Shakti" draggable="false"
                            />
                            <label>
                                Photo:- After winning Nullcon Winja CTF. Team Shakti were the winners of
                                Nullcon Winja CTF in 2019 and 2020, every year since its foundation.
                            </label>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    </ShaktiSection>


};

export default TeamShakti;