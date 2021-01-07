import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
    align-items: center;
    justify-content: space-between;
    background: rgb(20,20,30);
    border-bottom: 1px solid #F50057;
    height: 64px;
    img {
        height: 50px;
        filter: brightness(10%) invert(1);
        &:hover {
           filter: none!important;
        }
    }
    nav {
       a {
          font-size: 16px;
          color: #999;
          padding: 8px 16px;
          text-decoration: none!important;
          &:hover {
            color: #F50057;
          }
       }
    }
    .register-button {
        padding: 5px 12px;
        border-radius: 3px;
        border: 1px solid #666;
        color: #EEE;
        text-decoration: none!important;
        transition: all 0.5s linear;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
        margin-right: 5px;
    }
    .social-icon {
        color: #999;
        font-size: 20px;
        padding: 0 12px;
        text-decoration: none!important;
        &:hover {
           color: #F50057;
           transition: all 0.5s linear;
        }
    }
`;

const Topbar = () => {

    const socialMedia = [
        {
            "icon": "far fa-envelope",
            "url": "mailto:teamshakti06@gmail.com"
        },
        {
            "icon": "fab fa-instagram",
            "url": "https://instagram.com/shakticon"
        },
        {
            "icon": "fab fa-twitter",
            "url": "https://twitter.com/shakticon"
        },
        {
            "icon": "fa fa-flag",
            "url": "https://ctftime.org/team/61083"
        },
        {
            "icon": "fab fa-github",
            "url": "https://github.com/Team-Shakti"
        }
    ];

    return <Header>
        <div className="row w-100 mx-0">
            <div className="col-3 d-flex justify-content-md-end">
                <a href="/">
                    <img height="30px" draggable="false" width="auto" src={require('../../images/logo.svg')} alt="Team Shakti" />
                </a>
            </div>
            <div className="col-6 d-none d-md-flex align-items-center">
                <nav>
                    <Fade delay={0}>
                        <a href="#about">About</a>
                    </Fade>
                    <Fade delay={200}>
                        <a href="#timeline">Events</a>
                    </Fade>
                    <Fade delay={450}>
                        <a href="#">Speakers</a>
                    </Fade>
                    <Fade delay={650}>
                        <a href="#timeline">Schedule</a>
                    </Fade>
                    <Fade delay={750}>
                        <a href="#faq">FAQ</a>
                    </Fade>
                    <Fade delay={750}>
                        <a href="#resources">Resources</a>
                    </Fade>
                </nav>
            </div>
            <div className="col-3 d-none d-md-flex align-items-center">
                <Fade left>
                    <a className="register-button" href="#">Register</a>
                </Fade>
                {socialMedia.map((s, index) =>
                    <Fade right delay={index*200}>
                        <a
                            href={s.url}
                            target="_blank" rel="nofollow noreferrer"
                            className="social-icon"
                            title="follow on social media"
                            aria-label="follow on social media"
                        >
                            <i className={s.icon} aria-hidden="true" />
                        </a>
                    </Fade>
                )}
            </div>
        </div>
    </Header>

};

export default Topbar;