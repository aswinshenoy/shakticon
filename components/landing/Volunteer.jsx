import React from 'react';
import styled from "@emotion/styled";

const VolunteerWrap = styled.section`
    background: #102;
    padding: 3vh 1rem;
    color: #EEE;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
        font-weight: 600;
        margin-bottom: 3px;
    }
    p {
       color: #BBB;
       margin-bottom: 5px;
       max-width: 600px;
       font-size: calc(0.8rem + 0.25vw);
    }
    a {
        color: #EEE;
        border: 1px solid;
        font-size: calc(1rem + 0.3vw);
        padding: 8px 16px;
        display: inline-block;
        text-decoration: none!important;
        &:hover {
            color: #fd7e14;
        }
    }
`

const VolunteerSection = () => {

    return <VolunteerWrap>
        <div className="container px-0">
            <div className="row mx-0">
                <div className="col-md-9 px-2">
                    <h4>Volunteer</h4>
                    <p>
                        Volunteering is a great way to make a difference supporting women in cybersecurity.
                        We are looking for volunteers who would like to support us. There are various ways to
                        help us - contribute your talks, trainings, organisational support, promotions and more.
                    </p>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center p-2">
                    <a
                        href="https://docs.google.com/forms/d/1ECgU7IKUBSvjhYEbm4KE9P7HWlUjk2gw0ljYZ3xj8hE/viewform?edit_requested=true"
                        target="_blank" rel="noreferrer nofollow"
                    >
                        Volunteer
                    </a>
                </div>
            </div>
        </div>
    </VolunteerWrap>

};

export default VolunteerSection;