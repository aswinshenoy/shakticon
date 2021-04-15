import React from 'react';
import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";
import Fade from "react-reveal/Fade";

const EventOrganizersSection = styled.section`
    background: #222;
    color: #EEE;
    padding: 5vh 2vw;
    h1 {
        font-weight: 600;
        font-size: calc(1.35rem + 1vw);
        margin-bottom: 15px;
    }
`;

const OrganizerCard = styled.div`
    h2 {
      font-weight: 900;
      color: white;
      font-size: calc(1.35rem + 1.25vw);
    }
    img {
        max-width: 100%;
        border-radius: 15px;
    }
    p {
      color: #DDD;
      font-size: 14px;
    }
    .social_media {
        display: inline-block;
        text-decoration: none;
        color: #FFAB00;
        border: 1px solid;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
    }
`;

const Organizer = styled.div`
  padding: 0.35rem;
  background: rgba(60,60,120,0.45);
  border: 2px solid #9C27B0;
  border-radius: 10px;
  user-select: none;
  transition: all 0.5s ease;
  color: #DDD;
  display: block;
  width: 200px;
  max-width: 60vw;
  margin: 10px 6px;
  text-align: center;
  h5 {
      line-height: 1;
      margin-bottom: 5px;
  }
  img {
    height: 150px;
    padding: 10px;
    border-radius: 20px;
  }
  .social-media-links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    a {
      margin-right: 13px;
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
  }
`;

