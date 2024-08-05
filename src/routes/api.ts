import Joi from 'joi';
import client from '../controllers';
import validator from '../middleware/schema.validator';

const routes = (app: any) => {

    app.route('/api/user')
        .post(validator({ token: Joi.string().required() }), client.userCreate);

    app.route('/api/notifications')
        .post(validator({ token: Joi.string().required() }), client.userViewNotifications);

    app.route('/api/notification/:id/read')
        .get(validator({ id: Joi.number().required() }), client.userReadNotification);

    app.route('/api/send/notification')
        .post(validator({ token: Joi.string().required(), title: Joi.string().required(), body: Joi.string().required() }), client.userSendNotification);
};

export default routes;
