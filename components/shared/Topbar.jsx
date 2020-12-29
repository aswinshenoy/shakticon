import React from 'react';
import styled from "@emotion/styled";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(30,30,30);
    border-bottom: 1px solid #333;
    height: 64px;
    width: 100%;
    img {
        height: 50px;
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
            "icon": "fab fa-twitter",
            "url": "https://twitter.com/teamshakti06"
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
                    <img height="30px" width="auto" src={require('../../images/logo.svg')} alt="Ashwin Shenoy" />
                </a>
            </div>
            <div className="col-6 d-none d-md-flex align-items-center">
                <nav>
                    <a href="#about">About</a>
                    <a href="#">Events</a>
                    <a href="#">Speakers</a>
                    <a href="#">Schedule</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </div>
            <div className="col-3 d-none d-md-flex align-items-center">
                <a className="register-button" href="#">Register</a>
                {socialMedia.map((s) =>
                    <a
                        href={s.url}
                        target="_blank" rel="nofollow noreferrer"
                        className="social-icon"
                        title="follow on social media"
                        aria-label="follow on social media"
                    >
                        <i className={s.icon} aria-hidden="true" />
                    </a>
                )}
            </div>
        </div>
    </Header>

};

export default Topbar;