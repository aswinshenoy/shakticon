import React from 'react';

const LandingNotice = () => {

    return <div className="text-white p-2" style={{ background: '#214', marginTop: "64px" }}>
        <div className="row mx-0">
            <div className="col-md-8 d-flex align-items-center p-2" style={{ color: '#AAA', fontSize: 'calc(0.8rem + 0.25vw)' }}>
                Register for Silvia Nerea Anguita's Training on "NETWORK TRAFFIC ANALYSIS"
            </div>
            <div className="col-md-4 d-flex justify-content-md-end align-items-center mb-2 mb-md-0 px-2">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSejhMQTxn0n3w1IY0gA6q3ybRT0T3khVhkk5ZvYFHRkOO-Okg/viewform"
                    className="px-3 py-1 shadow rounded-0 btn-primary btn" target="_blank" rel="noreferrer nofollow"
                >
                    Register Now
                </a>
            </div>
        </div>
    </div>

};

export default LandingNotice;