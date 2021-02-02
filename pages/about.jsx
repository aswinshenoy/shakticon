import React from "react";
import Base from "../components/shared";
import Topbar from "../components/shared/Topbar";
import CyberSecurityRelevance from "../components/about/CyberSecurity";
import AmritaCommitment from "../components/about/Amrita";
import FooterArea from "../components/landing/Footer";
import AmritaCenterForCyber from "../components/about/ACCSN";
import ShaktiConIntro from "../components/about/intro";

const AboutPage = () => {

    return <Base meta={{title: 'About ShaktiCon'}}>
        <Topbar />
        <ShaktiConIntro />
        <CyberSecurityRelevance />
        <AmritaCenterForCyber />
        <AmritaCommitment />
        <FooterArea />
    </Base>;

};

export default AboutPage;