import React from 'react';
import styled from "@emotion/styled";

const GoalsContainer = styled.div`
    background: #222;
    padding: 5vh 0;
    h2 {
        font-size: calc(1.5rem + 1vw);
        text-align: center;
        color: #F50057;
        font-weight: 600;
        padding: 1.5rem 0;
        margin-bottom: 0;
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
      font-size: 16px;
    }
    transition: all 1s ease;
    &:hover {
        transform: translateY(-20px);
        transition: all 1s ease;
        p {
           color: white;
        }
    }
`

const EventGoals = () => {

    const goals = [
        {
            "cover": require('../../images/covers/women_hands.png'),
            "text": "Create a comfortable space & platform to encourage women to women communication and shared learning",
        },
        {
            "cover": require('../../images/covers/women_group.png'),
            "text": "Discussions on the benefits and relevance of cybersecurity, and the role of next generation of girls in making the world a safer place"
        },
        {
            "cover": require('../../images/covers/women_fight.png'),
            "text": "Encourage participation of women in CTF contests by getting them familiarized  with it."
        },
        {
            "cover": require('../../images/covers/women_hug.png'),
            "text": "Facilitate knowledge transfers and foster connections amongst participants"
        }
    ]

    return <GoalsContainer>
        <div className="container" style={{ maxWidth: '1333px' }}>
            <h2>Our Goals</h2>
            <div className="row mx-0">
                {goals.map((g) =>
                    <GoalCard className="col-md-6 col-lg-3 p-2">
                        <img alt="illustration" src={g.cover} />
                        <p>{g.text}</p>
                    </GoalCard>
                )}
            </div>
        </div>
    </GoalsContainer>;

};

export default EventGoals;