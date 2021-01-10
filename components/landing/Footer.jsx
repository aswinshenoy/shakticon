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

    return <FooterWrap>
            <div className="py-2">
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
        <div className="py-2">&copy; <a href="https://teamshakti.in" target="_blank" rel="noreferrer nofollow">Team Shakti</a> 2020. All Rights Reserved.</div>
    </FooterWrap>;

};

export default FooterArea;