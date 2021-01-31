import React from 'react';
import styled from "@emotion/styled";
import Base from "../components/shared";
import Topbar from "../components/shared/Topbar";
import FooterArea from "../components/landing/Footer";
import BeginnerTraining from "../components/schedule/BeginnerTraining";
import ProgrammePhases from "../components/landing/Timeline";
import ShaktiTrainings from "../components/schedule/Trainings";

const CoverSection = styled.section`
    background: #111;
    min-height: 10vh;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    h1 {
       color: #fd7e14;
       font-size: calc(1.8rem + 2vw);
       font-weight: 600;
    }
`

const SchedulePage = () => {

    return <Base meta={{ title: 'Event Schedule' }}>
        <Topbar />
        <CoverSection />
        <ProgrammePhases />
        <BeginnerTraining />
        <ShaktiTrainings />
        <FooterArea />
    </Base>;

};

export default SchedulePage;