import React from 'react';

import Base from "../components/shared";

import LandingCover from "../components/landing/Cover";
import AboutShaktiCon from "../components/landing/About";
import EventSponsors from "../components/landing/Sponsors";
import EventGoals from "../components/landing/Goals";
import EventOrganizers from "../components/landing/Organizers";
import Topbar from "../components/shared/Topbar";
import FAQSection from "../components/landing/FAQ";
import FooterArea from "../components/landing/Footer";
import ProgrammePhases from "../components/landing/Timeline";
import Resources from "../components/landing/Resources";


export default () => {

  return <Base>
      <Topbar />
      <LandingCover />
      <AboutShaktiCon />
      <ProgrammePhases />
      <EventGoals />
      <EventSponsors />
      <EventOrganizers />
      <FAQSection />
      <Resources />
      <FooterArea />
  </Base>;

};