import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import ScrollContainer from "react-indiana-drag-scroll";

const TrainingModuleWrap = styled.section`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 8vh 2vw;
    h2 {
       font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 2vh;
       color: #FFAB00;
       text-align: center;
    }
    p {
      text-align: center;
      color: #AAA;
      font-size: 14px;
      line-height: 1.5;
      padding: 0.5rem;
    }
`;

const Session = styled.div`
   padding: 0.35rem;
   background: rgba(60,60,120,0.45);
   border: 2px solid #9C27B0;
   border-radius: 10px;
   user-select: none;
   transition: all 0.5s ease;
   height: 100%;
   color: #DDD;
   display: block;
   @media (min-width: 900px){
      display: flex;
   }
   &:hover {
       transform: translateY(-5px);
       transition: all 0.5s ease;
       border-radius: 25px;
    }
   img {
      height: 150px;
      padding: 10px;
      border-radius: 20px;
   }
   h3 {
      line-height: 1.2;
      font-size: calc(1rem + 0.25vw);
      margin: 5px 0;
      color: white;
   }
   h4 {
      line-height: 1;
      font-size: calc(1rem + 0.2vw);
      color: #fd7e14;
      font-weight: 600;
      margin: 5px 0;
   }
`;

const BeginnerTraining = ({ }) => {

    const sessions = [
        {
            "title": "Introduction to CTF",
            "date": "15 January 2021",
            "trainer": {
                "name": "Namitha S",
                "image": require('../../images/crew/namitha.jpg'),
                "links": {
                    "twitter": "https://twitter.com/N4m1th4_01"
                }
            }
        },
        {
            "title": "Introduction to Cryptography",
            "date": "22 January 2021",
            "trainer": {
                "name": "Meenakshi S L",
                "image": require('../../images/crew/meenakshi.jpg'),
                "links": {
                    "twitter": "https://twitter.com/MeenakshiSl1",
                    "linkedin": "https://www.linkedin.com/in/meenakshisl"
                }
            }
        },
        {
            "title": "Introduction to Reverse Engineering",
            "date": "29 January 2021",
            "trainer": {
                "name": "Simran Kathpalia",
                "image": require('../../images/crew/simran.jpg'),
                "links": {
                    "twitter": "https://twitter.com/SimranKathpalia"
                }
            }
        },
        {
            "title": "Introduction to Binary Exploitation",
            "date": "05 February 2021",
            "trainer": {
                "name": "Sandra Bino",
                "image": require('../../images/crew/sandhra.jpg'),
                "links": {
                    "twitter": "https://twitter.com/SandhraBino",
                    "linkedin": "https://www.linkedin.com/in/sandra-bino-734433187"
                }
            }
        },
    ]

    return <TrainingModuleWrap id="beginner-training">
        <div className="container-lg p-0">
            <h2>Beginner Training</h2>
            <p>Beginner level cyber-security training sessions for young women aspirants, conducted by members of team Shakti from 15h of January.</p>
        </div>
        <ScrollContainer vertical={false} className="scroll-container py-2">
            <div className="d-flex">
                {sessions.map((s, index) =>
                    <Fade delay={index*300} className="h-100">
                        <div className="col-md-5 col-lg-4 col-xl-3 p-2">
                            <Session>
                                <img draggable={false} src={s.trainer.image} alt={s.trainer.name} />
                                <div className="p-1">
                                    <h4>{s.trainer.name}</h4>
                                    <h3>{s.title}</h3>
                                    <div>{s.date}</div>
                                </div>
                            </Session>
                        </div>
                    </Fade>
                )}
            </div>
        </ScrollContainer>
    </TrainingModuleWrap>

};

export default BeginnerTraining;