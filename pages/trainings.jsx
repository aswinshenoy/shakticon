import React from 'react';
import styled from "@emotion/styled";
import Topbar from "../components/shared/Topbar";
import Base from "../components/shared";
import FooterArea from "../components/landing/Footer";
import BeginnerTraining from "../components/schedule/BeginnerTraining";
import ShaktiTrainings from "../components/schedule/Trainings";

const TrainingSection = styled.section`
  min-height: 45vh;
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

const TrainingsPage = () => {

    return <Base meta={{ title: 'Trainings' }}>
        <Topbar />
        <TrainingSection>
            <div>
                <h1 className="mb-2">Trainings</h1>
                <p style={{ maxWidth: '600px'}}>
                    Workshops & training sessions organized aimed at scouting, nurturing &
                    empowering women talents in the field of cybersecurity.
                </p>
            </div>
        </TrainingSection>
        <ShaktiTrainings hideTitle />
        <BeginnerTraining />
        <FooterArea />
    </Base>

};

export default TrainingsPage;