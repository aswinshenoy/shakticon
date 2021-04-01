import React, { useState } from "react";
import styled from "@emotion/styled";
import ScheduleDay from "./ScheduleDay";

const ScheduleModuleWrap = styled.section`
    background: #113;
    color: #eee;
    min-height: 45vh;
    padding: 10vh 2vw;
`;

const TabSwitcher = styled.div`
    button {
        border: none;
        padding: 5px 8px;
        background: #F50057;
        color: white;
        &:focus {
            outline: none!important;
        }
    }
    .is_active {
        background: white;
        color: #F50057;
    }
`;

const ConferenceSchedule = () => {

    const [activeDay, setActiveDay] = useState(0);

    const scheduleList = [
        {
            "date": "08 April 2020",
            "title": "Day 1",
            "events": [
                {
                    "time": "08:00 - 08:30",
                    "title": "Welcome Note",
                    "speakers": [
                        {
                            "name": "Sreepriya Chalakkal",
                            "designation": "Organizer",
                            "organization": "ShaktiCon"
                        }
                    ],
                },
                {
                    "time": "08:30 - 09:30",
                    "title": "Keynote",
                    "speakers": [
                        {
                            "name": "Rinki Sethi",
                            "designation": "CISO",
                            "organization": "Twitter",
                            "avatar": require('../../images/speakers/rinki_sethi.jpg')
                        }
                    ],
                },
                {
                    "time": "09:30 - 10:30",
                    "title": "Inaugural Session",
                    "speakers": [
                        {
                            "name": "Eric Falt",
                            "designation": "Director",
                            "organization": "UNESCO New Delhi Cluster"
                        },
                        {
                            "name": "Meenakshi Lekhi",
                            "designation": "Chairperson",
                            "organization": "Parliamentary Committee on Public Undertakings, Govt. of India"
                        }
                    ],
                }
            ]
        },
        {
            "date": "10 April 2020",
            "title": "Day 2",
        },
        {
            "date": "11 April 2020",
            "title": "Day 3",
        }
    ];

    return <ScheduleModuleWrap>
        <div className="container-lg px-0 p-md-2">
            <div className="row mx-0">
                <div className="col-md-8 my-5 my-md-0 px-3 px-md-2">
                    <h1>ShaktiCon Schedule</h1>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                    <TabSwitcher>
                        {scheduleList?.map((day, index) =>
                            <button
                                className={index===activeDay ? 'is_active' : null}
                                onClick={() => setActiveDay(index)}
                            >
                                {day.title}
                            </button>
                        )}
                    </TabSwitcher>
                </div>
            </div>
            <div className="p-1 p-md-2">
                <ScheduleDay {...scheduleList[activeDay]} />
            </div>
        </div>
    </ScheduleModuleWrap>

};

export default ConferenceSchedule;