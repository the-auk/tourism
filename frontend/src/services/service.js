import axios from "axios";

const ip = 'http://10.0.0.161:3000'; 
/**
 * 
 * @returns tours
 */
const registerUser = async (user) => {
    try{
        await axios.post(`${ip}/user`, {
           user: user
        });
    } catch(err){
        throw err;
    }
}
const getToursList = async (tourType="Featured") => {
    try{
        const res = await axios.get(`${ip}/tours`, {
            params: {
                tourType: tourType
            }
        });
        return res.data;
    } catch(err){
        throw err;
    }
}
const getDialogToken = async () => {
    try {
        const res = await axios.get(`${ip}/token`, {
        });
       return res.data;
      } catch (err) {
            throw err;
      }
}
const sendMessageDialogFlow = (msg, onResult, accessToken) => {
    try{
        const DEFAULT_BASE_URL = 'https://dialogflow.googleapis.com/v2beta1/projects/';
        const data = {
          queryInput: {
            text: {
              languageCode: "en",
              text: msg,
            },
          },
        };
        const url = `${DEFAULT_BASE_URL}${'bains-bot-xw9h'}/agent/sessions/${123456789}:detectIntent`;
  
        fetch(url, {
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json; charset=utf-8',
            charset: 'utf-8',
          },
          method: 'POST',
        })
          .then(async (response) => {
            return response.json().then(onResult);
          })
          .catch(onError => {});
    } catch(err){
        throw err;
    }
}
exports.getToursList = getToursList;
exports.getDialogToken = getDialogToken;
exports.registerUser = registerUser;
exports.sendMessageDialogFlow = sendMessageDialogFlow;