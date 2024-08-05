var admin = require("firebase-admin");
var serviceAccount = require("../constant/serviceAccount")['data'];

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const messaging = admin.messaging();

const sendMessage = async (token, title, body) => {

    try {

        const payload = { 'token': token, 'notification': { title, body } };

        return messaging.send(payload).then((response) => ({ status: 200, data: response, message: "Ok" })).catch((error) => {
            throw error;
        });

    } catch (error: any) {

        return {
            status: 500,
            message: error.message,
            data: JSON.stringify(error)
        };
    }
};

export {
    sendMessage
};
