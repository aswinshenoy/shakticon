import React from 'react';
import styled from "@emotion/styled";
import ScrollContainer from 'react-indiana-drag-scroll'
import shortid from "shortid";
import Fade from "react-reveal/Fade";

const SpeakersContainer = styled.div`
    background: #223;
    padding: 8vh 2vw;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: #FFAB00;
        font-weight: 600;
        padding: 1.5rem 0;
    }
    .scroll-container {
      &::-webkit-scrollbar{
          background: rgba(2,2,2,0.5);
          width: 8px;
      }
      ::-webkit-scrollbar-thumb {
          background: rgba(120,20,150,0.5);
      }
      ::-webkit-scrollbar-thumb:hover {
           background: rgba(120,20,150,0.8);
      }
    }
`

const SpeakerCard = styled.div`
    text-align: center;
    background: rgba(0,0,30,0.3);
    color: #eee;
    padding: 0 0.75rem;
    border-radius: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    user-select: none;
    transition: all 0.5s ease;
    width: 300px;
    max-width: 60vw;
    margin: 10px 12px;
    border: ${({ isTrainer }) => isTrainer ? `2px solid #9C27B0` : `2px solid #C51162` };
    &:hover {
       transform: translateY(-8px);
       transition: all 0.5s ease;
       border-radius: 10px;
       img {
         border-radius: 15px;
         transition: all 0.7s ease;
       }
    }
    img {
      max-height: 220px;
      max-width: 100%;
      border-radius: 100vw;
      margin-bottom: 1rem;
      transition: all 0.7s ease;
      display: block;
    }
    h3 {
       font-size: calc(1.25rem + 0.25vw);
        color: #fd7e14;
        margin-bottom: 5px;
    }
    h4 {
       font-size: calc(0.8rem + 0.2vw);
       color: #eee;
       margin-bottom: 3px;
    }
    h5 {
       font-size: calc(1rem + 0.25vw);
       color: #FFF;
       font-weight: 600;
    }
    .trainer-badge, .speaker-badge {
       display: inline-block;
       padding: 3.5px 10px;
       font-size: calc(0.8rem + 0.25vw);
       border-radius: 5px;
       transform: translateY(-12px);
    }
    .trainer-badge {
        background: #9C27B0;
    }
    .speaker-badge {
         background: #C51162;

    }
    .social-media-links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      a {
          margin-right: 8px;
          i {
            color: #AAA;
            font-size: 24px;
          }
          &:hover {
            i {
              color: white;
            }
          }
        }
    }
