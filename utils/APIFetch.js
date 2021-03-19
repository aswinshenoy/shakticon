import GraphQLFetch from './GraphQLFetch';

const graphQLEndpoint = 'https://shakticon.traboda.com/api/graphql/';

const LOGOUT_CODES = [
    'INVALID_REFRESH_TOKEN', 'AUTHENTICATION_REQUIRED', 'REFRESH_TOKEN_NOT_FOUND',
    'REFRESH_TOKEN_EXPIRED', 'INVALID_TOKEN_PAYLOAD', 'INVALID_REFRESH_TOKEN_FINGERPRINT'
];

const APIFetch = async ({ query, variables = null, endpoint = graphQLEndpoint }) => {
    return await GraphQLFetch({ query, variables, endpoint }).then((r) => {
        if (r && !Object.prototype.hasOwnProperty.call(r, 'errors')) return { success: true, data: r.data };
        return { success: false, response: r, errors: r ? r.errors : null };
    });
};

export default APIFetch;
