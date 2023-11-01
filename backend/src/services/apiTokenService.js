const googleauth = require('google-oauth-jwt');

const {dialogFlowConfig} = require('../config/dbConfig');

const getApiToken = async () => {
    return new Promise((resolve) => {
        googleauth.authenticate(
            {
            email: dialogFlowConfig.client_email,
            key: dialogFlowConfig.private_key,
            scopes: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/dialogflow'
            ]
            },
            (err, token) => {
                resolve(token);
            }
        )
    })
}
exports.getApiToken = getApiToken;