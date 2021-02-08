import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import SpeakerCard from "./SpeakerCard";


const TrainingModuleWrap = styled.section`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 5vh 2vw;
    h2 {
       font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: #FFAB00;
       text-align: center;
    }
    p {
      color: #EEE;
      font-size: 14px;
      line-height: 1.5;
      padding: 0.5rem;
      margin-bottom: 8px;
   }
   a {
      color: #fd7e14;
      font-size: 18px;
      text-decoration: none!important;
      &:hover {
        color: white;
      }
   }
`;

const ShaktiSpeakers = ({ hideTitle = false }) => {

    const SpeakersList = [
        {
            "slug": "threat-modeling",
            "title": "Threat Modeling",
            "abstract": <>
                In this talk, you will learn why Threat Modeling (TM) is important, what TM is (what it can prevent
                and what it cannot), and how TM fits into the overall Product Development Lifecycle and Secure
                Development Lifecycle. This talk will also introduce various threat modeling methodologies.
            </>,
            "speaker": {
                "name": "Sung Lee",
                "designation": "Staff Security Architect",
                "company": "VMware",
                "image": require('../../../images/speakers/sung.JPG'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sylee/",
                },
                "bio": <p>
                    Sung joined Vmware in 2020 as a security architect. She developed an interest in security in the
                    early 2000s, while she was leading a research team in the area of Pervasive Computing, a
                    predecessor of Internet of Things. Prior to joining VMware, she served in various roles at several
                    companies, including product development, R&D, standards development, and defining product and
                    business strategy. She received B.S., M.S., and Ph.D. degrees in Computer Science from the
                    University of Maryland, College Park
                </p>
            },
        },
        {
            "slug": "introduction-to-fuzzing",
            "title": "Introduction to Fuzzing",
            "speaker": {
                "name": "Allison Marie Naaktgeboren",
                "isTrainer": true,
                "designation": "PHd Student",
                "company": "Portland State University",
                "image": require('../../../images/speakers/allison.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/a-m-naaktgeboren/"
                },
                "bio": <p>
                    Allison Marie Naaktgeboren is a cybersecurity doctoral researcher (fancyspeak for PhD student) and
                    a semi-retired senior software engineer. Her current research focuses on fuzzing. She has a
                    Bachelor’s Degree in Computer Science from Carnegie Mellon University. She has previously written
                    (and regretted) code at Signal Sciences, Mozilla, Amazon, Cisco, FactSet Research Systems, and the
                    Biorobotics Laboratory. She run the Portland State Security Club & CTF team and an all women’s CTF
                    team in Portland. She is part of the WomenWhoCode PDX and OWASP PDX leadership teams.
                </p>
            },
        },
        {
            "slug": "machines-learning-for-security",
            "title": "So you want to try your hand at machine learning for security…",
            "abstract": <>
                Security expertise is scarce. Machine learning and AI can help defenders scale and provide protection
                from attackers. This talk will cover real case studies of what applications of ML in security look
                like and the major challenges in implementing them. We will discuss the challenges of translating
                cutting edge ML research into different aspects of security (AV, IDS, TI etc). If you are interested
                in dipping your toes in this powerful domain, we will share tools and resources to get started.
            </>,
            "speaker": {
                "name": "Bhavna Soman",
                "designation": "ML Security Researcher",
                "company": "Microsoft",
                "image": require('../../../images/speakers/bhavana.JPG'),
                "links": {
                    "twitter": "https://twitter.com/bsoman3",
                },
                "bio": <p>
                    Bhavna Soman is a Senior Security Research Lead working for the Microsoft Defender Research Team.
                    In her day job, she develops Machine Learning models to classify malware in real time. In the past
                    she worked in the field of Threat Intelligence and loves to play with Natural Language processing
                    algorithms. Bhavna holds a master's degree in Computer Security from Georgia Tech and is also a
                    trainer for Malware Reverse Engineering with Blackhoodie.
                </p>
            },
        },
    ]

    return <TrainingModuleWrap id="conference-speakers">
        <div className="container-lg p-0">
            {!hideTitle && <h2>Conference Speakers</h2>}
            <div className="py-4 px-2">
                {SpeakersList.map((s) =>
                    <Fade key={s.slug}>
                        <div className="mb-4">
                            <SpeakerCard  {...s} />
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    </TrainingModuleWrap>

};

export default ShaktiSpeakers;