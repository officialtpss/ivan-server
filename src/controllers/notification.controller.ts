
import db from './../../models';
import { sendMessage } from "../helpers/firebase.helper";
import httpStatus from '../helpers/httpStatus.helper';

const { models } = db.sequelize;

const send = async (req: any, res: any) => {

    try {

        const { token, title = "Test", body = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" } = req.body;

        const authUser = await models.User.findOne({ where: { token } });

        if (authUser) {

            return sendMessage(token, title, body).then(async ({ status, message, data }) => {

                if (status === 200) {

                    const createNotification = await models.Notifications.create({
                        ...req.body,
                        isRead: false,
                        userId: authUser.id,
                        status: true
                    });

                    return httpStatus.sendResp200({ status, message: message ?? "Ok", data: { notification: createNotification, user: authUser, firebase: data } }, res);

                } else {

                    return httpStatus.sendError400({ status, message }, res);
                }

            });

        } else {

            return httpStatus.sendError404({ message: "No user found", status: 404, data: {} }, res);
        }

    } catch (error: any) {
        return httpStatus.sendError400(error, res);
    }
};

const read = async (req: any, res: any) => {

    try {

        const { id } = req.params;

        const data = await models.Notifications.update({ isRead: true }, { where: { id } });

        return httpStatus.sendResp200({ message: "ok", data }, res);

    } catch (error: any) {
        return httpStatus.sendError400(error, res);
    }
};

export default {
    send,
    read
};
