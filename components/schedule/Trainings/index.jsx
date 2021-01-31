import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import TrainerCard from "./TrainerCard";


const TrainingModuleWrap = styled.section`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 8vh 2vw;
    h2 {
       font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: #FFAB00;
       text-align: center;
    }
    p {
      text-align: center;
      color: #AAA;
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

const ShaktiTrainings = () => {

    const TrainersList = [
        {
            "slug": "from-n00b-to-l33t",
            "title": "From n00b to l33t",
            "sessions": [
                {
                    "date": "Friday, 26th February",
                    "time": "21:30 - 23:30 IST",
                }
            ],
            "abstract": <>
                Have you ever wondered what reverse engineering is? And how people do it? Have you been confused or
                intimidated by assembly? Then this workshop is for you! In this 2 hour workshop, you're going to learn
                about and how to do binary reverse engineering. In this workshop, no knowledge of assembly is needed.
                Only a basic comfort in understanding pseudo code is required. We'll cover the different types of
                reverse engineering, how you do it, and (hopefully!) why it's so much fun. You'll finish the
                workshop having reversed your own little program!
            </>,
            "trainer": {
                "name": "Maddie Stone",
                "designation": "Security Researcher",
                "company": "Google Project Zero",
                "links": {
                    "linkedin": "https://www.linkedin.com/in/maddie-stone-192a6544/",
                    "twitter": "https://twitter.com/maddiestone",
                    "website": "https://ragingrock.com/"
                },
                "image": require('../../../images/speakers/maddie_stone.jpg'),
                "bio": <p>
                    Maddie Stone (@maddiestone) is a Security Researcher on Google Project Zero where she focuses on
                    0-days used in-the-wild. Previously, she was a reverse engineer and team lead on the Android
                    Security team, focusing predominantly on pre-installed and off-Google Play malware.
                    Maddie also spent many years deep in the circuitry and firmware of embedded devices.
                    Maddie really loves reverse engineering and hopes you will too!
                </p>
            }
        },
        {
            "slug": "symbolic-execution-angr-for-ctf",
            "title": "Symbolic execution / angr for CTF",
            "sessions": [
                {
                    "date": "Friday, 5th March",
                    "time": "20:30 - 22:30 IST",
                },
                {
                    "date": "Friday, 12th March",
                    "time": "20:30 - 22:30 IST",
                }
            ],
            "abstract": <>
                Ctf players use z3 and angr to save time when solving reverse engineering challenges, however angr is
                a complex tool and even with tons of very detailed tutorials, the learning path is still very steep.
                In this class, we are going to solve various challenges and visit different features of angr.
                If time is available, we will also check manticore and miasm.
            </>,
            "prerequisite": [
                "Be comfortable understanding and writing Python3 code",
                "Familiarity with x86/x64 assembly"
            ],
            "requirements": [
                "VMware Workstation (at least version 12)  (no VirtualBox)",
                "At least 8GB of RAM", "At least 40GB of free disk space",
                "A laptop with administrative privileges"
            ],
            "trainer": {
                "name": "Thaís Moreira Hamasaki",
                "designation": "Offensive Security Researcher",
                "company": "Intel",
                "image": require('../../../images/speakers/thais_moreira_hamasaki.jpeg'),
                "links": {
                    "twitter": "https://twitter.com/barbieauglend",
                    "linkedin": "https://www.linkedin.com/in/barbieauglend/",
                    "website": "https://barbieauglend.re/"
                },
                "bio": <>
                    <p>
                        Thaís Moreira Hamasaki is an Offensive Security Researcher @ Intel - STORM. Previous to that, she
                        worked as a Malware Researcher @ F-Secure, with a focus on static analysis, reverse engineering,
                        and logical programming.
                    </p>
                    <p>
                        Thaís started her career within the anti-virus industry working on data and malware analysis,
                        where she developed her knowledge of threat protection systems. She won the "best rookie speaker"
                        award from BSides London for her very first talk about "Using SMT solvers to deobfuscate malware binaries".
                        Recent research topics include platform security, SMM, and GFX. She is a member of the
                        Düsseldorf Hackerspace aka Chaosdorf, where she also leads the groups for Reverse Engineering and
                        x86 Assembly. In her free time, you can find Thaís writing bad code, cooking, or climbing
                        somewhere offline.
                    </p>
                </>,
            }
        }
    ]

    return <TrainingModuleWrap id="intermediate-training">
        <div className="container-lg p-0">
            <h2>Intermediate Level Training</h2>
            <p>Intermediate level cyber-security training sessions conducted by domain experts from prominent organizations from 26th of February.</p>
            <div className="pb-4">
                {TrainersList.map((t) =>
                    <Fade key={t.slug}>
                        <div className="mb-4">
                            <TrainerCard  {...t} />
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    </TrainingModuleWrap>

};

export default ShaktiTrainings;