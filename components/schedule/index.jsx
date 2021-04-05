import React, { useState } from "react";
import styled from "@emotion/styled";
import ScheduleDay from "./ScheduleDay";

const ScheduleModuleWrap = styled.section`
    background: #113;
    color: #eee;
    min-height: 45vh;
    padding: 10vh 2vw;
`;

const TabSwitcher = styled.div`
    button {
        border: none;
        padding: 5px 8px;
        background: #F50057;
        color: white;
        &:focus {
            outline: none!important;
        }
    }
    .is_active {
        background: white;
        color: #F50057;
    }
`;

const ConferenceSchedule = () => {

    const [activeDay, setActiveDay] = useState(0);

    const scheduleList = [
        {
            "date": "09 April 2020",
            "title": "Day 1",
            "events": [
                {
                    "time": "08:00 - 08:30 IST",
                    "title": "Keynote",
                    "speakers": [
                        {
                            "name": "Marion Marschalek",
                            "designation": "Founder",
                            "organization": "BlackHoodie",
                            "avatar": require('../../images/speakers/marion.jpeg')
                        }
                    ],
                },
                {
                    "time": "08:30 - 09:30 IST",
                    "title": "Keynote",
                    "speakers": [
                        {
                            "name": "Rinki Sethi",
                            "designation": "Vice President & CISO",
                            "organization": "Twitter",
                            "avatar": require('../../images/speakers/rinki_sethi.jpg')
                        }
                    ],
                },
                {
                    "time": "09:30 - 10:30 IST",
                    "title": "Inaugural Session",
                    "speakers": [
                    
                        {
                            "name": "Krishnashree Achuthan",
                            "designation": "Director",
                            "organization": "Amrita Center for Cybersecurity Systems and Networks",
                            "avatar": require('../../images/speakers/dr_krishnasree.jpg')
                        },
                        {
                            "name": "Eric Falt",
                            "designation": "Director",
                            "organization": "UNESCO New Delhi Cluster",
                            "avatar": require('../../images/speakers/ericfalt.jpeg')
                        },
                        {
                            "name": "Meenakshi Lekhi",
                            "designation": "Member of Parliament",
                            "organization": "Government of India",
                            "avatar": require('../../images/speakers/meenakshilekhi.jpg')
                        },
                        
                        {
                            "name": "Swamini Krishnamrita Prana",
                            "designation": "Senior Disciple",
                            "organization": "Mata Amritanandamayi Math",
                            "avatar": require('../../images/speakers/krishnamritaprana.jpeg')
                        },
                        {
                            "name": "Sreepriya Chalakkal",
                            "designation": "Security Analyst",
                            "organization": "Siemens",
                            "avatar": require('../../images/crew/sreepriya_chechi.jpg')
                        },
                    ],
                },
                {
                    "time": "11:30 - 12:15 IST",
                    "title": "Keynote",
                    "speakers": [
                        {
                            "name": "Neeta Varma",
                            "designation": "Director General",
                            "organization": "National Informatics Centre",
                            "avatar": require('../../images/speakers/neetavarma.jpeg')
                        }
                    ],
                },
                {
                    "time": "12:15 - 12:45 IST",
                    "title": "From Technologist to Board Room, a Cybersecurity Journey",
                    "speakers": [
                        {
                            "name": "Sanju Misra",
                            "designation": "VP & CISO",
                            "organization": "Alnylam Pharmaceuticals",
                            "avatar": require('../../images/speakers/sanju_misra.jpg')
                        }
                    ],
                },
               {
                    "time": "15:00 - 16:00 IST",
                    "title": "Understanding Bluetooth Security",
                    "speakers": [
                        {
                            "name": "Renu D S",
                            "designation": "Penetration Test Engineer",
                            "organization": "Schneider-Electric",
                            "avatar": require('../../images/speakers/renuds.png')
                        },
                        
                    ],
                },
                {
                    "time": "16:00 - 17:00 IST",
                    "title": "Threat Modeling",
                    "speakers": [
                        {
                            "name": "Sung Lee",
                            "designation": "Staff Security Architect",
                            "organization": "VMware",
                            "avatar": require('../../images/speakers/sung.JPG')
                        },
                        
                    ],
                },  
                {
                    "time": "17:00 - 17:30 IST",
                    "title": "CyberSecurity in OT Environment",
                    "speakers": [
                        {
                            "name": "Luisa Montealegre",
                            "designation": "OT Cybersecurity Specialist",
                            "organization": "Siemens",
                            "avatar": require('../../images/speakers/luisa.jpeg')
                        },
                        
                    ],
                },  
                {
                    "time": "20:30 - 21:30 IST",
                    "title": "Try your hand at Machine Learning for Security",
                    "speakers": [
                        {
                            "name": "Bhavna Soman",
                            "designation": "ML Security Researcher",
                            "organization": "Microsoft",
                            "avatar": require('../../images/speakers/bhavana.JPG')
                        },
                        
                    ],
                },  
                {
                    "time": "21:30 - 22:00 IST",
                    "title": "Internet of Drones Security",
                    "speakers": [
                        {
                            "name": "Mehrnoosh Monshizadeh",
                            "designation": "Cyber Security Specialist",
                            "organization": "Nokia Bell Labs",
                            "avatar": require('../../images/speakers/mehrnoosh.jpeg')
                        },
                        
                    ],
                },  
                  
            ]
        },
        {
            "date": "10 April 2020",
            "title": "Day 2",
            "events": [
                {
                    "time": "08:00 - 08:30 IST",
                    "title": "A Pragmatic Approach on Software Security",
                    "speakers": [
                        {
                            "name": "Priti Shrivastava",
                            "designation": "Former General Manager Software Security",
                            "organization": " Intel Corporation",
                            "avatar": require('../../images/speakers/priti.jpeg')
                        }
                    ],
                },
                {
                    "time": "08:30 - 09:00 IST",
                    "title": "Achieving Excellence in Cybersecurity",
                    "speakers": [
                        {
                            "name": "Asha Poluru",
                            "designation": "Head HR",
                            "organization": " Sophos, India",
                            "avatar": require('../../images/speakers/AshaP.jpg')
                        }
                    ],
                },
                {
                    "time": "09:00 - 09:30 IST",
                    "title": "Decoding the Cybersecurity Career Path",
                    "speakers": [
                        {
                            "name": "Sabna Sainudeen",
                            "designation": "President",
                            "organization": " (Women in CyberSecurity) WiCyS India",
                            "avatar": require('../../images/speakers/sabna.JPG')
                        }
                    ],
                },
                {
                    "time": "09:30 - 10:30 IST",
                    "title": "CTFs and Cybersecurity Reasearch",
                    "speakers": [
                        {
                            "name": "Tiffany Bao",
                            "designation": "Assistant Professor",
                            "organization": " Arizona State University",
                            "avatar": require('../../images/speakers/tiffany.jpg')
                        }
                    ],
                },
                {
                    "time": "10:30 - 11:00 IST",
                    "title": "Cyber Event - How to treat it right?",
                    "speakers": [
                        {
                            "name": "Liora Itkin",
                            "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
                            "organization": " Israel Ministry of Defense",
                            "avatar": require('../../images/speakers/lioraitkin.jpeg')
                        }
                    ],
                },
                
                {
                    "time": "11:30 - 13:00 IST",
                    "title": "Panel Discussion: Cybercrime and Pathways",
                    "speakers": [
                        {
                            "name": "Sundari Nanda",
                            "designation": "CVO & Special Commissioner(Vigilance)",
                            "organization": "Delhi Police",
                            "avatar": require('../../images/speakers/sundarinanda.jpeg')
                        },
                        {
                            "name": "Liora Itkin",
                            "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
                            "organization": " Israel Ministry of Defense",
                            "avatar": require('../../images/speakers/lioraitkin.jpeg')
                        },
                        {
                            "name": "Krishnashree Achuthan",
                            "designation": "Director",
                            "organization": "Amrita Center for Cybersecurity Systems and Networks",
                            "avatar": require('../../images/speakers/dr_krishnasree.jpg')
                        },
                        {
                            "name": "Evelyn Kilel",
                            "designation": "Co-Founder",
                            "organization": "SheHacksKe",
                            "avatar": require('../../images/speakers/evelynkilel.jpeg')
                        },
                        {
                            "name": "Anyesh Roy",
                            "designation": "IPS - DCP",
                            "organization": "Cyber Crime, Delhi Police",
                            "avatar": require('../../images/speakers/anyeshroy.png')
                        }
                    ],
                    },
                    
                    
                {
                    "time": "15:00 - 16:00 IST",
                    "title": "Recon to Software Supply Chain Attack",
                    "speakers": [
                        {
                            "name": "Komal Armarkar",
                            "designation": "Security Analyst",
                            "organization": "CrowdStrike",
                            "avatar": require('../../images/speakers/komal.jpeg')
                        }
                    ],
                },
                {
                    "time": "16:00 - 16:45 IST",
                    "title": "Kick-Start to Secure Software Development",
                    "speakers": [
                        {
                            "name": "Arya M Sankar",
                            "designation": "Security Researcher",
                            "organization": "Siemens",
                            "avatar": require('../../images/speakers/arya.JPG')
                        }
                    ],
                },
                {
                    "time": "16:45 - 17:30 IST",
                    "title": "Techiniques and tooling with FLARE-ON'20",
                    "speakers": [
                        {
                            "name": "Sreelakshmi Panangatt",
                            "designation": "Security Engineer",
                            "organization": "VMware",
                            "avatar": require('../../images/speakers/sreelakshmi.JPG')
                        }
                    ],
                },
                {
                    "time": "20.30 - 21.30 IST",
                    "title": "Privacy preserving Data Analysis",
                    "speakers": [
                        {
                            "name": "Mina Sheikhalishahi",
                            "designation": "Security Researcher",
                            "organization": "Eindhoven University of Technology",
                            "avatar": require('../../images/speakers/mina_sheikhalishahi.jpg')
                        }
                    ],
                },
                {
                    "time": "21:30 - 22:30 IST",
                    "title": "Cyber Security of Embedded Networks in Heavy Vehicles",
                    "speakers": [
                        {
                            "name": "Indrakshi Ray",
                            "designation": "Professor, Computer Science Department",
                            "organization": "Colorado State University",
                            "avatar": require('../../images/speakers/indrakshiray.jpeg')
                        }
                    ],
                },
            ],
        },
        {
            "date": "11 April 2020",
            "title": "Day 3",
            "events": [
            {
                    "time": "08:30 - 09:30 IST",
                    "title": "Introduction to Fuzzing",
                    "speakers": [
                        {
                            "name": "Allison Marie Naaktgeboren",
                            "designation": "PhD Student",
                            "organization": "Portland State University",
                            "avatar": require('../../images/speakers/allison.jpg')
                        }
                    ],
                },
                {
                    "time": "10:30 - 11:30 IST",
                    "title": "Preventing cyber attacks together - The Power of Collaboration",
                    "speakers": [
                        {
                            "name": "Karine Ben-Simhon",
                            "designation": "VP, Cyber Intelligence Center and TLV Innovation",
                            "organization": "Citi, Israel",
                            "avatar": require('../../images/speakers/karinebensimhon.jpeg')
                        },
                    ],
                },
                {
                    "time": "11:30 - 12:30 IST",
                    "title": "Keynote",
                    "speakers": [
                        {
                            "name": "Rama Vedashree ",
                            "designation": "CEO",
                            "organization": "Data Security Council of India",
                            "avatar": require('../../images/speakers/ramavedashree.jpeg')
                        }
                    ],
                },
                {
                    "time": "15:00 - 16:00 IST",
                    "title": "Firmware Security Introduction",
                    "speakers": [
                        {
                            "name": "Priyadharshini Krishnan",
                            "designation": "Engineering Manager",
                            "organization": "American Megatrends International LLC",
                            "avatar": require('../../images/speakers/priyadharshini.jpg')
                        }
                    ],
                },
                {
                    "time": "16:00 - 17:00 IST",
                    "title": "Security at Cloud Scale",
                    "speakers": [
                        {
                            "name": "Aarti Gupta",
                            "designation": "Director Engineering",
                            "organization": " CrowdStrike",
                            "avatar": require('../../images/speakers/aartigupta.png')
                        }
                    ],
                },
            ],
        }
    ]
    
    return <ScheduleModuleWrap>
        <div className="container-lg px-0 p-md-2">
            <div className="row mx-0">
                <div className="col-md-8 my-5 my-md-0 px-3 px-md-2">
                    <h1>ShaktiCon Schedule</h1>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                    <TabSwitcher>
                        {scheduleList?.map((day, index) =>
                            <button
                                className={index===activeDay ? 'is_active' : null}
                                onClick={() => setActiveDay(index)}
                            >
                                {day.title}
                            </button>
                        )}
                    </TabSwitcher>
                </div>
            </div>
            <div className="p-1 p-md-2">
                <ScheduleDay {...scheduleList[activeDay]} />
            </div>
        </div>
    </ScheduleModuleWrap>

};

export default ConferenceSchedule;
