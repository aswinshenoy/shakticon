import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const SponsorsSection = styled.section`
    background: #12120F;
    min-height: 50vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    h3 {
       font-size: calc(1.3rem + 0.5vw);
       font-weight: 600;
       color: white;
    }
    p {
        color: #AAA;
        margin-bottom: 5px;
    }
    a {
       color: #ffc107;
    }
`;

const SponsorContainer = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 12px 0 0 12px;
    width: 100%;
    transform: translateX(5vmax);
    @media (min-width: 768px) {
      border-radius: 12px!important;
    }
    h4 {
        font-size: calc(1.3rem + 1.5vw);
        color: #F50057;
        font-weight: 900;
    }
`;

const SponsorIcon = styled.div`
    font-size: calc(0.8rem + 0.35vw);
    img {
        max-width: 100%;
    }
`

const EventSponsors = () => {

    const sponsors = [
        {
            "name": "Seimens",
            "title": "Platinum Sponsor",
            "size": '250px',
            "logo": require('../../images/sponsors/seimens.png')
        },
        {
            "name": "VMWare",
            "title": "Gold Sponsor",
            "size": '150px',
            "logo": require('../../images/sponsors/vmware.png')
        },
        {
            "name": "NotSoSecure",
            "title": "Prize Sponsor",
            "size": '110px',
            "logo": require('../../images/sponsors/notsosecure.png')
        },
        {
            "name": "FireEye",
            "title": "Prize Sponsor",
            "size": '110px',
            "logo": require('../../images/sponsors/fireeye.png')
        },
        {
            "name": "CrowdStrike",
            "title": "Prize Sponsor",
            "size": '110px',
            "logo": require('../../images/sponsors/crowdstrike.png')
        }
    ]

    return <SponsorsSection>
        <div className="container" style={{ maxWidth: '1333px'}}>
            <div className="row mx-0 w-100 p-lg-4 p-md-2 p-1">
                <div className="col-md-4 d-flex align-items-center px-3 py-3">
                    <div>
                        <Fade down>
                            <h3>Help Us in Our Mission to Make Cyber Security More Accessible for Women</h3>
                        </Fade>
                        <Fade up>
                            <p>
                                We are offering a limited number of exclusive sponsorship opportunities
                                to companies & organizations.
                            </p>
                        </Fade>
                        <Fade left>
                            <div>
                                <a href="mailto:mail@shakticon.com">
                                    Sponsor Us <i className="fa fa-chevron-right ml-1" />
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-end px-2 py-4">
                    <SponsorContainer>
                        <Fade right>
                            <a className="plain-link" href="/sponsors">
                                <h4 className="mb-2">
                                    Our Sponsors
                                </h4>
                            </a>
                            <div className="row my-2 mx-0">
                                <div className="col-md-6 p-1">
                                    <SponsorIcon>
                                        <div>Platinum Sponsor</div>
                                        <img
                                            alt="Seimens"
                                            draggable="false" src={require('../../images/sponsors/seimens.png')}
                                            style={{ maxWidth: '100%', maxHeight: '70px'}}
                                        />
                                    </SponsorIcon>
                                </div>
                                <div className="col-md-6 p-1">
                                    <SponsorIcon>
                                        <div>Gold Sponsor</div>
                                        <img
                                            alt="VMware" draggable="false"
                                            src={require('../../images/sponsors/vmware.png')}
                                            style={{ maxWidth: '100%', maxHeight: '60px' }}
                                        />
                                    </SponsorIcon>
                                </div>
                                <div className="col-md-6 p-1">
                                    <div>Associate Sponsor</div>
                                    <div className="d-flex">
                                        <SponsorIcon>
                                            <img
                                                alt="CrowdStrike"
                                                draggable="false"
                                                src={require('../../images/sponsors/crowdstrike.png')}
                                                style={{ maxHeight: '120px', maxWidth: '100%' }}
                                            />
                                        </SponsorIcon>
                                        <SponsorIcon>
                                            <img
                                                alt="Seagate"
                                                draggable="false"
                                                src={require('../../images/sponsors/seagate.PNG')}
                                                style={{ maxHeight: '120px', maxWidth: '100%' }}
                                            />
                                        </SponsorIcon>
                                    </div>
                                </div>
                                <div className="col-md-6 p-1">
                                    <div className="center">Prize Sponsors</div>
                                    <div className="d-flex align-items-center">
                                        <SponsorIcon>
                                            <img
                                                alt="NotSoSecure" draggable="false"
                                                src={require('../../images/sponsors/notsosecure.png')}
                                                style={{ maxWidth: '90px' }}
                                            />
                                        </SponsorIcon>
                                        <SponsorIcon>
                                            <img
                                                alt="FireEye" draggable="false"
                                                src={require('../../images/sponsors/fireeye.png')}
                                                style={{ maxWidth: '100%', maxHeight: '35px' }}
                                            />
                                        </SponsorIcon>
                                        <SponsorIcon>
                                            <img
                                                alt="FireEye" draggable="false"
                                                src={require('../../images/sponsors/hackthebox.png')}
                                                style={{ maxWidth: '100%', maxHeight: '60px' }}
                                            />
                                        </SponsorIcon>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </SponsorContainer>
                </div>
            </div>
        </div>
    </SponsorsSection>;

};

export default EventSponsors;