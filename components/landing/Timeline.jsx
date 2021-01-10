import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const TimelineWrapper = styled.div`
    background: #213;
    color: white;
    padding: 5vh 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-weight: 600;
        margin-bottom: 0;
        font-size: calc(1.25rem + 2vw);
    }
    .row {
        max-width: 1300px;
    }
    h4 {
       font-weight: 600;
       color: #F50057;
       margin-bottom: 5px;
    }
    .phase-timeframe {
       font-size: 15px;
       line-height: 1.2;
       color: #EEE;
    }
    p {
       font-size: 13px;
       margin-bottom: 0;
       color: #BBB;
    }
    a {
      text-decoration: none!important;
      color: #FF4081!important;
      &:hover {
         h5 {
            color: white;
         }
      }
    }
    h5 {
        color: #fd7e14;
        margin-bottom: 10px;
        font-size: calc(1rem + 0.25vw);
    }
    .date {
       color: #DDD;
       font-size: 14px;
       line-height: 1.2;
       margin-bottom: 10px;
    }
`

const ProgrammePhases = () => {

    const timeline = [
        {
            "title": "Phase 1",
            "timeline": "December 2020 - February 2021",
            "events": [
                {
                    "isCompleted": true,
                    "title": "ShaktiCTF - Beginner Round",
                    "date": "December 4, 2020",
                    "description": "Beginner level women-only CTF"
                },
                {
                    "title": "Beginner-Level Training",
                    "description": "Basic CybserSecurity Training, introducing participants to Web Security & Exploitation, Assembly, Digital Forensics, Reverse Engineering ",
                    "registerURL": "https://docs.google.com/forms/d/e/1FAIpQLSeiITkqpmhPRHWQspiLt27hDV2nFlwW9QoyzyFZVjM5YmSqwg/viewform",
                    "viewMoreURL": "/schedule#beginner-training"
                },
            ],
        },
        {
            "title": "Phase 2",
            "timeline": "February 2021 - March 2021",
            "events": [
                {
                    "title": "Challenge Phase (powered by Traboda)",
                    "description": "Participants enhance their skills by practising different CTF-challenges from the Traboda Labs platform.",
                },
                {
                    "title": "Intermediate-Level Training",
                    "description": "Participants receive advanced trainings in different cyber-security areas to level up their skills."
                }
            ],
        },
        {
            "title": "Phase 3",
            "timeline": "March 2021 - April 2021",
            "events": [
                {
                    "title": "Final Summit",
                    "description": "2-day CyberSecurity Conference exclusively for Women, that will feature talks, panel-discussions, seminars etc.",
                },
                {
                    "title": "ShaktiCTF",
                    "description": "Finale of ShaktiCTF - Women-Only Jeopardy Style CTF, organized by the organizers of InCTF",
                }
            ]
        }
    ]

    return <TimelineWrapper id="timeline">
        <div className="row mx-0">
            <div className="col-12 px-2 py-3">
                <Fade left>
                    <h2>Event Timeline</h2>
                </Fade>
            </div>
            {timeline.map((p, index) =>
                <div className="col-md-4 p-2 p-md-3">
                    <Fade up delay={150*index}>
                        <h4>{p.title}</h4>
                    </Fade>
                    <Fade left delay={150*index}>
                        <div className="phase-timeframe">{p.timeline}</div>
                    </Fade>
                    <div className="my-1">
                        {p.events.map((e, i) =>
                            <Fade up delay={500*i}>
                                <div className="pt-4">
                                    {e.viewMoreURL ?
                                        <a href={e.viewMoreURL}>
                                            <h5>{e.title}</h5>
                                        </a> :
                                        <h5>{e.title}</h5>
                                    }
                                    {e.date && <div className="date"><i className="far fa-calendar-alt mr-1" /> {e.date}</div>}
                                    <p>{e.description}</p>
                                    <div className="d-flex mt-2">
                                        {e.registerURL &&
                                        <a href={e.registerURL} target="_blank" rel="noreferrer nofollow" className="text-light my-1 mr-3 d-inline-block plain-link">
                                            Register Now <i className="far fa-chevron-right"/>
                                        </a>}
                                        {e.viewMoreURL &&
                                        <a href={e.viewMoreURL} className="text-light my-1 d-inline-block plain-link">
                                            View Details <i className="far fa-external-link"/>
                                        </a>}
                                    </div>
                                </div>
                            </Fade>
                        )}
                    </div>
                </div>
            )}

        </div>
    </TimelineWrapper>
};

export default ProgrammePhases;