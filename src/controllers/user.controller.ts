
import db from './../../models';
import httpStatus from '../helpers/httpStatus.helper';

const { models } = db.sequelize;

const create = async (req: any, res: any) => {

    try {

        const { token } = req.body;
        const [createUser] = await models.User.findOrCreate({ where: { token } });

        return httpStatus.sendResp200({ message: "ok", data: createUser }, res);

    } catch (error: any) {
        return httpStatus.sendError400(error, res);
    }
};

const view = async (req: any, res: any) => {

    try {

        const { token } = req.body;

        const data = await models.User.findOne({
            where: { token },
            include: models.Notifications,
            order: [
                [models.Notifications, 'isRead', 'asc']
            ]
        });

        return httpStatus.sendResp200({ message: "ok", data }, res);

    } catch (error: any) {
        return httpStatus.sendError400(error, res);
    }
};

export default {
    create,
    view
};
