import React from 'react';
import styled from "@emotion/styled";
import Topbar from "../components/shared/Topbar";
import Base from "../components/shared";
import FooterArea from "../components/landing/Footer";

const PromoteSection = styled.section`
  min-height: 45vh;
  margin-top: 64px;
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
  h3 {
    color: #FFAB00;
    font-size: calc(1.5rem + 1vw);
  }
  h4 {
    color: #fd7e14;
    font-size: calc(1.8rem + 2vw);
    font-weight: 600;
  }
  blockquote {
    text-align: center;
  }
`;

const WhatsAppMessageSection = styled.section`
  background: #fff;
  color: #000;
  border-radius: 12px;
  border: 4px solid #FFAB00;
  text-align: left;
  padding: 1rem;
  margin-bottom: 1rem;
  h3 {
      color: #fd7e14;
  }
`;

const PromotePage = () => {
    return <Base meta={{ title: 'Promotion' }}>
        <Topbar />
        <PromoteSection>
            <div className="container-lg p-2 my-3">
                <div>
                    <h1 className="mb-2">Promotion</h1>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h5 className="my-4">WhatsApp Message for Student Circles</h5>
                        <WhatsAppMessageSection>
                            There are over 3 million unfulfilled cybersecurity jobs globally. <br />
                            How do you train yourself for a career in cybersecurity? <br />
                            <br />
                            Join us at ShaktiCon’21 to find out! <br />
                            ShaktiCon(<a href="https://shakticon.com">shakticon.com</a>)(a free and virtual 
                            global conference) brings to you the complete package consisting of exciting keynotes, 
                            technical talks, CTF contests, training and the possibility to connect with your future 
                            employers. <br />
                            <br />
                            *Key Highlights* <br />
                            - Free of cost and beginner friendly<br />
                            - Participate in CTF and chance to win prizes worth *$4000*<br />
                            - Chance to get hired in Top MNC's<br />
                            - Grab the International conference certificate and boost your resume profile<br />
                            - Eminent speakers from Twitter, Microsoft, VMware, Linde<br />
                            <br />
                            And many more... Register Now!!! <br />
                            <br />
                            *ShaktiCon (conference) Registration:*<br />
                            *WHEN: April 9-11 2021 REGISTER at* <a href="https://register.shakticon.com">register.shakticon.com</a><br />
                            <br />
                            *ShaktiCTF (CTF contest) Registration:*<br />
                            *WHEN: April 3-4 2021, REGISTER at* <a href="https://ctf.shakticon.com">ctf.shakticon.com</a><br />
                            <br />
                            For more updates follow us on<br />
                            Twitter <a href="https://twitter.com/shakticon">https://twitter.com/shakticon</a> and LinkedIn <a href="https://www.linkedin.com/company/shakticon/">https://www.linkedin.com/company/shakticon</a>
                        </WhatsAppMessageSection>
                        <div>
                            <h5 className="my-4">LinkedIn Post</h5>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6773467798694899712" 
                                height="849" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h5 className="my-4">WhatsApp Message for Industry Professionals</h5>
                        <WhatsAppMessageSection>
                            ShaktiCon(<a href="https://shakticon.com">shakticon.com</a>)(a free and virtual 
                            global conference) brings to you the complete package consisting of exciting keynotes, 
                            technical talks, CTF contests, training and the possibility to connect with your future 
                            employers. <br />
                            <br />
                            The keynote session by Rinki Sethi (VP and CISO of Twitter). There will also be 
                            eminent speakers from Microsoft, VMware and Linde. <br />
                            <br />
                            As part of ShaktiCon, we organize ShaktiCTF, a jeopardy style online Capture The 
                            Flag contest that will help you or your employees become confident in cyber security 
                            skills. Top teams have the chance to win awards worth *4000$*. <br />
                            <br />
                            *ShaktiCon (conference) Registration:*<br />
                            *WHEN: April 9-11 2021 REGISTER at* <a href="https://register.shakticon.com">register.shakticon.com</a><br />
                            <br />
                            *ShaktiCTF (CTF contest) Registration:*<br />
                            *WHEN: April 3-4 2021, REGISTER at* <a href="https://ctf.shakticon.com">ctf.shakticon.com</a><br />
                            <br />
                            For more updates follow us on<br />
                            Twitter <a href="https://twitter.com/shakticon">https://twitter.com/shakticon</a> and LinkedIn <a href="https://www.linkedin.com/company/shakticon/">https://www.linkedin.com/company/shakticon</a>
                        </WhatsAppMessageSection>
                        <h5 className="my-4">Tweet</h5>
                        <blockquote class="twitter-tweet tw-align-center">
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
                </div>
                
                        
            </div>
            </PromoteSection>
        <FooterArea />
    </Base>
};

export default PromotePage;