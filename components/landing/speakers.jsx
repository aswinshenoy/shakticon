import React from 'react';
import styled from "@emotion/styled";
import shortid from "shortid";

const SpeakersContainer = styled.div`
    background: #223;
    padding: 8vh 1rem;
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
    padding: 0 0.35rem;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    user-select: none;
    transition: all 0.5s ease;
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
      max-height: 180px;
      max-width: 100%;
      border-radius: 100vw;
      margin-bottom: 1rem;
      transition: all 0.7s ease;
      display: block;
    }
    h3 {
       font-size: calc(0.9rem + 0.15vw);
        color: #fd7e14;
        margin-bottom: 5px;
    }
    h4 {
       font-size: calc(0.75rem + 0.15vw);
       color: #eee;
       margin-bottom: 3px;
    }
    h5 {
       font-size: calc(0.8rem + 0.2vw);
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
            "name": "Marion Marschalek",
            "designation": "Senior Security Engineer, Founder",
            "company": "BlackHoodie",
            "image": require('../../images/speakers/marion.jpeg'),
        },
        {
            "name": "Rinki Sethi",
            "designation": "Vice President & CISO",
            "company": "Twitter",
            "image": require('../../images/speakers/rinki_sethi.jpg'),
            "links": {
                "twitter": "https://twitter.com/rinkisethi",
                "linkedin": "https://www.linkedin.com/in/rinkisethi"
            }
        },
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
            "isTrainer": true,
            "name": "Gal Zaban",
            "designation": "Security Researcher",
            "company": "Cymotive",
            "image": require('../../images/speakers/gal.JPG'),
            "links": {
                "twitter": "https://twitter.com/0xgalz",
                "linkedin": "https://www.linkedin.com/in/gal-zaban-02007610b/",
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
            "name": "Sung Lee",
            "designation": "Staff Security Architect",
            "company": "VMware",
            "image": require('../../images/speakers/sung.JPG'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/sylee/",
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
            "name": "Sabna Sainudeen",
            "designation": "President",
            "company": "(Women in CyberSecurity) WiCyS India ",
            "image": require('../../images/speakers/sabna.JPG'),
        },
        {
            "name": "Arya M Shankar",
            "isTrainer": true,
            "designation": "Product & Solution Security Professional",
            "company": "Siemens",
            "image": require('../../images/speakers/arya.JPG')
        },
        {
            "name": "Caroline Leman",
            "isTrainer": true,
            "designation": "Security Engineer",
            "company": "ANSSI",
            "image": require('../../images/speakers/caroline.JPG'),
        },
        {
            "name": "Bhavna Soman",
            "designation": "ML Security Researcher",
            "company": "Microsoft",
            "image": require('../../images/speakers/bhavana.JPG'),
            "links": {
                "twitter": "https://twitter.com/bsoman3",
            },
        },
        {
            "name": "Zoey Garvey",
            "isTrainer": true,
            "designation": "Consultant Software Engineer",
            "company": "Federal Reserve Bank of San Francisco",
            "image": require('../../images/speakers/zoey.jpg'),
            "links": {
                "linkedin": "https://www.linkedin.com/in/zoey-garvey-66982b34/"
            }
        },
        {
            "name": "Yarden Shafir",
            "isTrainer": true,
            "designation": "Software Engineer",
            "company": "Crowdstrike",
            "image": require('../../images/speakers/yarden_shafir.jpg'),
            "links": {
                "twitter": "https://twitter.com/yarden_shafir?lang=en"
            }
        },
        {
            "name": "Mina Sheikhalishahi",
            "designation": "Security Researcher",
            "company": " Eindhoven University of Technology",
            "image": require('../../images/speakers/mina_sheikhalishahi.jpg'),
            "links": {
                "linkedin": "https://linkedin.com/in/mina-sheikhalishahi-3184757a",
            },
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
            "name": "Sundari Nanda",
            "designation": "CVO & Special Commissioner(Vigilance)",
            "company": "Delhi Police",
            "image": require('../../images/speakers/sundarinanda.jpeg'),
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
        {
            "name": "Renu D S",
            "designation": "Penetration Test Engineer",
            "company": "Schneider",
            "image": require('../../images/speakers/renuds.png'),
        },
        {
            "name": "Priti Shrivastav",
            "designation": "Former General Manager Software Security",
            "company": "Intel Corporation",
            "image": require('../../images/speakers/priti.jpeg'),
            "links": {
                "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
            }
        },
        {
            "name": "Priyadharshini Krishnan",
            "designation": "Engineering Manager",
            "company": "American Megatrends International LLC",
            "image": require('../../images/speakers/priyadharshini.jpg'),
        },
        {
            "name": "Mehrnoosh Monshizadeh",
            "designation": "Cyber Security Specialist",
            "company": "Nokia Bell Labs",
            "image": require('../../images/speakers/mehrnoosh.jpeg'),
        },
        {
            "name": "Asha Poluru",
            "designation": "Seasoned HR Leader",
            "company": "Sophos Technologies Private Limited Regd.",
            "image": require('../../images/speakers/ashap.jpeg'),
        },
        {
            "name": "Jhilmil Kochar",
            "designation": "Managing Director",
            "company": "CrowdStrike, Pune, India",
            "image": require('../../images/speakers/jhilmil.jpeg'),
        },
        {
            "name": "Komal Armarkar",
            "designation": "Security Analyst",
            "company": "CrowdStrike",
            "image": require('../../images/speakers/komal.jpeg'),
        },
        {
            "name": "Aarti Gupta",
            "designation": "Director Engineering",
            "company": "CrowdStrike",
            "image": require('../../images/speakers/aartigupta.png'),
        },
    ];

    return <SpeakersContainer id="speakers">
        <h2>Speakers & Trainers</h2>
        <div className="row w-100 mx-0">
            {speakers.map((s, index) =>
                <div key={shortid.generate()} className="col-xl-2 col-lg-3 col-md-4 col-6 p-2">
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
                        {/*{s.links &&*/}
                        {/*<div className="social-media-links">*/}
                        {/*    {s.links?.twitter &&*/}
                        {/*    <a href={s.links.twitter} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-twitter" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.linkedin &&*/}
                        {/*    <a href={s.links.linkedin} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-linkedin" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.website &&*/}
                        {/*    <a href={s.links.website} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="far fa-globe" />*/}
                        {/*    </a>}*/}
                        {/*</div>}*/}
                    </SpeakerCard>
                </div>
            )}
        </div>
    </SpeakersContainer>

};

export default ConferenceSpeakers;
