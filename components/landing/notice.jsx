import React from 'react';

const LandingNotice = () => {

    return <div className="text-white p-2" style={{ background: '#214', marginTop: "64px" }}>
        <div className="row mx-0">
            <div className="col-md-8 d-flex align-items-center p-2" style={{ color: '#AAA', fontSize: 'calc(0.8rem + 0.25vw)' }}>
                Register for Maddie Stone's Training - "From n00b to l33t" on 26th February
            </div>
            <div className="col-md-4 d-flex justify-content-md-end align-items-center mb-2 mb-md-0 px-2">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_wWy9Q8E_CExv_1V5xOiDY3RnjH9FCvG28ljaaWj8FQZEWA/viewform?usp=send_form"
                    className="px-3 py-1 shadow rounded-0 btn-primary btn" target="_blank" rel="noreferrer nofollow"
                >
                    Register Now
                </a>
            </div>
        </div>
    </div>

};

export default LandingNotice;