import React from 'react';
import styled from "@emotion/styled";

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
       color: #F50057;
    }
`;

const SponsorContainer = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 12px;
    width: 100%;
    transform: translateX(10vw);
    h4 {
        font-size: calc(1.3rem + 1.5vw);
        color: #F50057;
        font-weight: 900;
    }
`;

const SponsorIcon = styled.div`
    img {
        max-width: 100%;
    }
`

const EventSponsors = () => {

    const sponsors = [
        {
            "name": "Simens",
            "title": "Platinum Sponsor",
            "size": '280px',
            "logo": require('../../images/sponsors/seimens.png')
        },
        {
            "name": "VMWare",
            "title": "Gold Sponsor",
            "size": '180px',
            "logo": require('../../images/sponsors/vmware.png')
        }
    ]

    return <SponsorsSection>
        <div className="container" style={{ maxWidth: '1333px'}}>
            <div className="row mx-0 w-100 p-lg-4 p-md-2 p-1">
                <div className="col-md-4 d-flex align-items-center px-3 py-3">
                    <div>
                        <h3>Help Us in Our Mission to Make Cyber Security More Accessible for Women</h3>
                        <p>
                            We are offering a limited number of exclusive sponsorship opportunities
                            to companies & organizations.
                        </p>
                        <div>
                            <a href="mailto:sponsorship@shakticon.in">Sponsor Us</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-end px-2 py-4">
                    <SponsorContainer>
                        <h4 className="my-3">Our Sponsors</h4>
                        <div className="row my-2 mx-0">
                            {sponsors.map((s) =>
                                <div className="col-6 col-md-4 px-1">
                                    <SponsorIcon>
                                        <div>{s.title}</div>
                                        <img alt={s.name} draggable="false" src={s.logo} style={{ width: s.size }} />
                                    </SponsorIcon>
                                </div>
                            )}
                        </div>
                    </SponsorContainer>
                </div>
            </div>
        </div>
    </SponsorsSection>;

};

export default EventSponsors;