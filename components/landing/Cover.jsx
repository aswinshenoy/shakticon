import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const CoverContainer = styled.section`
    background: linear-gradient(36deg, rgba(0,0,0,0.4) 0%, rgba(46,0,37,0.8) 37%, rgba(254,0,100,0.4) 51%, rgba(0,0,0,0.9) 100%),linear-gradient(51deg, rgba(82,55,15,1) 0%, rgba(71,83,0,1) 40%, rgba(0,50,124,1) 100%);
    background-size: cover;
    color: white;
    position: relative;
    overflow: hidden;
`;

const CoverWrap = styled.div`
    backdrop-filter: blur(2px) brightness(0.35);
    width: 100%;
    min-height: 90vh;
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
       color: #EEE;
       span {
          display: block;
          font-weight: 900;
          font-style: italic;
       }
    }
    p {
      color: #BBB;
      span {
        font-weight: 600;
        color: #fd7e14;
      }
    }
`

const LandingCover = () => {

    return <CoverContainer>
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
                    <p style={{ maxWidth: '700px' }}>
                        Organized by India's No.1 Ranked Women Cyber Security Team - <span>team Shakti</span>,
                        in-association with <span>team bi0s</span>, <span>Blackhoodie</span> & <span>Amrita Center for CyberSecurity</span>.
                    </p>
                </div>
            </Fade>
        </div>
    </CoverWrap>
    </CoverContainer>

}

export default LandingCover;