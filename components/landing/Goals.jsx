import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import ScrollContainer from "react-indiana-drag-scroll";

const GoalsContainer = styled.div`
    background: #222;
    padding: 2vh 0;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: #F50057;
        font-weight: 600;
        padding: 1.5rem 0;
        margin-bottom: 1rem;
    }
`;

const GoalCard = styled.div`
    img {
      max-width: 100%;
      border-radius: 15px;
      box-shadow: 2px 3px 8px rgba(0,0,0,0.35);
    }
    p {
      color: #AAA;
      text-align: center;
      margin-top: 13px;
      font-size: 14px;
    }
    transition: all 1s ease;
    &:hover {
        transform: translateY(-20px);
        transition: all 1s ease;
        p {
           color: white;
        }
    }
`;



const EventGoals = () => {

    const goals = [
        {
            "cover": require('../../images/covers/women_cut_barriers.jpg'),
            "text": "Create a comfortable space & platform to encourage women to women communication and shared learning",
        },
        {
            "cover": require('../../images/covers/women_dark_bg.jpg'),
            "text": "Promote cybersecurity, and the role of the next generation of women and girls in making the world a safer place"
        },
        {
            "cover": require('../../images/covers/women_flag.jpg'),
            "text": "Train and upskill women in cybersecurity using CTF as the entry-point."
        },
        {
            "cover": require('../../images/covers/women_connections.jpg'),
            "text": "Facilitate mentorship, learning, personal growth, career growth, and community amongst the women participants"
        }
    ];

    const UNSDGGoals = [
        require('../../images/unsdg/sdg4.png'),
        require('../../images/unsdg/sdg5.png'),
        require('../../images/unsdg/sdg8.png'),
        require('../../images/unsdg/sdg10.png'),
        require('../../images/unsdg/sdg11.png'),
    ]

    return <GoalsContainer>
        <div className="container" style={{ maxWidth: '1333px' }}>
            <h2>Goals</h2>
            <ScrollContainer vertical={false} className="scroll-container py-2">
                <div className="d-flex p-3">
                    {goals.map((g, index) =>
                        <GoalCard className="col-9 col-md-6 col-lg-3 p-2">
                            <Fade up={index%2===0} down={index%2!==0} delay={index*350}>
                                <img alt="illustration" draggable="false" src={g.cover} />
                                <p>{g.text}</p>
                            </Fade>
                        </GoalCard>
                    )}
                </div>
            </ScrollContainer>
            <div className="text-light text-center py-2 py-md-4">
                <div
                    style={{ fontSize: 'calc(0.8rem + 0.35vw)' }}
                    className="mb-0"
                >
                    Amrita Vishwa Vidyapeetham through ShaktiCon proudly supports
                </div>
                <img
                    src={require('../../images/unsdg/logo.png')}
                    className="mb-0" style={{ maxHeight: '160px', maxWidth: '100%' }}
                    alt="ShaktiCon & Amrita takes pride in supporting the UN Sustainable Development Goals"
                />
                <ScrollContainer vertical={false} className="scroll-container py-2">
                    <div className="d-flex justify-content-center p-2">
                        {UNSDGGoals.map((g) =>
                            <GoalCard className="px-2" style={{ minWidth: '200px', width: '180px' }}>
                                <img
                                    draggable="false"
                                    style={{ maxWidth: '100%', borderRadius: '10px' }}
                                    src={g}
                                    alt="UN SDG Goal"
                                />
                            </GoalCard>
                        )}
                    </div>
                </ScrollContainer>
            </div>
        </div>
    </GoalsContainer>;

};

export default EventGoals;