`

const ConferenceSpeakers = () => {

    const speakers = [
        {
            "name": "Sanju Misra",
            "designation": "Chief Information Security Officer (CISO)",
            "company": "Linde",
            "image": require('../../images/speakers/sanju_misra.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/sanjumisra/"
            }
        },
        {
            "name": "Maddie Stone",
            "isTrainer": true,
            "designation": "Security Researcher",
            "company": "Google Project Zero",
            "image": require('../../images/speakers/maddie_stone.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/maddie-stone-192a6544/",
                "twitter": "https://twitter.com/maddiestone",
                "website": "https://ragingrock.com/"
            }
        },
        {
            "name": "Thaís Moreira Hamasaki",
            "isTrainer": true,
            "designation": "Offensive Security Researcher",
            "company": "Intel",
            "image": require('../../images/speakers/thais_moreira_hamasaki.jpeg'),
            "links": {
                "twitter": "https://twitter.com/barbieauglend",
                "linkedin": "https://www.linkedin.com/in/barbieauglend/",
                "website": "https://barbieauglend.re/"
            }
        },
        {
            "name": "Silvia Nerea Anguita",
            "isTrainer": true,
            "designation": "Cybersecurity Auditor",
            "company": "Siemens",
            "image": require('../../images/speakers/silvia.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/silvia-anguita/"
            }
        },
        {
            "name": "Tiffany Bao",
            "designation": "Assistant Professor",
            "company": "Arizona State University",
            "image": require('../../images/speakers/tiffany.jpg'),
            "links": {
                "twitter": "http://twitter.com/___tiffanyb___",
                "website": "https://www.tiffanybao.com/",
            }
        },
        {
            "name": "Caroline Leman",
            "isTrainer": true,
            "designation": "Security Research Engineer",
            "company": "CEA/DAM",
        },
        {
            "name": "Zoey Garvey",
            "isTrainer": true,
            // "designation": "Software Engineer",
            // "company": "Federal Reserve Bank of San Fransisco",
            "image": require('../../images/speakers/zoey.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/zoey-garvey-66982b34/"
            }
        },
        {
            "name": "Allison Marie Naaktgeboren",
            "isTrainer": true,
            "designation": "PHd Student",
            "company": "Portland State University",
            "image": require('../../images/speakers/allison.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/a-m-naaktgeboren/"
            }
        },
        {
            "name": "Sreelakshmi Panangatt",
            "designation": "Security Engineer",
            "company": "VMware",
            "image": require('../../images/speakers/sreelakshmi.JPG'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/sreelakshmi-panangatt-b67b58105/",
                "twitter": "https://twitter.com/srlkhmi",
            }
        },
        {
            "name": "Dr. Krishnasree Achuthan",
            "designation": "Director",
            "company": "Amrita Center for Cyber Security",
            "image": require('../../images/speakers/dr_krishnasree.jpg'),
        },
        {
            "name": "Vipin Pavithran",
            "designation": "Founder & Chief Mentor",
            "company": "team bi0s, team Shakti & InCTF",
            "image": require('../../images/speakers/prof_vipin.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/vipin-pavithran/",
                "twitter": "https://twitter.com/Th3_M3nt0r",
            }
        },
        {
            "name": "Sreepriya Chalakkal",
            "designation": "Security Analyst",
            "company": "Siemens",
            "image": require('../../images/crew/sreepriya_chechi.jpg'),
            "links": {
                "twitter": "https://twitter.com/priyachalakkal",
                "linkedin": "https://www.linkedin.com/in/sreepriyac/"
            }
        },
    ];

    return <SpeakersContainer id="speakers">
        <h2>Speakers & Trainers</h2>
        <div className="container" style={{ maxWidth: '1200px' }}>
            <ScrollContainer vertical={false} hideScrollbars={false} className="scroll-container py-2">
                <div className="d-flex p-3" style={{ cursor: 'grabbing' }}>
                    {speakers.map((s, index) =>
                        <Fade key={shortid.generate()} className="h-100" delay={100*index}>
                            <SpeakerCard isTrainer={s.isTrainer}>
                                <div>
                                    {s.isTrainer ?
                                        <div className="trainer-badge">Trainer</div>
                                        : <div className="speaker-badge">Speaker</div>
                                    }
                                    <div className="d-flex justify-content-center">
                                        {s.image && <img src={s.image} alt={s.name} draggable="false" />}
                                    </div>
                                    <h3>{s.name}</h3>
                                </div>
                                {s.company && <div>
                                    <h4>{s.designation}</h4>
                                    <h5>{s.company}</h5>
                                </div>}
                                {s.links &&
                                <div className="social-media-links">
                                    {s.links?.twitter &&
                                    <a href={s.links.twitter} rel="noreferrer nofollow" target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>}
                                    {s.links?.linkedin &&
                                    <a href={s.links.linkedin} rel="noreferrer nofollow" target="_blank">
                                        <i className="fab fa-linkedin" />
                                    </a>}
                                    {s.links?.website &&
                                    <a href={s.links.website} rel="noreferrer nofollow" target="_blank">
                                        <i className="far fa-globe" />
                                    </a>}
                                </div>}
                            </SpeakerCard>
                        </Fade>
                    )}
                </div>
            </ScrollContainer>
        </div>
    </SpeakersContainer>

};

export default ConferenceSpeakers;