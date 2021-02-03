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

const VipinSirCard = styled.div`
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
    a {
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
  }
`;

const EventOrganizers = ({

}) => {

    const organizersList = [
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
            "name": "Gopika S",
            "image": require('../../images/crew/gopika.jpg'),
            "links": {
                "twitter": "https://twitter.com/m0n574",
                "linkedin": "https://www.linkedin.com/in/gopika-subramanian-007304b5/"
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
            <VipinSirCard className="row mx-0">
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
                                he founded the internationally recognised student clubs- amFOSS, Team bi0s and Team Shakti, and
                                today mentors over 200 engineering students through these clubs to achieve excellence. His team bi0s
                                was India's first-ever CTF team when it was formed in 2007, and it was his idea and efforts that resulted
                                in birth of InCTF in 2010, which was the first-ever CTF contest to be organized in India.
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
            </VipinSirCard>
            <div className="py-3">
                <h3 className="mb-0">Student Organizers</h3>
                <ScrollContainer vertical={false} className="scroll-container py-2">
                    <div className="d-flex p-2">
                        {organizersList.map((o, index) =>
                            <Fade delay={index*150} className="h-100">
                                <Organizer>
                                    <img draggable={false} src={o.image} alt={o.name} />
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