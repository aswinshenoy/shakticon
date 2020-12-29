import React, {useState} from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const FAQContainer = styled.section`
      background: #222640;
      padding: 8vh 3vw;
      color: white;
      h3 {
         font-size: calc(1.5rem + 1.5vw);
         font-weight: 600;
      }
`;

const FAQQuestionContainer = styled.div`
    button{
        background: none;
        border: none;
        display: block;
        color: #EEE;
        text-align: left;
        font-size: calc(1rem + 0.35vw);
        padding: 0.5rem;
        i {
          margin-right: 1rem;
        }
        &:focus {
          outline: none!important;
        }
    }
`;

const QuestionCard = ({ question, answer }) => {

    const [isOpen, setOpen] = useState(false);

    return <FAQQuestionContainer>
        <button onClick={() => setOpen(!isOpen)}>
            {!isOpen ? <i className="fa fa-chevron-down" /> : <i className="fa fa-chevron-up" /> }
            {question}
        </button>
        {isOpen && <div className="px-4 pb-3">
            {answer}
        </div>}
    </FAQQuestionContainer>

}

const FAQSection = () => {

    const questions = [
        {
            "question": "I am totally new to cybersecurity, can I take part?",
            "answer": "YES, anyone who is new to cybersecurity can take part. No prior skills needed. You only need to come armed with curiosity, patience and enthusiasm to learn"
        },
        {
            "question": "Who can participate?",
            "answer": <>
                <li>It’s a women only Conference. Anyone who is born female or identifies as women can join. If you are eligible for prizes in the contest, we will ask for an ID proving gender as ‘Female’.</li>
                <li>Women of any age who have the curiosity to try new things and interest in cybersecurity can take part. No previous cybersecurity experience is needed.</li>
            </>
        },
        {
            "question": "How do I start learning?",
            "answer": <>
                You can start learning by going through the basics of each category given on bi0s wiki. Also, there are many video lectures you can watch explaining basic challenges on Amrita InCTF Junior . You can also practice challenges on bi0s-archive. Additionally, you can google and find many more resources on any individual topic you are interested in. We encourage lots of independent learning!
            </>
        },
        {
            "question": "Why should I take part?",
            "answer": <>
                <li>Develop hands on skills in cybersecurity.</li>
                <li>Meet like minded women around the world.</li>
                <li>Free workshops.</li>
                <li>Exciting prizes.</li>
                <li>Chance to interview with some of our sponsors for cybersecurity job roles.</li>
                <li>Attend the cybersecurity conference for free.</li>
            </>
        }
    ]

    return <FAQContainer id="faq">
        <div className="container p-2">
            <h3>FAQ</h3>
            <div style={{ maxWidth: '800px' }}>
                {questions.map((q, index) =>
                    <Fade up delay={index*300}>
                        <QuestionCard {...q} />
                    </Fade>
                )}
            </div>
        </div>
    </FAQContainer>

};

export default FAQSection;