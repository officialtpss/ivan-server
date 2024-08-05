
// 400 Bad Request
const sendError400 = (object: any, res: any) => res.status(400).send(object);

// 401 Unauthorized (RFC 7235)
const sendError401 = (object: any, res: any) => res.status(401).send(object);

// 404 Bad Request
const sendError404 = (object: any, res: any) => res.status(404).send(object);

// 400 Success
const sendResp200 = (object: any, res: any) => res.status(200).send(object);

export default {
    sendError400,
    sendError401,
    sendError404,
    sendResp200,
};
