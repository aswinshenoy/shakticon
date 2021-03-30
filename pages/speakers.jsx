import React from 'react';
import styled from "@emotion/styled";
import Topbar from "../components/shared/Topbar";
import Base from "../components/shared";
import FooterArea from "../components/landing/Footer";
import ShaktiSpeakers from "../components/schedule/Speakers";

const TrainingSection = styled.section`
  min-height: 45vh;
  margin-top: 64px;
  background: #112;
  color: #eee;
  padding: 8vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: #FFAB00;
    font-size: calc(1.8rem + 2vw);
    font-weight: 600;
  }
`;

const SpeakersPage = () => {

    return <Base meta={{ title: 'Speakers' }}>
        <Topbar />
        <TrainingSection>
            <div>
                <h1 className="mb-2">Speakers</h1>
            </div>
        </TrainingSection>
        <ShaktiSpeakers />
        <FooterArea />
    </Base>

};

export default SpeakersPage;