const EventOrganizers = ({

}) => {

    const organizersList = [
        {
            "name": "Ashwin Shenoy",
            "image": require('../../images/crew/ashwinshenoy.jpeg'),
            "links": {
                "twitter": "https://twitter.com/aswinshenoy_",
                "linkedin": "https://www.linkedin.com/in/aswinshenoy/"
            }
        },
        {
            "name": "Swathi Kasikala",
            "image": require('../../images/crew/swathikasikala.jpeg'),
            "links": {
                "twitter": "https://twitter.com/mflash54",
                "linkedin": "https://www.linkedin.com/in/swathi-kasikala-2938a9179/"
            }
        },
        {
            "name": "Shruti Dixit",
            "image": require('../../images/crew/shruthi.jpg'),
            "links": {
                "twitter": "https://twitter.com/rudyerudite",
                "linkedin": "https://www.linkedin.com/in/shruti-dixit-489047166/"
            }
        },
        {
            "name": "Geethna T K",
            "image": require('../../images/crew/geethna.jpg'),
            "links": {
                "twitter": "https://twitter.com/GeethnaTk",
                "linkedin": "https://www.linkedin.com/in/geethna-t-k-a51047166/"
            }
        },
        {
            "name": "Ashwathi Sasi",
            "image": require('../../images/crew/ashwathi.jpg'),
            "links": {
                "twitter": "https://twitter.com/Ashwathi_sasi",
                "linkedin": "https://www.linkedin.com/in/ashwathi-sasi-64341a90/"
            }
        },
        {
            "name": "Sowmya Potluri",
            "image": require('../../images/crew/sowmya.jpg'),
            "links": {
                "twitter": "https://twitter.com/__4lph4__",
                "linkedin": "https://www.linkedin.com/in/sowmya-potluri-0605a7162/"
            }
        },
        {
            "name": "Ayushi Sharma",
            "image": require('../../images/crew/Ayushi.jpg'),
            "links": {
                "twitter": "https://twitter.com/AyushiSharmax86",
                "linkedin": "https://www.linkedin.com/in/ayushi-sharma-8381301b0/"
            }
        },
        {
            "name": "Nimisha Dughyala",
            "image": require('../../images/crew/Nimisha.jpg'),
            "links": {
                "twitter": "https://twitter.com/nimishadughyala",
                "linkedin": "https://www.linkedin.com/in/nimisha-dughyala/"
            }
        },
        {
            "name": "Sandra Bino",
            "image": require('../../images/crew/sandhra.jpg'),
            "links": {
                "twitter": "https://twitter.com/SandhraBino",
                "linkedin": "https://www.linkedin.com/in/sandra-bino-734433187"
            }
        },
        {
            "name": "Meenakshi S L",
            "image": require('../../images/crew/meenakshi.jpg'),
            "links": {
                "twitter": "https://twitter.com/MeenakshiSl1",
                "linkedin": "https://www.linkedin.com/in/meenakshisl"
            }
        },
        {
            "name": "Simran Kathpalia",
            "image": require('../../images/crew/simran.jpg'),
            "links": {
                "twitter": "https://twitter.com/SimranKathpalia",
                "linkedin": "https://www.linkedin.com/in/simran-kathpalia-31539b1a4/"
            }
        },
        {
            "name": "Namitha S",
            "image": require('../../images/crew/namitha.jpg'),
            "links": {
                "twitter": "https://twitter.com/N4m1th4_01",
                "linkedin": "https://www.linkedin.com/in/namitha-s-88a493196/"
            }
        },
        {
            "name": "Sridevi Krishnan",
            "image": require('../../images/crew/sridevi.jpg'),
            "links": {
                "twitter": "https://twitter.com/SrideviKrishn16",
                "linkedin": "https://www.linkedin.com/in/sridevi-krishnan/"
            }
        }
    ]


    return <EventOrganizersSection>
        <div className="container-lg px-2">
            <h1>ShaktiCon Organizers</h1>
            <OrganizerCard className="row mx-0">
                <Fade left>
                    <div className="col-md-4 p-2">
                        <img alt="Vipin Pavithran" draggable="false" src={require('../../images/crew/vipin_sir.jpg')} />
                    </div>
                </Fade>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <Fade right>
                        <div>
                            <h2 className="text-warning">Vipin Pavithran</h2>
                            <div className="mb-2" style={{ color: 'white', fontWeight: '600' }}>
                                <div>Chief Mentor & Founder - team bi0s, amFOSS, team Shakti</div>
                                <div>Organizer of InCTF & ShaktiCon</div>
                            </div>
                            <p>
                                Vipin Pavithran is an assistant professor at Amrita Center for Cybersecurity Systems and Networks,
                                Amrita Vishwa Vidyapeetham. Prior to joining Amrita he has worked for 10 years in the software industry.
                                Being passionate about helping students to develop their talent and to make them reach their potential,
                                he founded the internationally recognised student clubs - amFOSS, Team bi0s and Team Shakti, and
                                today mentors over 200 engineering students through these clubs to achieve excellence.
                                team bi0s was India's first-ever CTF team when it was formed in 2007, and it was this team that founded
                                the InCTF in 2010, which was the first-ever CTF contest to be organized in India.
                            </p>
                            <div>
                                <a href="https://twitter.com/Th3_M3nt0r" target="_blank" rel="nofollow noopener">
                                    <i className="fab fa-twitter mr-1" /> Follow on Twitter
                                </a>
                                <a href="https://www.linkedin.com/in/vipin-pavithran/" target="_blank">
                                    <i className="fab fa-twitter mr-1" /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </OrganizerCard>
            <OrganizerCard className="row mx-0">
                <Fade left>
                    <div className="col-md-4 p-2">
                        <img alt="Sreepriya Chalakkal" draggable="false" src={require('../../images/crew/sreepriya.jpg')} />
                    </div>
                </Fade>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <Fade right>
                        <div>
                            <h2 className="text-warning">Sreepriya Chalakkal</h2>
                            <div className="mb-2" style={{ color: 'white', fontWeight: '600' }}>
                                <div>Mentor - Team Shakti</div>
                                <div>Organizer of ShaktiCon</div>
                            </div>
                            <p>
                                Sreepriya is a Security Analyst at Siemens ProductCERT, where she focuses on vulnerability 
                                handling and incident response. Previously she worked as a pentester at Ernw GmbH, Germany, 
                                in the mobile security team. She enjoys playing with security challenges in applications, 
                                networks and binaries. She is mentor of TeamShakti, a women CTF team from India. Also, core 
                                organiser of <a href="https://shakticon.com">ShaktiCon</a>, a women only security conference. 
                                Also serves as a board member of <a href="https://blackhoodie.re">BlackHoodie</a>. Completed 
                                masters from Technical University of Berlin and University of Trento with major Computer Security 
                                and Privacy in March 2017.
                            </p>
                            <div>
                                <a class="social_media"  href="https://twitter.com/priyachalakkal" target="_blank" rel="nofollow noopener">
                                    <i className="fab fa-twitter mr-1" /> Follow on Twitter
                                </a>
                                <a class="social_media"  href="https://www.linkedin.com/in/sreepriyac/" target="_blank">
                                    <i className="fab fa-twitter mr-1" /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </OrganizerCard>
            <OrganizerCard className="row mx-0">
                <Fade left>
                    <div className="col-md-4 p-2">
                        <img alt="Sowmya Ravidas" draggable="false" src={require('../../images/crew/sowmyaravidas.jpg')} />
                    </div>
                </Fade>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <Fade right>
                        <div>
                            <h2 className="text-warning">Sowmya Ravidas</h2>
                            <div className="mb-2" style={{ color: 'white', fontWeight: '600' }}>
                                <div>Organizer of ShaktiCon</div>
                            </div>
                            <p>
                                Sowmya Ravidas is pursuing her PhD in the Security Group at Eindhoven University of Technology 
                                in the Netherlands. Her research interests include various aspects of access control in the 
                                domain of IoT. In particular, her works focus on understanding attribute retrieval in Attribute-based 
                                access control (ABAC) and developing fine grained access control frameworks for distributed architectures 
                                such as IoT. Previously she has also worked on cloud security and NFV. <br />
                                <br />
                                Prior to joining TU Eindhoven, she received her master's degree in 'Mobile Computing- Security and 
                                Services' from Aalto University in Finland. She also worked with Nokia Bell Labs for a year as a Master 
                                Thesis Student and as a research assistant at Aalto University. She received her bachelor degree in 
                                'Computer Science and Engineering' from <a href="https://amrita.edu">Amrita University</a>, India.
                            </p>
                            <div>
                                <a class="social_media"  href="https://twitter.com/ravidas_sowmya" target="_blank" rel="nofollow noopener">
                                    <i className="fab fa-twitter mr-1" /> Follow on Twitter
                                </a>
                                <a class="social_media" href="https://www.linkedin.com/in/sowmya-ravidas-0a538036/" target="_blank">
                                    <i className="fab fa-twitter mr-1" /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </OrganizerCard>
            <OrganizerCard className="row mx-0">
                <Fade left>
                    <div className="col-md-4 p-2">
                        <img alt="Savita Seetaraman" draggable="false" src={require('../../images/crew/savita.jpeg')} />
                    </div>
                </Fade>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <Fade right>
                        <div>
                            <h2 className="text-warning">Savita Seetaraman</h2>
                            <div className="mb-2" style={{ color: 'white', fontWeight: '600' }}>
                                <div>Organizer of ShaktiCon</div>
                            </div>
                            <p>
                                Savita will soon start as a DevOps Engineer at <a href="https://taxy.io">Taxy.io</a>. Previously she worked 
                                at Ericsson as a Cloud Open Source Developer. She was a Google Women TechMaker in the year 2016 - 2017.<br /> 
                                <br />
                                She did her Masters in Computer Science with a specialization in Security and Privacy and Innovation and 
                                Entrepreneurship, from EIT Digital Master School. She completed her Masters thesis in SAP SE, Germany. She 
                                received her bachelor degree in Computer Science and Engineering from <a href="https://amrita.edu">Amrita University</a>, India.
                            </p>
                            <div>
                                <a class="social_media" href="https://twitter.com/savitats" target="_blank" rel="nofollow noopener">
                                    <i className="fab fa-twitter mr-1" /> Follow on Twitter
                                </a>
                                <a class="social_media" href="https://www.linkedin.com/in/savitaseetaraman/" target="_blank">
                                    <i className="fab fa-twitter mr-1" /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </OrganizerCard>
            <OrganizerCard className="row mx-0">
                <Fade left>
                    <div className="col-md-4 p-2">
                        <img alt="Surya Seetharaman" draggable="false" src={require('../../images/crew/surya.jpeg')} />
                    </div>
                </Fade>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <Fade right>
                        <div>
                            <h2 className="text-warning">Surya Seetharaman</h2>
                            <div className="mb-2" style={{ color: 'white', fontWeight: '600' }}>
                                <div>Organizer of ShaktiCon</div>
                            </div>
                            <p>
                                Surya Seetharaman is a Software Engineer working at RedHat, Berlin on Cloud Networking. 
                                She is an avid advocate of OpenSource and OpenInfra. Prior to working at RedHat, she was 
                                working at CERN in Geneva, Switzerland on cloud technologies. She holds a Masters' degree 
                                in Networked Services and Systems from KTH Royal Institute of Technology, Stockholm, 
                                Sweden and her bachelor degree in Computer Science and Engineering from <a href="https://amrita.edu">Amrita University</a>, India.
                            </p>
                            <div>
                                <a class="social_media" href="https://twitter.com/ItsSuryaShining" target="_blank" rel="nofollow noopener">
                                    <i className="fab fa-twitter mr-1" /> Follow on Twitter
                                </a>
                                <a class="social_media" href="https://www.linkedin.com/in/tssurya" target="_blank">
                                    <i className="fab fa-twitter mr-1" /> Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </OrganizerCard>
            <div className="py-3">
                <h3 className="mb-0">Student Organizers</h3>
                <ScrollContainer vertical={false} hideScrollbars={false} className="scroll-container py-2">
                    <div className="d-flex p-2">
                        {organizersList.map((o, index) =>
                            <Fade delay={index*150} className="h-100">
                                <Organizer>
                                    <img draggable={true} src={o.image} alt={o.name} />
                                    <div className="p-1">
                                        <h5>{o.name}</h5>
                                        <div className="social-media-links mt-3">
                                            {o.links?.twitter &&
                                            <a href={o.links.twitter} rel="noreferrer nofollow" target="_blank">
                                                <i className="fab fa-twitter" />
                                            </a>}
                                            {o.links?.linkedin &&
                                            <a href={o.links.linkedin} rel="noreferrer nofollow" target="_blank">
                                                <i className="fab fa-linkedin" />
                                            </a>}
                                            {o.links?.website &&
                                            <a href={o.links.website} rel="noreferrer nofollow" target="_blank">
                                                <i className="far fa-globe" />
                                            </a>}
                                        </div>
                                    </div>
                                </Organizer>
                            </Fade>
                        )}
                    </div>
                </ScrollContainer>
            </div>

        </div>
    </EventOrganizersSection>

};

export default EventOrganizers;