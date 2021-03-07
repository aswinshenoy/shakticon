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
       font-size: calc(1.35rem + 1.25vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: #FFAB00;
       text-align: center;
    }
    p {
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

const ShaktiTrainings = ({ hideTitle = false }) => {

    const TrainersList = [
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
                <p>
                    Symbolic execution is a powerful tool for code verification, bug hunting and reverse engineering.
                    In this class, we will dive into the concepts of constraint programming and SMT solvers and how
                    binary analysis tools, such as angr, integrate these concepts into their frameworks.
                </p>
                <p>
                    It is going to be a very practical class, where we are going to solve various CTF challenges with
                    the goal of visiting different features of angr.
                </p>
                <p>
                    Most of CTF players use z3 and angr to save time when solving reverse engineering challenge and
                    that is also the path we are going to take.
                </p>
                <p>
                    If time is available, we will also check manticore and miasm, two other tools with symbolic
                    execution engines with different features!
                </p>
            </>,
            "prerequisite": [
                "Be comfortable understanding and writing Python3 code",
                "Familiarity with x86/x64 assembly"
            ],
            "requirements": [
                "VMware Workstation or Player (at least version 12) (no VirtualBox)",
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
            },
            "registerURL": "https://register.shakticon.com/"
        },
        {
            "slug": "reversing-cpp-binaries",
            "title": "Reverse Engineering C++ binaries",
            "sessions": [
                {
                    "date": "Saturday, 20th March",
                    "time": "18:30 - 22:30 IST"
                },
                {
                    "date": "Sunday, 28th March",
                    "time": "18:30 - 22:30 IST"
                }
            ],
            "registerURL": "https://register.shakticon.com/",
            "abstract": <>
                <p>
                    This training is the shortened version of my original "Reversing and Auditing C++ Binaries", this
                    course will be a class for security researchers who want to expand their horizons and skills in
                    reversing C++ binaries.
                </p>
                <p>
                    C++ Binaries are full of mysteries, they have objects, inheritance, templates, vtables and many
                    more and reverse engineering them is a task on its own. In order to correctly and clearly map a
                    C++ compiled binary it requires a vast knowledge of C++ Internals.
                </p>
                <p>
                    The training will explain C++ reverse engineering topics including techniques and tools for
                    dealing with C++ Binaries research. We will start with the identification of basic structures
                    in C++ and continue with C++ Objects and Inheritance in a binary and how to represent them in IDA.
                </p>
                <p>
                    Afterward, we will also study work methods and design patterns in C++. Finally, we will practice,
                    fight and untangle deep and modern C++ programs using static and dynamic analysis.
                </p>
            </>,
            "trainer": {
                "name": "Gal Zaban",
                "designation": "Security Researcher",
                "company": "Cymotive",
                "image": require('../../../images/speakers/gal.JPG'),
                "links": {
                    "twitter": "https://twitter.com/0xgalz",
                    "linkedin": "https://www.linkedin.com/in/gal-zaban-02007610b/",
                },
                "registerURL": "https://register.shakticon.com/",
                "bio": <p>
                    Gal Zaban is a Reverse Engineer with a particular interest in C++ code, currently working as a
                    Vulnerability Researcher in the Automotive Industry. As part of her journey in understanding the
                    catacombs of C++, she developed various RE tools for C++ including 'Virtuailor'.
                    In her spare time when she's not dwelling into low-level research, she designs and sews her
                    own clothes and plays the Clarinet.
                </p>
            },
        },
        {
            "slug": "owasp-juice-shop",
            "title": "OWASP Juice Shop - Web Application Penetration Testing Basics",
            "sessions": [
                {
                    "date": "Sunday, 21st March",
                    "time": "08:00 - 10:00 IST"
                }
            ],
            "registerURL": "https://register.shakticon.com/",
            "abstract": <>
                This training will introduce you to web application penetration testing on a single page
                application and get you familiar with some of the OWASP Top 10. We'll start by learning
                some basics about single page applications and how they're setup, and some of the tools,
                resources and options for enumerating and attacking web applications.  We'll then move on
                to learning the basics of SQL injection, XSS, and Broken Access Control, and put those skills
                into practice attacking the OWASP Juice Shop.  We can explore other topics as time permits.
                You'll also be able to use the VM for self-guided study after the session is over.
            </>,
            "prerequisite": [
                "A VM will be provided that includes everything necessary for the training. You'll need virtualbox or VMWare.",
                "Basic familiarity with HTTP, HTML, JavaScript(or another language), SQL and how web servers work will be helpful, but is not required.   We can gauge the class's experience levels at the beginning and go from there."
            ],
            "trainer": {
                "name": "Zoey Garvey",
                "isTrainer": true,
                "designation": "Consultant Software Engineer",
                "company": "Federal Reserve Bank of San Fransisco",
                "image": require('../../../images/speakers/zoey.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/zoey-garvey-66982b34/"
                },
                "bio": <p>
                    Zoey Garvey has decades of experience coding and building web applications, and more
                    recently has pivoted to breaking and securing them, as well as contributing web challenges
                    to various training platforms and CTFs.
                </p>
            },
        },
        {
            "slug": "understanding-tls-mitm-attacks",
            "title": "Understanding TLS and MITM Attacks",
            "sessions": [
                {
                    "date": "Saturday, 13th March",
                    "time": "12:30 - 15:30 IST"
                },
                {
                    "date": "Sunday, 14th March",
                    "time": "12:30 - 15:30 IST"
                }
            ],
            "registerURL": "https://register.shakticon.com/",
            "abstract": <>
                <p>Have you ever wanted to know why Firefox warns you about concretely when the big "THIS PAGE IS UNSECURE" appears ?</p>
                <p>Well, in this workshop we will be doing what Firefox tries to protect you from: Eavesdropping someone's network.</p>
                <div>We'll go from theory to practice:</div>
                <div>How do you get packets supposed to go from a computer to another to come to your machine ?</div>
                <div>
                    That's called the Women-In-The-Middle attack, and we'll use Scapy (pre-installed in kali linux) to
                    do that using a technique called ARP-Spoofiing.
                </div>
                <div>
                    And even if this look fun, you might know that nowadays traffic is encrypted so what can we do with these encrypted packets ?
                </div>
                <div>
                    Firstly we'll go through the basics of TLS, seeing how does your connection gets encrypted and how the trust
                    between client and server is built : that's the part where certificates signature and verification arrives.
                </div>
                <div>
                    With these basics, we'll see what could go wrong, what happens if you say to firefox "No, I understand the risks and continue" from the attacker's perspective.
                </div>
                <div>
                    I have prepared pair of VMs for each of you and you will be able to really eavesdrop on this small environment - it's really a hands on intro to WITM attacks and network interception.
                </div>
                <div>
                    After this training, you will:
                </div>
                <ul>
                    <li>have performed a WITM attack with Scapy</li>
                    <li>know how to manually generate TLS certificates</li>
                    <li>have a better idea of what Burp or ZAP proxy do when they "intercept TLS traffic"</li>
                    <li>better understand your browser's security messages</li>
                    <li>have an overview of what TLS is for and what is concretly protects us from</li>
                </ul>
            </>,
            "trainer": {
                "name": "Caroline Leman",
                "designation": "Security Engineer",
                "company": "ANSSI",
                "image": require('../../../images/speakers/caroline.JPG'),
                "bio": <p>
                    Caroline is a reverse engineer, security enthousiast and feminist. She has been contributing
                    to miasm (https://github.com/cea-sec/miasm).
                </p>
            },
        },
        {
            "slug": "kick-start-to-secure-software-development",
            "title": "Kick-Start to Secure Software Development.",
            "sessions": [
                {
                    "date": "Saturday, 27th March",
                    "time": "20:30 - 21:30 IST"
                }
            ],
            "registerURL": "https://register.shakticon.com/",
            "abstract": <>
                <p>We read, write and understand Code :)</p>
                <p>
                    There is a popular misconception that those who code can develop software. Yes, they can, but not
                    always secured, reliable and efficient ones. And who would buy it? If someone does, for how long
                    would it serve!
                </p>
                <p>
                    This training would focus on enlightening about good and bad coding, which is the backbone of
                    Secure Software Development. Take you through the overall software development architecture,
                    an in-depth understanding of each stage and a quick peek into adversary entry points. Finally to
                    the world of secure coding, a vast domain which is least explored and splendid opportunity for
                    the skilled ones.
                </p>
                <p>
                    If you believe that you deliver good code, you might rethink after the session. If you don’t code,
                    life would be much easier learning the right things the right way than re-learning later.
                </p>
            </>,
            "trainer": {
                "name": "Arya M Shankar",
                "designation": "Product & Solution Security Professional",
                "company": "Siemens",
                "image": require('../../../images/speakers/arya.JPG'),
                "bio": <p>
                    As a Product and Solution Security Professional at Siemens I am currently into Secure Software
                    Development (R&D) and  Cyber Security Analyst roles. Also have experience working in sensitive
                    projects for Indian govt. defence organisations(DRDO - R&D). Have 4+ years of experience in
                    different domain of Cyber Security. Pursued Masters in Cyber Security Systems & Networks with a
                    bachelors in Computer Science Engineering.
                </p>
            },
        },
        {
            "slug": "network-traffic-analysis",
            "title": "Network Traffic Analysis",
            "sessions": [
                {
                    "date": "Friday, 19th February",
                    "time": "20:30 - 22:00 IST",
                }
            ],
            "abstract": <>
                This training will introduce you to the basic of traffic analysis. We will see how messages and
                files are transmitted over the network depending on the protocol being used and see which of
                them send the data encrypted and which not. The training will explain what are the things you
                need to focus on when analyzing a traffic dump and what kind of data and information you can get
                from it. You want to know how to get confidential information sent over the network? Or how an
                attack looks like from the packets perspective? We will finish the training by analyzing a couple
                of example so you can get your hand dirty!
            </>,
            "trainer": {
                "name": "Silvia Nerea Anguita",
                "designation": "Cybersecurity Auditor",
                "company": "Siemens",
                "image": require('../../../images/speakers/silvia.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/silvia-anguita/"
                },
                "bio": <p>
                    Silvia Nerea Anguita (@silvianerea_) is a Cybersecurity Auditor at Siemens. On a day to day she
                    works identifying security vulnerabilities in Siemens infrastructure, products and services.
                    Prior to that she worked as a penetration tester for 2 years mainly focusing on web and mobile
                    applications. Studied a bachelors in Computer Science and a masters degree in Cybersecurity.
                </p>
            },
            // "registerURL": "https://docs.google.com/forms/d/e/1FAIpQLSejhMQTxn0n3w1IY0gA6q3ybRT0T3khVhkk5ZvYFHRkOO-Okg/viewform"
        },
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
            },
            // "registerURL": "https://docs.google.com/forms/d/e/1FAIpQLSe_wWy9Q8E_CExv_1V5xOiDY3RnjH9FCvG28ljaaWj8FQZEWA/viewform?usp=send_form"
        },
    ]

    return <TrainingModuleWrap id="intermediate-training">
        <div className="container-lg p-0">
            {!hideTitle && <h2>Featured Trainings</h2>}
            <div className="py-4 px-2">
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