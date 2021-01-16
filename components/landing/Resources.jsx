import React from 'react';
import styled from "@emotion/styled";

const ResourcesSection = styled.section`
    background: #112;
    padding: 0.5rem 1rem;
    h3 {
      color: #AAA;
    }
    a {
       text-decoration: none!important;
       display: block;
       text-align: center;
       color: #DDD;
       h4 {
          font-size: calc(1rem + 0.2vw);
          margin-bottom: 5px;
          transition: all 1s ease;
       }
       img {
          max-height: 64px;
          max-width: 100%;
          margin-bottom: 12px;
       }
       p {
          color: #AAA;
          font-size: calc(0.7rem + 0.25vw);
          transition: all 0.5s ease;
       }
       &:hover {
          h4 {
             color: #F50057;
             transition: all 0.5s ease;
          }
          p {
            color: #eee;
            transition: all 0.5s ease;
          }
       }
    }
`;

const Resources = () => {

    return <ResourcesSection id="resources">
        <div className="container-lg p-2">
            <div className="row mx-0">
                <div className="col-md-6 p-2">
                    <a target="_blank" rel="noreferrer nofollow" href="https://wiki.bi0s.in/">
                        <img draggable="false" src={require('../../images/bios-wiki.png')} alt="bi0s Wiki" />
                        <h4>Learn Using bi0s Wiki <i className="far fa-external-link ml-1" /></h4>
                        <p>
                            A-to-Z Knowledgebase for learning CyberSecurity &
                            mastering CTFs, prepared by India's No.1 Ranked CTF Team.
                        </p>
                    </a>
                </div>
                <div className="col-md-6 p-2">
                    <a target="_blank" rel="noreferrer nofollow" href="https://traboda.com/">
                        <img draggable="false" src={require('../../images/traboda-logo-light.png')} alt="Traboda" />
                        <h4>Practice Challenges on Traboda <i className="far fa-external-link ml-1" /></h4>
                        <p>
                            Prepare for CTFs and learn by solving over 50+ interesting challenges
                            from 5+ categories, for free on Traboda.
                        </p>
                    </a>
                </div>
                {/*<div className="col-md-4 p-2">*/}
                {/*    <a target="_blank" rel="noreferrer nofollow" href="https://archive.bi0s.in/">*/}
                {/*        <img draggable="false" src={require('../../images/bios-archive.png')} alt="bi0s archive" />*/}
                {/*        <h4>Explore the archives of team bi0s <i className="far fa-external-link ml-1" /></h4>*/}
                {/*        <p>*/}
                {/*            Read through challenge writeups from team bi0s members and try out archived challenges from past InCTFs.*/}
                {/*        </p>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </div>
    </ResourcesSection>

};

export default Resources;