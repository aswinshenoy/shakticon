import React from 'react';
import styled from "@emotion/styled";
import YouTube from 'react-youtube';
import ScrollContainer from "react-indiana-drag-scroll";
import Reveal from "react-reveal/";
import Fade from "react-reveal/Fade";

const AmritaCommitmentSection = styled.section`
    padding: 8vh 2vw;
    background: #222640;
    color: #EEE;
    h1 {
      font-weight: 600;
      font-size: calc(1.35rem + 1vw);
      margin-bottom: 1rem;
      color: #FFD600;
    }
   
`;

const AboutAmma = styled.div`
    text-align: center;
    h3 {
      font-family: 'Kalam', cursive;
      margin-bottom: 0.5rem;
    }
    img {
      max-width: 100%;
      border-radius: 100vw;
      margin-bottom: 1rem;
    }
    .about-amma {
      font-size: 13px;
      color: white;
    }
`;

const InitiativesCard = styled.div`
    padding: 1rem;
    min-width: 300px;
    max-width: 300px;
    background: rgba(0,0,30,0.25);
    margin-right: 8px;
    color: #FFF;
    height: 100%;
    img {
        max-width: 100%;
        margin-bottom: 10px;
        max-height: 100px;
    }
    p {
        font-size: 12px;
        color: #BBB;
        margin-bottom: 5px;
    }
`;

const UNESCOChair = styled.div`
    padding: 5vh 0;
    img {
        max-width: 100%;
    }
    blockquote{
        font-size: calc(1.2rem + 0.5vw);
        b {
            display: inline-block;
            line-height: 1;
            color: #FFFF00;
        }
    }
`

const AmritaCommitment = () => {

    const initiatives = [
        {
            logo: require('../../images/embracing_the_world.png'),
            title: "Embracing the World",
            text: "Embracing the world embraces and listens to the challenges faced by women in society. It offers solutions to their problems by making women #self-sufficient and financially independent and empowers them through campaigns like #OrangetheWorld.",
            url: "https://www.embracingtheworld.org/"
        },
        {
            logo: require('../../images/ammachi_labs.png'),
            title: "Ammachi Labs & CWEGE",
            text: "CWEGE (The Center for Women’s Empowerment and Gender Equality) is a research focused academic center for promoting gender equality and fostering women’s empowerment with a special focus on technology and other innovative methods.",
            url: "https://ammachilabs.org/"
        },
        {
            logo: require('../../images/amrita_sree.png'),
            title: "Amrita Sree",
            text: "Women Self-Help Groups (SHG) for rural Indian villages developed with the aim to assist in empowering women so they can explore and engage in various professions",
            url: "http://www.amritasree.com/",
        },
        {
            logo: require('../../images/amrita_serve.png'),
            title: "Amrita Serve",
            text: "Amrita SeRVe has adopted over 101 backward villages in about 20 states of India with a goal to help them become role models of self-reliance and sustainable development. In many villages, women do a lot of work in homes and in the fields, and yet do not have a source of income. The project has enabled the opening of bank accounts of tens of thousands of rural women, facilitated their access to primary healthcare and conducted literacy classes.",
            url: "https://amritaserve.org/"
        }
    ]

    return <AmritaCommitmentSection>
        <div className="container-lg p-0">
            <Reveal left>
                <h1>Our commitment to Women’s Empowerment Runs Deep</h1>
            </Reveal>
            <div className="row mx-0">
                <div className="col-md-4 d-flex align-items-center p-2">
                    <Fade down>
                        <AboutAmma>
                            <h3>
                                Mata Amritanandamayi Devi (Amma)
                            </h3>
                            <img
                                draggable="false"
                                src={require('../../images/amma.jpg')}
                                alt="Mata Amritanandamayi Devi (Amma)"
                                style={{ maxHeight: '300px' }}
                            />
                            <div className="about-amma">
                                <div>Chancellor, Amrita Vishwa Vidyapeetham </div>
                                <div>Renowned humanitarian leader and spiritual teacher</div>
                                <div style={{ fontSize: '120%' }}>United Nations – Gandhi-King Award 2002</div>
                            </div>
                        </AboutAmma>
                    </Fade>
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center p-2">
                    <Fade up>
                        <div className="w-100">
                            <YouTube
                                videoId="obBtlPVkwlM"
                                opts={{
                                    width: '100%',
                                    height: '350vh'
                                }}
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center">
            <Fade up>
                <UNESCOChair className="row mx-0">
                    <div className="col-md-4 d-flex align-items-center px-3">
                        <a href="https://amrita.edu" target="_blank"  className="plain-link" rel="noopener nofollow">
                            <img
                                alt="Amrita University"
                                src={require('../../images/amrita_logo_light.png')}
                                draggable="false"
                            />
                        </a>
                    </div>
                    <div className="col-md-8 d-flex align-items-center px-3">
                        <div>
                            <blockquote className="mb-0">
                                Amrita holds India’s First Ever <b>UNESCO Chair on Gender Equality & Women Empowerment</b>
                            </blockquote>
                            <a
                                href="https://en.unesco.org/genderequality/chair/ID1177"
                                target="_blank"
                                className="plain-link" style={{ fontSize: '11px' }}
                            >
                                View UNESCO Profile <i className="far fa-external-link" />
                            </a>
                        </div>
                    </div>
                </UNESCOChair>
            </Fade>
        </div>
        <div className="container-lg px-0 d-flex">
            <ScrollContainer vertical={false} className="scroll-container py-2">
                <div className="d-flex p-3" style={{ cursor: 'grabbing' }}>
                    {initiatives.map((i, index) =>
                        <Fade delay={index*180}>
                            <InitiativesCard>
                                {i.logo &&
                                <a
                                    href={i.url}
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-center plain-link"
                                    style={{ minHeight: '130px' }}
                                    rel="noopener nofollow"
                                >
                                    <img src={i.logo} alt={i.title} draggable="false" />
                                </a>}
                                <a href={i.url} target="_blank"  className="plain-link" rel="noopener nofollow">
                                    <h4 className="font-weight-bold">{i.title}</h4>
                                </a>
                                <p>{i.text}</p>
                                <a href={i.url} target="_blank" style={{ fontSize: '14px' }} className="plain-link" rel="noopener nofollow">
                                    <div className="text-warning">
                                        View Website <i className="fa fa-external-link" />
                                    </div>
                                </a>
                            </InitiativesCard>
                        </Fade>
                    )}
                </div>
            </ScrollContainer>
        </div>
    </AmritaCommitmentSection>

};

export default AmritaCommitment;