import React from 'react';
import styled from "@emotion/styled";

const ScheduleDayWrap = styled.div`
    background: white;
    padding: 1rem;
    color: black;
    h3 {
      color: #F50057;
      font-size: calc(1.35rem + 0.35vw);
      margin-bottom: 0;
    }
`;

const ScheduleEvent = styled.div`
    background: rgba(250, 250, 0, 0.05);
    padding: 1rem;
    .schedule-time {
        font-size: calc(1.15rem + 0.25vw);
    }
    h4 {
        margin-bottom: 1rem;
        font-size: calc(1.35rem + 0.35vw);
    }
`;

const SpeakerCard = styled.div`
    img {
        max-width: 100%;
        width: 72px;
        border-radius: 100vw;
    }
    h5 {
        font-weight: 500;
        color: #F50057;
        margin-bottom: 3px;
        font-size: calc(1.2rem + 0.25vw);
    }
`;

const ScheduleDay = ({
    events, date, title
}) => {

    return <ScheduleDayWrap>
        <h3>{title}</h3>
        <div className="date-title">
            {date}
        </div>
        {events?.length > 0 &&
        <div className="py-3">
            {events.map((e) =>
                <ScheduleEvent className="row w-100 mb-3 mx-0">
                    <div className="col-md-3 d-flex justify-content-md-center text-md-center p-2">
                        <div className="schedule-time">{e.time}</div>
                    </div>
                    <div className="col-md-9 px-2">
                        <h4>{e.title}</h4>
                        {e.speakers?.length > 0 &&
                        <div>
                            {e.speakers.map((s) =>
                                <SpeakerCard className="w-100 d-flex align-items-center mb-3">
                                    {s.avatar &&
                                    <div className="mr-3">
                                        <img
                                            src={s.avatar}
                                            alt={s.name} draggable="false"
                                        />
                                    </div>}
                                    <div className="px-2">
                                        <h5>{s.name}</h5>
                                        <div>
                                            {s.designation}, <span>{s.organization}</span>
                                        </div>
                                    </div>
                                </SpeakerCard>
                            )}
                        </div>}
                    </div>
                </ScheduleEvent>
            )}
        </div>}
    </ScheduleDayWrap>

};

export default ScheduleDay;