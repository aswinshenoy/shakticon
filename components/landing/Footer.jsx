import React from 'react';
import styled from "@emotion/styled";

const FooterWrap = styled.div`
    background: #222;
    text-align: center;
    padding: 1.5rem;
    color: #999;
`

const FooterArea = () => {

    return <FooterWrap>
            &copy; Team Shakti 2020. All Rights Reserved.
    </FooterWrap>;

};

export default FooterArea;