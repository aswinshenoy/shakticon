import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";


const IntroSectionWrap = styled.section`
    background: ${({ bg}) => bg ? `url(${bg})` : '#333' };
    @media (max-width: 768px){
      background: linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(46,0,37,0.8) 37%, rgba(254,0,100,0.4) 51%, rgba(0,0,0,0.9) 100%),linear-gradient(51deg, rgba(82,55,15,1) 0%, rgba(71,83,0,1) 40%, rgba(0,50,124,1) 100%);
    }
    background-size: cover;
    color: #EEE;
    margin-top: 50px;
    h4 {
        text-shadow: 2px 3px 2px rgba(0,0,0,0.5);
    }
    h1 {
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
    }
    .wrapper {
      padding: 5vh 2vw;
      min-height: 80vh;
      background: linear-gradient(to right, rgba(0,0,0,0.35) 20%,  rgba(0,0,0,0.85));
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    p {
      color: white;
      font-size: 14px;
      max-width: 600px;
      text-shadow: 2px 2px 2px rgba(0,0,0,0.25);
      b {
          font-weight: 600;
          color: yellow;
      }
    }
`;

const ShaktiConIntro = () => {

    return <IntroSectionWrap bg={require('../../images/cyberpunk_woman.jpg')}>
    <div className="wrapper">
        <div className="p-3" style={{ maxWidth: '720px' }}>
            <Fade>
                <h4>What is Shakticon?</h4>
            </Fade>
            <Fade delay={200}>
                <h1>Inspiring & Empowering Women in CyberSecurity</h1>
            </Fade>
            <div>
                <Fade delay={350}>
                    <p>
                        ShaktiCon is a free global conference focused on inspiring, training, and upskilling women in cybersecurity.
                    </p>
                </Fade>
                <Fade delay={500}>
                    <p>
                        Born out of an understanding that cultural circumstances do not always encourage women to flourish in male
                        dominated fields, ShaktiCon is committed to creating a female focused environment to showcase the range of
                        talented women in cybersecurity.
                    </p>
                </Fade>
                <Fade delay={650}>
                    <p>
                        By doing this we hope to train a new generation of women to be more actively engaged in the field and enter
                        the cybersecurity workforce. ShaktiCon is <b>all about women role models inspiring & encouraging
                        young & aspiring women hackers to attain their goals without any fear.</b>
                    </p>
                </Fade>
            </div>
        </div>
    </div>
    </IntroSectionWrap>


};

export default ShaktiConIntro;