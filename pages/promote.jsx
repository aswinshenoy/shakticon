import React from 'react';
import styled from "@emotion/styled";
import Topbar from "../components/shared/Topbar";
import Base from "../components/shared";
import FooterArea from "../components/landing/Footer";

const PromoteSection = styled.section`
  min-height: 45vh;
  background: #112;
  color: #eee;
  padding: 10vh 2vw;
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

const PromotePage = () => {
    return <Base>
        <Topbar />
        <PromoteSection>
            <div>
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">
                        Registrations are open for <a href="https://twitter.com/hashtag/ShaktiCon?src=hash&amp;ref_src=twsrc%5Etfw">#ShaktiCon</a>
                        &#39;21!! 🎉🎊<br /><br />Visit <a href="https://t.co/J8mtMoVw8f">https://t.co/J8mtMoVw8f</a> to 
                        <a href="https://twitter.com/hashtag/participate?src=hash&amp;ref_src=twsrc%5Etfw">#participate</a> 
                        in talks, panel discussions and keynotes.<br /><br />Our aim is to 
                        <a href="https://twitter.com/hashtag/train?src=hash&amp;ref_src=twsrc%5Etfw">#train</a>, 
                        <a href="https://twitter.com/hashtag/inspire?src=hash&amp;ref_src=twsrc%5Etfw">#inspire</a> and 
                        <a href="https://twitter.com/hashtag/upskill?src=hash&amp;ref_src=twsrc%5Etfw">#upskill</a> 
                        aspiring <a href="https://twitter.com/hashtag/women?src=hash&amp;ref_src=twsrc%5Etfw">#women</a> in 
                        <a href="https://twitter.com/hashtag/cybersecurity?src=hash&amp;ref_src=twsrc%5Etfw">#cybersecurity</a>, 
                        thus reducing the ratio between <a href="https://twitter.com/hashtag/womeninsec?src=hash&amp;ref_src=twsrc%5Etfw">#womeninsec</a> 
                        (24%) to men (76%). <a href="https://t.co/2bLBxFcJCm">pic.twitter.com/2bLBxFcJCm</a>
                        </p>&mdash; ShaktiCon (@shakticon) 
                        <a href="https://twitter.com/shakticon/status/1367556271147077632?ref_src=twsrc%5Etfw">March 4, 2021</a>
                </blockquote> 
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </PromoteSection>
        <FooterArea />
    </Base>
};

export default PromotePage;