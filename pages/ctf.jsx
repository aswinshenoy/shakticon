import React from 'react';
import styled from "@emotion/styled";
import Topbar from "../components/shared/Topbar";
import Base from "../components/shared";
import FooterArea from "../components/landing/Footer";
import ShaktiSpeakers from "../components/schedule/Speakers";
import CTFCover from '../components/ctf/Cover';

const CTFPage = () => {
    return <Base meta={{ title: 'CTF' }}>
        <Topbar />
        <CTFCover />
        <FooterArea />
        </Base>
};

export default CTFPage;