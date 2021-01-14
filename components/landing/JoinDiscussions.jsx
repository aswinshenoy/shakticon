import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const DiscussionPortals = styled.a`
    min-height: 20vmin;
    padding: 2.5vh 5vw;
    display: flex;
    align-items: center;
    text-align: center;
    color: white!important;
    text-decoration: none!important;
    div {
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;
    }
    @media (min-width: 768px){
      justify-content: center;
      div {
          display: block!important;
          text-align: center;
      }
      h5 {
        display: none;
      }
    }
    img {
        height: 72px!important;
        filter: drop-shadow(2px 3px 8px rgba(0,0,0,0.3));
        margin-bottom: 5px;
        margin-right: 10px;
    }
    &:hover {
      h5 {
        display: block;
      }
    }
`;

const DiscordDiscussion = styled(DiscussionPortals)`
    background: #14171A;
`;

const TwitterDiscussion = styled(DiscussionPortals)`
    background: #14171A ;
`;

const LandingJoinDiscussion = () => {

    return <div className="row mx-0">
        <div className="col-md-6 px-0">
            <TwitterDiscussion href="https://twitter.com/shakticon" rel="noopener noreferrer" target="_blank">
                <Fade left>
                    <div>
                        <img src={require('../../images/twitter.png')} alt="Follow on Twitter" draggable="false" />
                        <h5>Follow us on Twitter</h5>
                    </div>
                </Fade>
            </TwitterDiscussion>

        </div>
        <div className="col-md-6 px-0">
            <DiscordDiscussion href="https://discord.gg/Dv8hEV7vWv" rel="noopener noreferrer" target="_blank">
                <Fade right>
                    <div>
                        <img src={require('../../images/discord.png')} alt="Join Discord Server" draggable="false" />
                        <h5>Join the Discord Server</h5>
                    </div>
                </Fade>
            </DiscordDiscussion>
        </div>
    </div>
};

export default LandingJoinDiscussion;
