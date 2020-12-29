import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const CoverContainer = styled.section`
    background-image: ${({bg}) => `url(${bg})` };
    background-size: cover;
    background-position: center;
    color: white;
`;

const CoverWrap = styled.div`
    backdrop-filter: blur(2px) brightness(0.35);
    width: 100%;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
       width: 300px;
       max-width: 100%;
       margin-bottom: 1.5rem;
       text-align: center;
    }
    h1 {
      font-size: calc(2.5rem + 3vw);
      text-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    }
    h2 {
       text-align: center;
       font-size: calc(1.35rem + 1vw);
       text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
       span {
          color: #F50057;
          display: block;
          font-weight: 900;
          font-style: italic;
       }
    }
`

const LandingCover = () => {

    return <CoverContainer bg={require('../../images/shakti_bg.png')}>
    <CoverWrap>
        <div className="container text-center px-2">
            <Fade left>
                <h1 className="font-weight-bold">Shakti 21</h1>
            </Fade>
            <Fade right>
                <h2>
                    CyberSecurity Conference, Trainings & Competition,
                    <span>Exclusively for Women.</span>
                </h2>
            </Fade>
            <Fade up>
                <div className="d-flex justify-content-center mt-3">
                    <p style={{ maxWidth: '600px' }}>
                        Organized by India's No.1 Ranked Women Cyber Security Team - team Shakti,
                        in-association with team bi0s, Blackhoodie & Amrita Center for CyberSecurity.
                    </p>
                </div>
            </Fade>
        </div>
    </CoverWrap>
    </CoverContainer>

}

export default LandingCover;