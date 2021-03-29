import React from 'react';
import styled from "@emotion/styled";

const TrainerCardWrap = styled.div`
    border: 2px solid #9C27B0;
    border-radius: 12px;
    h3 {
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: calc(1.12rem + 0.35vw);
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
        font-size: calc(12px + 0.15vw);
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


const TrainerCard = ({
    slug, title, sessions, abstract, prerequisite, requirements, trainer, registerURL
}) => {

    return <TrainerCardWrap id={slug}>
        <div className="row mx-0">
            <div className="col-md-7 p-2">
                <h3>{title}</h3>
                <h4>{trainer?.name}</h4>
                {trainer?.company && <h5>{trainer?.designation}, {trainer?.company}</h5>}
            </div>
            <div className="col-md-5 d-flex text-warning text-md-right text-center justify-content-md-end justify-content-center p-2">
                <div className="p-2">
                    {registerURL &&
                    <a href={registerURL} style={{ background: '#7C1790', color: 'white' }} className="plain-link px-4 py-2 rounded-0">
                        Register Now
                    </a>}
                    {sessions?.length>0 &&
                    <div className="mt-3">
                        {sessions.map((s) =>
                            <div style={{ fontSize: 'calc(13px + 0.2vw)'}}>
                                {s.date} {s.time && `- ${s.time}`}
                            </div>
                        )}
                    </div>}
                </div>
            </div>
            {trainer.bio &&
            <div className="col-md-4 text-center col-lg-3">
                <img draggable="false" alt={trainer?.name} src={trainer?.image} />
                {trainer?.links &&
                <div className="social-media-links my-4">
                    {trainer.links?.twitter &&
                    <a href={trainer.links.twitter} rel="noreferrer nofollow" target="_blank">
                        <i className="fab fa-twitter" />
                    </a>}
                    {trainer.links?.linkedin &&
                    <a href={trainer.links.linkedin} rel="noreferrer nofollow" target="_blank">
                        <i className="fab fa-linkedin" />
                    </a>}
                    {trainer.links?.website &&
                    <a href={trainer.links.website} rel="noreferrer nofollow" target="_blank">
                        <i className="far fa-globe" />
                    </a>}
                </div>}
            </div>}
            {trainer.bio &&
            <div className="col-md-8 col-lg-9 px-2">
                {trainer.bio &&
                <div>
                    <div className="font-weight-bold"><i className="far fa-id-card mr-1" /> About {trainer.name}</div>
                    {trainer.bio}
                </div>}
                {abstract &&
                <div>
                    <div className="font-weight-bold"><i className="far fa-info-square mr-1" /> Training Overview</div>
                    <p>{abstract}</p>
                </div>}
                {(prerequisite?.length > 0) && <div>
                    <div className="font-weight-bold"><i className="far fa-clipboard-list-check mr-1" />  Prerequisite</div>
                    <ul>
                        {prerequisite.map((p) =>
                            <li>{p}</li>
                        )}
                    </ul>
                </div>}
                {(requirements?.length > 0) && <div>
                    <div className="font-weight-bold"><i className="far fa-list-ul mr-1" /> Requirements</div>
                    <ul>
                        {requirements.map((r) =>
                            <li>{r}</li>
                        )}
                    </ul>
                </div>}
            </div>}
        </div>
    </TrainerCardWrap>

};

export default TrainerCard;