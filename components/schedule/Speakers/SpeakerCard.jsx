import React from 'react';
import styled from "@emotion/styled";

const TrainerCardWrap = styled.div`
    border: 2px solid #9C27B0;
    border-radius: 12px;
    h3 {
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    h4 {
        color: #fd7e14;
        margin-bottom: 5px;
    }
    h5 {
      font-size: 18px; 
      color: #EEE;
    }
    padding: 0.5rem;
    p {
        color: #EEE;
        text-align: left;
    }
    li {
        color: #EEE;
        font-size: 14px;
    }
    .font-weight-bold {
      color: #AAA;
      font-weight: 600!important;
      margin-bottom: 0.35rem;
    }
    img {
        border-radius: 100vw;
        width: 250px;
        max-width: 100%;
    }
    .social-media-links {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        a {
          margin-right: 13px;
          i {
            color: #AAA;
            font-size: 24px;
          }
          &:hover {
            i {
              color: white;
            }
          }
        }
    }
`;


const SpeakerCard = ({
    slug, title, sessions, abstract, speaker, registerURL
}) => {

    return <TrainerCardWrap id={slug}>
        <div className="row mx-0">
            <div className="col-md-7 p-2">
                <h3>{title}</h3>
                <h4>{speaker?.name}</h4>
                {
                speaker?.company && <h5>
                    {
                        (speaker.designation.length > 0) ?
                        <div>{speaker.designation}, <span>{speaker.company}</span></div> :
                        <div><span>{speaker.company}</span></div>
                    }
                </h5>}
            </div>
            <div className="col-md-5 d-flex text-warning text-md-right text-center justify-content-md-end justify-content-center p-2">
                <div className="p-2">
                    {registerURL &&
                    <a href={registerURL} style={{ background: '#7C1790', color: 'white' }} className="plain-link px-4 py-3 rounded-0">
                        Register Now
                    </a>}
                    {sessions?.length>0 &&
                    <div className="mt-4">
                        {sessions.map((s) =>
                            <div style={{ fontSize: 'calc(13px + 0.2vw)'}}>
                                {s.date} {s.time && `- ${s.time}`}
                            </div>
                        )}
                    </div>}
                </div>
            </div>
            {speaker.bio &&
            <div className="col-md-4 text-center col-lg-3">
                <img draggable="false" alt={speaker?.name} src={speaker?.image} />
                {speaker?.links &&
                <div className="social-media-links my-4">
                    {speaker.links?.twitter &&
                    <a href={speaker.links.twitter} rel="noreferrer nofollow" target="_blank">
                        <i className="fab fa-twitter" />
                    </a>}
                    {speaker.links?.linkedin &&
                    <a href={speaker.links.linkedin} rel="noreferrer nofollow" target="_blank">
                        <i className="fab fa-linkedin" />
                    </a>}
                    {speaker.links?.website &&
                    <a href={speaker.links.website} rel="noreferrer nofollow" target="_blank">
                        <i className="far fa-globe" />
                    </a>}
                </div>}
            </div>}
            {speaker.bio &&
            <div className="col-md-8 col-lg-9">
                {speaker.bio &&
                <div>
                    <div className="font-weight-bold"><i className="far fa-id-card mr-1" /> About {speaker.name}</div>
                    {speaker.bio}
                </div>}
                {abstract &&
                <div>
                    <div className="font-weight-bold"><i className="far fa-info-square mr-1" /> Talk Overview</div>
                    <p>{abstract}</p>
                </div>}
            </div>}
        </div>
    </TrainerCardWrap>

};

export default SpeakerCard;