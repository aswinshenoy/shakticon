import React from 'react';
import styled from "@emotion/styled";
import Base from "../components/shared";
import Topbar from "../components/shared/Topbar";
import FooterArea from "../components/landing/Footer";
import ConferenceSchedule from "../components/schedule";

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
        <ConferenceSchedule />
        <FooterArea />
    </Base>;

};

export default SchedulePage;