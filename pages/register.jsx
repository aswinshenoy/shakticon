import React, { useEffect } from 'react';
import {useRouter} from "next/router";
import Base from "../components/shared";

const RegisterPage = ({ query }) => {

    const router = useRouter();

    useEffect(() => {
        router.push(`https://register.shakticon.com/${(query && query['utm_source']) ? `?utm_source=${query['utm_source']}` : ''}`)
    }, []);

    return <Base meta={{ title: 'Redirecting to Register Page' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '85vh'}}>
            <div>
                <h2>Redirecting to Registration Portal</h2>
                <p>This should take few seconds atmost, if it does not work for you, please click on the button below.</p>
                <a
                    href={`https://register.shakticon.com/${(query && query['utm_source']) ? `?utm_source=${query['utm_source']}` : ''}`}
                    className="btn btn-primary px-4 py-3 text-light"
                >
                    Open Portal
                </a>
            </div>
        </div>
    </Base>;

};

RegisterPage.getInitialProps = async ({ req, query }) => {
    return { host: req?.headers?.host, query };
}

export default RegisterPage;