import React from 'react';
import styled from "@emotion/styled";

const FooterWrap = styled.div`
    background: #111;
    text-align: center;
    padding: 1.5rem;
    color: #999;
    a {
       text-decoration: none;
       color: #AAA;
       &:hover {
          color: #F50057;
       }
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
`

const FooterArea = () => {

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

    return <FooterWrap>
            <div className="py-2">
                {socialMedia.map((s) =>
                    <a
                        href={s.url}
                        target="_blank" rel="nofollow noreferrer"
                        className="social-icon"
                        title={s.title}
                        aria-label={s.title}
                    >
                        <i className={s.icon} aria-hidden="true" />
                    </a>
                )}
            </div>
        <div className="py-2">&copy; <a href="https://teamshakti.in" target="_blank" rel="noreferrer nofollow">Team Shakti</a> 2020 - 2021. All Rights Reserved.</div>
    </FooterWrap>;

};

export default FooterArea;