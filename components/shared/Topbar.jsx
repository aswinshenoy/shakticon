import React, { useState, useRef } from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import SideBar from "./SideBar";

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
      button {
        background: none!important;
        border: none;
        i {
          font-size: 32px;
          color: white;
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

    const [showMenu, setShowMenu] = useState(false);

    const topbarRef = useRef()

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };

    const socialMedia = [
        {
            "icon": "far fa-envelope",
            "title": "Contact us through Email",
            "url": "mailto:mail@shakticon.com"
        },
        {
            "icon": "fab fa-instagram",
            "title": "Follow our Instagram handle",
            "url": "https://instagram.com/shakticon"
        },
        {
            "icon": "fab fa-twitter",
            "title": "Follow us on Twitter",
            "url": "https://twitter.com/shakticon"
        },
        {
            "icon": "fa fa-flag",
            "title": "View our CTFTime ranking",
            "url": "https://ctftime.org/team/61083"
        },
        {
            "icon": "fab fa-discord",
            "title": "Join Discord Server",
            "url": "https://discord.gg/Dv8hEV7vWv"
        },
        {
            "icon": "fab fa-github",
            "title": "View our GitHub",
            "url": "https://github.com/Team-Shakti"
        }
    ];

    return <React.Fragment>
        <Header ref={topbarRef}>
            <div className="row w-100 mx-0">
                <div className="col-1 col-md-3 d-flex justify-content-md-center px-3">
                    <a href="/">
                        <img height="30px" draggable="false" width="auto" src={require('../../images/logo.svg')} alt="Team Shakti" />
                    </a>
                </div>
                <div className="col-6 d-none d-md-flex justify-content-md-end align-items-center">
                    <nav>
                        <Fade delay={0}>
                            <a href="/about">About</a>
                        </Fade>
                        <Fade delay={200}>
                            <a href="/trainings">Trainings</a>
                        </Fade>
                        <Fade delay={450}>
                            <a href="/speakers">Speakers</a>
                        </Fade>
                        <Fade delay={650}>
                            <a href="/schedule">Schedule</a>
                        </Fade>
                        <Fade delay={750}>
                            <a href="/#faq">FAQ</a>
                        </Fade>
                        <Fade delay={750}>
                            <a href="/#resources">Resources</a>
                        </Fade>
                    </nav>
                </div>
                <div className="col-8 d-flex d-md-none align-items-center justify-content-end px-2">
                    <button onClick={onOpen}>
                        <i className="far fa-bars" />
                    </button>
                </div>
                <div className="col-3 d-none d-md-flex align-items-center">
                    {/*<Fade left>*/}
                    {/*    <a*/}
                    {/*       className="register-button" target="_blank" rel="noreferrer nofollow"*/}
                    {/*       href="https://docs.google.com/forms/d/e/1FAIpQLSeiITkqpmhPRHWQspiLt27hDV2nFlwW9QoyzyFZVjM5YmSqwg/viewform"*/}
                    {/*    >*/}
                    {/*        Register*/}
                    {/*    </a>*/}
                    {/*</Fade>*/}
                    {socialMedia.map((s, index) =>
                        <Fade right delay={index*200}>
                            <a
                                href={s.url}
                                target="_blank" rel="nofollow noreferrer"
                                className="social-icon"
                                title={s.title}
                                aria-label={s.title}
                            >
                                <i className={s.icon} aria-hidden="true" />
                            </a>
                        </Fade>
                    )}
                </div>
            </div>
        </Header>
        {showMenu && <SideBar  onClose={onClose} />}
    </React.Fragment>;
};

export default Topbar;