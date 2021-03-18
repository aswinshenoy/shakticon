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
            "slug": "keynote",
            "title": "Keynote",
            "speaker": {
                "name": "Rinki Sethi",
                "designation": "Vice President & CISO",
                "company": "Twitter",
                "image": require('../../../images/speakers/rinki_sethi.jpg'),
                "links": {
                    "twitter": "https://twitter.com/rinkisethi",
                    "linkedin": "https://www.linkedin.com/in/rinkisethi"
                },
                "bio": <>
                    Rinki Sethi is a vice president and the Chief Information Security Officer at Twitter Inc.
                    She was earlier a Information Security Executive at IBM from 2018 to 2019. She has also
                    worked with companies like Walmart, Intuit, Ebay and others as a CISO and security expert. She
                    also serves as an advisor to several startups, including LevelOps, Authomize, and Cybersecurity
                    organizations, like Women in Cybersecurity. She was recognized by CSO Magazine & Executive Women's
                    Forum with the "One to Watch" award, and in 2010, lead a team at eBay to receive the
                    "Information Security Team of the Year" by SC Magazine.
                </>
            }
        },
        {
            "slug": "from-techlongist-to-board-room",
            "title": "From Technologist to Board Room...a cybersecurity journey",
            "abstract": <>
                In her session, Sanju will review her 25 year long career path along with a few stories. 
                She hopes to leave you with her learnings and open up the conversation to your questions.
            </>,
            "speaker": {
                "name": "Sanju Misra",
                "designation": "Chief Information Security Officer (CISO)",
                "company": "Linde",
                "image": require('../../../images/speakers/sanju_misra.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sanjumisra/"
                },
                "bio": <p>
                    Sanju fell into the cyber security field 25 years ago. Her subject matter expertise in 
                    security engineering, security analysis then team leader helped to launch her into chief
                    information security officer roles at General Electric Treasury, Praxair and Linde.
                    The skills she gained as a technologist aren’t the same skills required to
                    present to board rooms and have a seat at the table with business leaders. 
                </p>
            },
        },
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
                    Sung joined VMware in 2020 as a security architect. She developed an interest in security in the
                    early 2000s, while she was leading a research team in the area of Pervasive Computing, a
                    predecessor of Internet of Things. Prior to joining VMware, she served in various roles at several
                    companies, including product development, R&D, standards development, and defining product and
                    business strategy. She received B.S., M.S., and Ph.D. degrees in Computer Science from the
                    University of Maryland, College Park
                </p>
            },
        },
        {
            "slug": "privacy-preserving-data-analysis",
            "title": "Privacy Preserving Data Analysis",
            "abstract": <>
                Information sharing brings mutual benefit for governments, military services, corporates, financial
                organizations,  health centers,  individuals, and even competitors. This benefit is resulted from
                the additional intelligence that is inferred through collaborative data analysis. Such an intelligence
                can be used to improve revenues, e.g. through best practice sharing, market basket analysis,
                preventing loss coming from brand-new potential cyber-threats, analysis of medical data. Independently
                from the final goal,   information sharing brings issues and drawbacks related to information privacy.
                Shared information might be sensitive, potentially harming the privacy of physical persons, such as
                employee records for business applications, or patient records for medical ones. In this talk, we
                discuss the privacy issues in data sharing and we present the solutions for some specific scenarios
                in this regard.
            </>,
            "speaker": {
                "name": "Mina Sheikhalishahi",
                "designation": "Security Researcher",
                "company": " Eindhoven University of Technology",
                "image": require('../../../images/speakers/mina_sheikhalishahi.jpg'),
                "links": {
                    "linkedin": "https://linkedin.com/in/mina-sheikhalishahi-3184757a",
                },
                "bio": <p>
                    Mina Sheikhalishahireceived her Ph.D. in Computer Science at Laval University, Canada,
                    in 2016,with a Ph.D. thesis on "Spam Campaign Detection, Analysis and Formalization". She
                    joined the "Security Group" at Institute forInformatics and Telematics of CNR, Italy as postdoc
                    in 2016. She visited the Security Group at Delft University in 2018. Currently, she is a
                    post-doc researcher in the Security Group at Eindhoven University of Technology. Her research
                    is mainly focused on privacy preserving data analysis.
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
        {
            "slug": "understanding-bluetooth-security",
            "title": "Understanding Bluetooth security.",
            "speaker": {
                "name": "Renu D S",
                "designation": "Penetration Test Engineer",
                "company": "Schneider-Electric",
                "image": require('../../../images/speakers/renuds.png'),
                "links": {
                    "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
                },
                "bio": <>
                     Renu D S is a Penetration Test Engineer at Schneider-Electric with an overall experience of 2.5 years 
                     mainly focusing on embedded, wireless and web security.",
                </>
            }
        },
        {
            "slug": "software-security-pragmatic-approach",
            "title": "A pragmatic approach on software security",
            "speaker": {
                "name": "Priti Shrivastav",
                "designation": "Former General Manager Software Security",
                "company": "Intel Corporation",
                "image": require('../../../images/speakers/priti.jpg'),
                "links": {
                    "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
                },
                "bio": <>
                    Former General Manager Software Security at Intel corporation. Nine years managed security of all 
                    the software products in the area of operating systems, cloud services, developers tools, 
                    performance libraries, AI SDKs,  graphics software, compilers, and many security solutions at Intel. 
                    Prior to working on security Priti Shrivastav managed various products like compilers, binary translation software, 
                    parallel advisor and other important products and services at Intel. She has MS in Computer Science from 
                    Ohio University, US and MS in Math/CS from IIT Delhi, India. She is passionate about promoting women in 
                    cyber security to reach their professional goals.
                </>
            }
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